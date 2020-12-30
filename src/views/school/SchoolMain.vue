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
    <router-view class="pc-max-width detail"></router-view>

    <!-- banner -->
    <SchoolBanner :schoolName="this.$route.name" />

    <!-- 索取招生方案 -->
    <EnrollmentPlan />

    <!-- 推荐学校 -->
    <RecommendSchool :schoolData="schoolData" />

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
      schoolData: {
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
      }
    };
  },
  computed: {
    mbxNav() {
      const name = this.$route.name
      const nav = {
        首页: "/",
        狮城留学: "/overseas-study/one",
        学前教育: "/overseas-study/four",
      };
      nav[name] = "";
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