<template>
  <div class="wap-study-abroad">
    <h3>留学与教育</h3>
    <div class="recommend" v-for="(item, name, key) in schoolData" :key="key" :class="`recommend${key+1}`">
      <strong>{{name}}</strong>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, key) in schoolData[name]" :key="key">
          <router-link :to="item.url">
            <img :src="item.icon" :alt="item.name" />
            <p>{{item.name}}</p> 
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOptions: {
        slidesPerView: 3,
        loop: true,
        autoplay: 3000,
        spaceBetween: 20
      },
      schoolData: {
        新加坡学顶尖前教育推荐: [
          {
            icon: require('../../../assets/images/overseas-study/school/e-bridge-logo.png'),
            name: "E-bridge伊桥幼儿园",
            url: "/e-bridge",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/etonhouse-logo.png"),
            name: "EtonHouse 伊顿幼儿园",
            url: "/etonhouse",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/maplebear-logo.png"),
            name: "Maple Bear 枫叶小熊",
            url: "/maple-bear",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/mindchaps-logo.png"),
            name: "迈杰思幼儿园",
            url: "/mindc-champs",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/myfirstskool-logo.png"),
            name: "My First Skool 幼儿园",
            url: "/my-first-skool",
          },
          {
            icon: require('../../../assets/images/overseas-study/school/odyssey-logo.png'),
            name: "Odyssey 幼儿园",
            url: "/Odyssey",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/pat-s-logo.png"),
            name: "Pat’s 校舍",
            url: "/pat-s",
          },
          {
            icon: require('../../../assets/images/overseas-study/school/whitelodgeIogo-logo.png'),
            name: "Whitelogde 幼儿园",
            url: "/white-lodge",
          }
        ],
        新加坡优质国际学校推荐: [
          {
            icon: require("../../../assets/images/overseas-study/school/school-logo1.png"),
            name: "东陵信托学校",
            url: "/tangling-trust",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/school-logo2.png"),
            name: "东南亚世界联合书院",
            url: "/united-world-college-south-east-asia",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/school-logo3.png"),
            name: "华中国际",
            url: "/hwa-chong",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/school-logo4.png"),
            name: "圣若瑟书院",
            url: "/sji-international",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/school-logo5.png"),
            name: "新加坡澳大利亚国际学校",
            url: "/singapore-australian-international",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/school-logo6.png"),
            name: "新加坡加拿大国际学校",
            url: "/canadian-international",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/school-logo7.png"),
            name: "新加坡美国学校",
            url: "/singapore-american",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/school-logo8.png"),
            name: "英华国际学校",
            url: "/acs-international",
          }
        ]
      }
    }
  },
  mounted () {}
}
</script>
<style scoped lang="less">
.wap-study-abroad {
  display: none;
  padding: 25px 0;
  border-top: 10px solid #f7f7f7;
  @media (max-width: 767px) {
    display: block;
  }
  h3 {
    // padding-bottom: 10px;
    text-align: center;
    font-size: 18px;
  }
}
.recommend2 {
  direction: rtl;
}
.recommend {
  margin-top: 20px;
  strong {
    display: block;
    font-weight: normal;
    padding-bottom: 15px;
    text-align: center;
    font-size: 14px;
    color: #315455;
  }
  .swiper-slide {
    border: 1px solid #EFEFEF;
    border-radius: 5px;
    &.swiper-slide-next + div {
      // width: 260px !important;
      // transform: scale(1.1);
    }
  }
  a {
    display: inline-block;
    padding: 18px 20px;
    
    p {
      height: 34px;
      font-size: 12px;
      text-align: center;
      color: #444;
    }
    img {
      display: block;
      width: 100%;
    }
    &:hover {
      box-shadow: 0 0 5px 0 #adadad;
    }
  }
}
</style>