<template>
  <Layout>
    <loadingPage v-if="!loadingSuccess" />
    <div v-else class="passport">
      <div class="scroll">
        <div class="passport-list">
          <ul class="clearfix">
            <li class="filter-li">
              <span @click="showAllFilter()">
                显示全部
                <em :class="{open:filterResult.length > 0}"></em>
              </span>
              <span class="on">
                筛选
                <div class="filter">
                  <p v-for="(obj, type, key) in filterType" :key="key" @click="filterClick(type)">
                    <i :class="{set:filterResult.indexOf(type) >= 0}"></i>
                    {{type}}
                  </p>
                </div>
              </span>
            </li>
            <li v-for="(lists, index) in passportList" :key="index">
              <div class="img">
                <img :src="lists.passport_img" />
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
        <div class="visa-country clearfix">
          <div class="country-flag left">
            <ul class="clearfix" v-for="(obj, name, key) in allCountry" :key="key" ref="visa_country">
              <li class="fixed">
                <img :src="obj.flag" />
                {{name}}
              </li>
            </ul>
          </div>
          <div class="visa left">
            <ul class="clearfix" v-for="(obj, name, key) in allCountry" :key="key" ref="visa_country">
              <li
                v-for="(visa, name2, key2) in obj"
                :key="key2"
                v-show="name2 !== 'flag'"
                :index="filterResult.indexOf(visa)"
                :class="countryClass(visa)"
              >{{visa}}</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../components/layout.vue";
import { animation, windowScroll } from "../../assets/js/config.js";
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
      filterCountry: {}
    };
  },
  watch: {
    filterResult() {
      setTimeout(() => {
        let visaCountryList = document
          .getElementsByClassName("visa-country")[0]
          .getElementsByTagName("ul");
        for (let i = 0; i < visaCountryList.length; i++) {
          let lis = visaCountryList[i].getElementsByTagName("li");
          for (let s = 0; s < lis.length; s++) {
            lis[s].parentNode.style.display = "block";
            if (this.filterResult.length > 0) {
              if (lis[s].getAttribute("index") >= 0) {
                lis[s].parentNode.style.display = "block";
              } else {
                lis[s].parentNode.style.display = "none";
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
      this.filterResult = [];
    },
    filterClick(type) {
      for (let i = 0; i < this.filterResult.length; i++) {
        if (this.filterResult[i] === type) {
          this.filterResult.splice(i, 1);
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
          this.passportList = res.data.data;
          let all = res.data.data;
          for (let i = 0; i < all.length; i++) {
            for (let s = 0; s < all[i].visa_countries.length; s++) {
              this.allCountry[all[i].visa_countries[s].name] = {};
              this.filterType[all[i].visa_countries[s].type] = "";
            }
          }

          for (let name in this.allCountry) {
            for (let i = 0; i < all.length; i++) {
              for (let s = 0; s < all[i].visa_countries.length; s++) {
                this.allCountry[name][all[i].name] = "";
              }
            }
          }

          for (let name in this.allCountry) {
            for (let a in this.allCountry[name]) {
              for (let i = 0; i < all.length; i++) {
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

          this.loadingSuccess = true;
          setTimeout(function() {
            let scroll = document.documentElement.scrollTop || document.body.scrollTop;
            animation(scroll);
            windowScroll();
          }, 10);
          
        }
      });
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
    })
  }
};
</script>
<style lang="less" scoped>
.passport {
  background: #1b2f35;
  padding: 180px 0 50px;
  margin: auto;
  width: 1925px;
}
.passport-list {
  li {
    float: left;
    padding: 12px 0 0 10px;
    width: 15%;
    text-align: center;
    color: #fff;
    height: 105px;
    border-bottom: 1px solid #0f1f24;
    border-right: 1px solid #0f1f24;
    cursor: pointer;
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
          &:hover {
            .filter {
              display: block;
            }
          }
        }
      }
    }
    .img {
      max-width: 57px;
      float: left;
      border: 1px solid #ffe19a;
      padding: 1px;
      margin-right: 15px;
      border-radius: 2px;;
      img {
        width: 100%;
      }
    }

    .info {
      strong {
        text-align: left;
        font-size: 30px;
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
          top: -12px;
          font-size: 12px;
          margin-left: 6px;
        }
        &.country {
          position: relative;
          padding-right: 7px;
          margin-right: 13px;
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 8px;
            width: 1px;
            height: 24px;
            background: #415257;
          }
        }
      }
    }
  }
  .filter-li {
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
      width: 16.6666%;
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
}
</style>
