<template>
  <div class="school-main">
    <div class="mbx">
      <div class="pc-max-width">
        <router-link :to="u" v-for="(u, n, k) in mbxNav" :key="k">
          {{ n }}
          <template v-if="k < 3">></template>
        </router-link>
      </div>
    </div>

    <!-- 学校内容 -->
    <div class="pc-max-width">
      <router-view class=" detail"></router-view>
    </div>

    <!-- banner -->
    <SchoolBanner :schoolName="this.$route.name" />

    <!-- 索取招生方案 -->
    <EnrollmentPlan />

    <!-- 推荐学校 -->
    <RecommendSchool :schoolData="schoolData[schoolDataType]" />

    <ContentImg />
    <ContactUs />
  </div>
</template>
<script>
import EnrollmentPlan from "../../components/EnrollmentPlan"
import RecommendSchool from "../study/base/RecommendSchool"
import ContactUs from "../../components/commonComponent/ContactUs"
import ContentImg from "../../components/ContentImg"
import SchoolBanner from "./base/SchoolBanner"
export default {
  components: {
    RecommendSchool,
    EnrollmentPlan,
    ContentImg,
    ContactUs,
    SchoolBanner
  },
  data() {
    return {
      schoolDataType: this.$route.meta.type,
      schoolData: {
        学前教育: {
          title: "新加坡学前教育推荐",
          list: [
            {
              icon: require('../../assets/images/overseas-study/school/e-bridge-logo.png'),
              name: "E-bridge伊桥幼儿园",
              url: "/e-bridge",
            },
            {
              icon: require("../../assets/images/overseas-study/school/etonhouse-logo.png"),
              name: "etonhouse伊顿",
              url: "/etonhouse",
            },
            {
              icon: require("../../assets/images/overseas-study/school/maplebear-logo.png"),
              name: "Maple Bear 枫叶小熊",
              url: "/maple-bear",
            },
            {
              icon: require("../../assets/images/overseas-study/school/mindchaps-logo.png"),
              name: "Mindchaps",
              url: "/mindc-champs",
            },
            {
              icon: require("../../assets/images/overseas-study/school/myfirstskool-logo.png"),
              name: "Myfirstskool",
              url: "/my-first-skool",
            },
            {
              icon: require('../../assets/images/overseas-study/school/odyssey-logo.png'),
              name: "Odyssey 幼儿园",
              url: "/Odyssey",
            },
            {
              icon: require("../../assets/images/overseas-study/school/pat-s-logo.png"),
              name: "Pat’s 校舍",
              url: "/pat-s",
            },
            {
              icon: require('../../assets/images/overseas-study/school/whitelodgeIogo-logo.png'),
              name: "Whitelogde 幼儿园",
              url: "/white-lodge",
            }
          ]
        },
        新加波国际学校: {
          title: "新加坡国际学校",
          list: [
            {
              icon: require("../../assets/images/overseas-study/school/school-logo1.png"),
              name: "东陵信托学校",
              url: "/tangling-trust",
            },
            {
              icon: require("../../assets/images/overseas-study/school/school-logo2.png"),
              name: "东南亚世界联合书院",
              url: "/united-world-college-south-east-asia",
            },
            {
              icon: require("../../assets/images/overseas-study/school/school-logo3.png"),
              name: "华中国际",
              url: "/hwa-chong",
            },
            {
              icon: require("../../assets/images/overseas-study/school/school-logo4.png"),
              name: "圣若瑟书院",
              url: "/sji-international",
            },
            {
              icon: require("../../assets/images/overseas-study/school/school-logo5.png"),
              name: "新加坡澳大利亚国际学院",
              url: "/singapore-australian-international",
            },
            {
              icon: require("../../assets/images/overseas-study/school/school-logo6.png"),
              name: "新加坡加拿大国际学校",
              url: "/canadian-international",
            },
            {
              icon: require("../../assets/images/overseas-study/school/school-logo7.png"),
              name: "新加坡美国学校",
              url: "/singapore-american",
            },
            {
              icon: require("../../assets/images/overseas-study/school/school-logo8.png"),
              name: "英华国际学校",
              url: "/acs-international",
            }
          ]
        }
      }
    }
  },
  computed: {
    mbxNav() {
      const name = this.$route.name
      const type = this.$route.meta.type
      const nav = {
        首页: '/',
        狮城留学: '/overseas-study/one'
      }
      if (type === '学前教育') {
        nav.学前教育 = '/overseas-study/four'
      } else {
        nav.新加坡国际学校 = '/overseas-study/three'
      }
      nav[name] = ''
      return nav;
    },
  },
};
</script>
<style scoped lang="less">
.school-main {
  .mbx {
    height: 120px;
    padding-top: 50px;
    background: #f7f7f7;
    line-height: 70px;
    a {
      font-size: 12px;
      color: #aaa;
      &:hover {
        color: #447375;
      }
    }
  }
  .detail {
    margin-top: 40px;
    padding: 0;
    border: 1px solid #d6d6d6;
    @media (max-width: 767px) {
      margin-top: 20px;
      border: none;
    }
  }
}
</style>
<style lang="less">
.study-title {
  position: relative;
  font-size: 28px;
  text-align: center;
  padding-bottom: 20px;
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 42px;
    height: 5px;
    margin-left: -21px;
    background: #447375ff;
  }
  @media (max-width: 1200px) {
    font-size: 26px;
    padding-bottom: 18px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
}
</style>