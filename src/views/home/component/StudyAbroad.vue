<template>
  <div class="study-abroad pc-max-width margin-t-80">
    <div class="public-title animation-show">
      <h3>狮城留学</h3>
      <span>
        <i>
          <img src="../../../assets/images/title-img3.png" />
        </i>
      </span>
      <p>Study abroad education in Singapore</p>
    </div>
    
    <div class="introduction">
      <p>新加坡——举世闻名的“花园城市”，既现代又充满活力，其教育体制享誉亚洲乃至全球。这里不但有优质的公立教育资源，还有众多知名的国际学校，无缝衔接世界各国教育体制。新加坡政府自2017年起放宽移民政策，开放了留学生直接申请永居政策，欢迎在新加坡受教育的年轻人，不需要邀请函即可直接申请永久居民（PR），真正实现留学+移民两不误，一人留学，全家移民！新加坡凭借多元的教育选择和利好的移民政策，吸引着千千万万的国际学生到此就读，是国际学生寻求顶尖教育的完美目的地。</p>
    </div>

    <div class="recommend" v-for="(item, name, key) in schoolData" :key="key" :class="`recommend${key+1}`">
      <h3>{{name}}</h3>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, key) in schoolData[name]" :key="key">
          <router-link :to="item.url">
            <img :src="item.icon" :alt="item.name" />
            {{item.name}}
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
        slidesPerView: 5,
        loop: true,
        autoplay: 30000,
        spaceBetween: 30
      },
      schoolData: {
        新加坡学前教育推荐: [
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
        新加坡国际学校推荐: [
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
  mounted () {
    let windowWidth = document.body.clientWidth
    if (windowWidth < 767) {
      this.swiperOptions.slidesPerView = 3
    }
  }
}
</script>
<style scoped lang="less">
.introduction {
  height: 280px;
  margin-top: 35px;
  padding: 75px 0 0 75px;
  background: url('../../../assets/images/study-abroad-bg.png') no-repeat;
  background-size: auto 280px;
  p {
    width: 700px;
    line-height: 28px;
    color: #fff;
  }
}
.recommend2 {
  direction: rtl;
}
.recommend {
  h3 {
    padding: 50px 0;
    text-align: center;
    font-size: 20px;
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
    font-size: 12px;
    text-align: center;
    color: #444;
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