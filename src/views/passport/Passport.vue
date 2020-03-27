<template>
  <Layout>
    <loadingPage v-if="!loadingSuccess" />
    <div v-else class="passport">
      <div class="scroll">
        <div class="passport-list">
          <div class="wap-img">
            <ul>
              <li></li>
              <li v-for="(lists, index) in passportList" :key="index" :class="{on: index === countryIndex}">
                <div class="img" @click="switchCountry(index)">
                  <span>
                    <img :src="lists.passport_img" />
                  </span>
                  <h3>{{lists.name}}</h3>
                </div>
              </li>
            </ul>
          </div>
          <ul class="clearfix">
            <li class="filter-li">
              <span @click="showAllFilter()">
                显示全部
                <em :class="{open:filterResult.length > 0}"></em>
              </span>
              <span class="on" @click.stop="showFilter(true)">
                筛选
                <div class="filter" :class="{show: showFilterType}">
                  <div class="close" @click.stop="showFilter(false)"><img src="../../assets/images/close-black.png"></div>
                  <h2>筛选</h2>
                  <div class="sc">
                    <h3 @click="showAllFilter()">
                      显示全部
                      <em :class="{open:filterResult.length > 0}"></em>
                    </h3>
                    <p v-for="(obj, type, key) in filterType" :key="key" @click="filterClick(type)">
                      <i :class="{set:filterResult.indexOf(type) >= 0}"></i>
                      {{type}}
                    </p>
                  </div>
                </div>
              </span>
            </li>
            <li v-for="(lists, index) in passportList" :key="index" :class="{'show': index === countryIndex}">
              <div class="img web-img" @click="switchCountry(index)">
                <span>
                  <img :src="lists.passport_img" />
                </span>
                <h3>{{lists.name}}</h3>
              </div>
              <div class="clearfix info">
                <strong class="name">{{lists.name}}</strong>
                <div class="left country">
                  <strong>{{lists.visa_free_number}}</strong>
                  <i>免签</i>
                </div>
                <div class="left">
                  <strong>{{lists.rank}}</strong>
                  <i>排名</i>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="visa-country clearfix" v-if="allCountry">
          <div class="country-flag left">
            <ul class="clearfix" v-for="(obj, name, key) in newData || allCountry" :key="key" ref="visa_country" :index="key">
              <li class="fixed" >
                <img :src="obj.flag" />
                {{name}}
              </li>
            </ul>
          </div>
          <div class="visa left">
            <ul class="clearfix" v-for="(obj, name, key) in newData || allCountry" :key="key" ref="visa_country">
              <li
                v-for="(visa, name2, key2) in obj"
                :key="key2"
                v-show="name2 !== 'flag'"
                :index="filterResult.indexOf(visa)"
                :class="countryClass(visa)"
              >{{visa || 'N/A'}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../components/layout.vue";
import { animation, windowScroll, device } from "../../assets/js/config.js";
import loadingPage from "../../components/commonComponent/loadingPage.vue";

export default {
  name: "app",
  components: {
    Layout,
    loadingPage
  },
  data() {
    return {
      passportList: "",
      loadingSuccess: false,
      allCountry: {},
      filterType: {},
      filterResult: [],
      filterCountry: {},
      newData: '',
      countryIndex: 0,
      showFilterType: false
    };
  },
  watch: {
    filterResult() {
      setTimeout(() => {
        if (this.filterResult.length > 0) {
          this.newData = {}
          for (let name in this.allCountry) {
            for (let i = 0; i < this.filterResult.length; i++) {
              if (JSON.stringify(this.allCountry[name]).indexOf(this.filterResult[i]) >= 0) {
                this.newData[name] = this.allCountry[name]
              }
            }
          }
        }
      }, 100);
    }
  },
  methods: {
    countryClass(e) {
      let className;
      if (e) {
        if (e.indexOf("签证入境") >= 0) {
          className = "type1";
        } else if (e.indexOf("落地签入境") >= 0 || e.indexOf("电子签证") >= 0) {
          className = "type2";
        } else if (e.indexOf("免签目的国") >= 0) {
          className = "type3";
        } else if (
          e.indexOf("eVisa") >= 0 ||
          e.indexOf("旅行") >= 0 ||
          e.indexOf("enrolment") >= 0 ||
          e.indexOf("tourist") >= 0 ||
          e.indexOf("预注册") >= 0
        ) {
          className = "type4";
        }
      }
      return className;
    },
    showAllFilter() {
      this.newData = '';
      this.filterResult = []
    },
    filterClick(type) {
      for (let i = 0; i < this.filterResult.length; i++) {
        if (this.filterResult[i] === type) {
          this.filterResult.splice(i, 1);
          if (this.filterResult.length === 0) {
            this.showAllFilter()
          }
          return;
        }
      }
      this.filterResult.push(type);
    },
    getData() {
      this.$http({
        method: "get",
        url: process.env.VUE_APP_API + "/v1/passportsInfo"
      }).then(res => {
        if (res.data.code === 200) {
          localStorage.setItem('passportAll', JSON.stringify(res.data.data))
          this.passportList = res.data.data;
          this.switchCountry(device() === 'wap' ? 0 : '-1')
          this.loadingSuccess = true;
          setTimeout(function() {
            let scroll = document.documentElement.scrollTop || document.body.scrollTop;
            animation(scroll);
            windowScroll();
          }, 10);
        }
      });
    },
    switchCountry (index) {
      this.allCountry = {}
      this.filterType = {}
      let all = JSON.parse(localStorage.getItem('passportAll'))
      if (index >= 0 && device() === 'wap') {
        this.countryIndex = index
        all = JSON.parse(localStorage.getItem('passportAll')).splice(index, 1)
      }
      for (let i = 0; i < all.length; i++) {
        if (all[i].visa_countries) {
          for (let s = 0; s < all[i].visa_countries.length; s++) {
            this.allCountry[all[i].visa_countries[s].name] = {};
            this.filterType[all[i].visa_countries[s].type] = "";
          }
        }
      }
      for (let name in this.allCountry) {
        for (let i = 0; i < all.length; i++) {
          if (all[i].visa_countries) {
            for (let s = 0; s < all[i].visa_countries.length; s++) {
              this.allCountry[name][all[i].name] = "";
            }
          }
        }
      }
      for (let name in this.allCountry) {
        for (let a in this.allCountry[name]) {
          for (let i = 0; i < all.length; i++) {
            if (all[i].visa_countries) {
              for (let s = 0; s < all[i].visa_countries.length; s++) {
                if (name === all[i].visa_countries[s].name) {
                  this.allCountry[name].flag = all[i].visa_countries[s].flag;
                  if (all[i].name === a) {
                    this.allCountry[name][a] = all[i].visa_countries[s].type;
                  }
                }
              }
            }
          }
        }
      }
    },
    showFilter (type) {
      if (device() === 'wap') {
        this.showFilterType = type
      }
    }
  },
  mounted() {
    this.getData();
    window.addEventListener('scroll', () => {
      let countryFlag = document.getElementsByClassName('country-flag')[0]
      if (countryFlag) {
        let scroll = document.documentElement.scrollTop || document.body.scrollTop;
        countryFlag.style.top = 285 - scroll  + 'px'
      }

      let filterLi = document.getElementsByClassName('filter-li')[0]
      if (filterLi && device() !== 'wap') {
        let scroll = document.documentElement.scrollTop || document.body.scrollTop;
        filterLi.style.top = 180 - scroll  + 'px'
      }
    })
  }
};
</script>
<style lang="less" scoped>
.passport {
  background: #1b2f35;
  padding: 180px 0 50px;
  margin: auto;
  min-width: 1925px;
  @media (max-width: 767px) {
    padding: 60px 0 50px;
    width: 100%;
    min-width: auto;
  }
}
.passport-list {
  padding-left: 192px;
  li {
    float: left;
    padding: 12px 0 0 10px;
    width: 12.5%;
    text-align: center;
    color: #fff;
    height: 105px;
    border-bottom: 1px solid #0f1f24;
    border-right: 1px solid #0f1f24;
    &:first-child {
      padding: 0;
      width: 10%;
      span {
        display: block;
        line-height: 52px;
        height: 52px;
        position: relative;
        &:first-child {
          border-bottom: 1px solid #14252b;
        }
        &:last-child {
          @media (min-width: 767px) {
            &:hover {
              .filter {
                display: block;
              }
            }
          }
        }
      }
    }
    .img {
      max-width: 57px;
      float: left;
      padding: 1px;
      margin-right: 10px;
      border-radius: 2px;;
      span {
        display: block;
         border: 1px solid #ffe19a;
      }
      h3 {
        display: none;
      }
      img {
        width: 100%;
      }
    }

    .info {
      strong {
        text-align: left;
        font-size: 20px;
        font-weight: normal;
        &.name {
          display: block;
          color: #ebd69c;
          font-size: 16px;
          padding: 10px 0;
        }
      }
      div {
        i {
          position: relative;
          top: -5px;
          font-size: 12px;
          margin-left: 6px;
        }
        &.country {
          position: relative;
          padding-right: 7px;
          margin-right: 7px;
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 6px;
            width: 1px;
            height: 16px;
            background: #415257;
          }
        }
      }
    }
  }
  .filter-li {
    position: fixed;
    width: 192px !important;
    left: 0;
    top: 180px;
    z-index: 99;
    background: #1b2f35;
    em {
      position: relative;
      top: 1px;
      display: inline-block;
      width: 24px;
      height: 12px;
      background: #545c4e;
      border-radius: 6px;
      margin-left: 5px;
      &.open {
        &:after {
          left: 14px;
          background: #f9d79e;
        }
      }
      &:after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background: #1b2f35;
        transition: 0.3s;
      }
    }
    .on {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 60px;
        top: 20px;
        width: 11px;
        height: 13px;
        background: url("../../assets/images/filter.png") no-repeat;
        background-size: 100%;
      }
      &:after {
        content: "";
        position: absolute;
        right: 60px;
        top: 23px;
        width: 10px;
        height: 5px;
        background: url("../../assets/images/triangle.png") no-repeat;
        background-size: 100%;
      }
    }
    .filter {
      display: none;
      position: absolute;
      z-index: 999;
      left: 65px;
      top: 45px;
      z-index: 12;
      line-height: 30px;
      padding: 12px;
      width: 240px;
      background: #fff;
      border-radius: 3px;
      color: #111;
      text-align: left;
      h3, h2 {
        display: none;
      }
      .close {
        display: none;
      }
      p {
        i {
          display: inline-block;
          position: relative;
          top: 1px;
          margin-right: 2px;
          width: 12px;
          height: 12px;
          border: 1px solid #b4b4b4;
          border-radius: 2px;
          &.set {
            &::after {
              content: "";
              position: absolute;
              left: 3px;
              top: 1px;
              width: 2px;
              height: 5px;
              transform: rotate(-135deg);
              border-left: 1px solid #242424;
              border-top: 1px solid #242424;
            }
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    padding: 10px 5px 0;
    position: relative;
    ul.clearfix {
      border-bottom: 1px solid #0f1f24;
    }
    .wap-img {
      white-space: nowrap;
      overflow: auto;
      &::-webkit-scrollbar {
        height: 0px;
      }
      li {
        display: inline-block;
        padding: 0;
        border: none;
        &:first-child {
          display: none;
        }
      }
    }
    li {
      display: none;
      width: 105px;
      height: auto;
      float: none;
      text-align: center;
      padding: 0 0 60px 0;
      border-right: none;
      .img {
        max-width: 100%;
        float: none;
        margin: 0 5px;
        span {
          margin: auto;
          width: 80px;
          border: none;
          padding: 2px;
        }
        h3 {
          display: block;
          padding: 10px 0 15px;
          font-size: 12px;
        }
      }
      &.on {
        span {
          border: 1px solid #ffe19a;
        }
        h3 {
          color: #ffe19a;
        }
      }
      &.show {
        width: auto;
        border: none;
        display: block;
      }
      .info {
        position: absolute;
        left: 0;
        width: 100%;
        padding: 12px 10px 0 10px;
        border-top: 1px solid #0f1f24;
        strong {
          font-size: 26px;
          &.name {
            display: none;
          }
        }
        div {
          i {
            top: -8px;
            opacity: .8;
          }
          &.country {
            padding-right: 15px;
            &:after{
              height: 19px;
            }
          }
        }
      }
    }
    .filter-li {
      position: absolute;
      bottom: 10px;
      right: 0;
      width: 90px !important;
      left: auto;
      border: none;
      z-index: 99;
      display: block;
      span {
        color: #ffe19a;
        &:last-child {
          line-height: normal;
          height: auto;
          padding-top: 10px;
          &:before{
            top: 15px;
            left: 14px;
          }
          &:after{
            right: 15px;
            top: 17px;
          }
        }
        &:first-child {
          display: none;
        }
      }
      .filter {
        position: fixed;
        top: auto;
        left: 0;
        bottom: -110%;
        height: 100%;
        width: 100%;
        display: block;
        z-index: 9999;
        background: #fff;
        transition: .3s;
        padding: 15px 50px;
        border-radius: 0;
        .close {
          position: fixed;
          right: 15px;
          top: 15px;
          width: 20px;
          height: 20px;
          img {
            display: block;
            width: 100%;
          }
        }
        &.show {
          bottom: 0;
          .close {
            display: block;
          }
        }
        .sc {
          position: absolute;
          left: 50px;
          top: 65px;
          right: 0;
          bottom: 50px;
          overflow: auto;
        }
        h2 {
          font-size: 18px;
          padding-bottom: 20px;
        }
        h3, h2 {
          display: block;
        }

      }
    }
  }
}

.visa-country {
  li {
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    border-right: 1px solid #0f1f24;
    border-bottom: 1px solid #0f1f24;
  }
  .country-flag {
    width: 192px;
    position: fixed;
    background: #1b2f35;
    z-index: 10;
    left: 0;
    top: 285px;
    li {
      text-align: left;
      padding-left: 13px;
      img {
        width: 18px;
      }
    }
  }
  .visa {
    width: 100%;
    padding-left: 192px;
    ul {
      cursor: pointer;
      @media(min-width: 767px) {
        &:hover {
          position: relative;
          z-index: 1;
          box-shadow: 0 0 0 1px #ffe19a;
          li {
            background: #1b2f35;
          }
        }
      }
    }
    li {
      float: left;
      width: 12.5%;
      &.type1 {
        background: #a91c1c;
      }
      &.type2 {
        background: #2d3b7e;
      }
      &.type3 {
        background: #256224;
      }
      &.type4 {
        background: #90711f;
      }
    }
  }
  @media (max-width: 767px) {
    .visa {
      width: calc(100% - 192px);
      padding: 0;
      li {
        width: 100%;
      }
    }
    .country-flag {
      position: static;
    }
  }
}
</style>
