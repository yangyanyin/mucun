<template>
  <div class="preschool">
    <div class="pc-max-width">
      <div class="content clearfix margin-t-80 animation-show">
        <div class="list left img">
          <img
            src="../../../assets/images/overseas-study/preschool-education-icon1.jpg"
          />
        </div>
        <div class="list text right">
          <div class="t">
            <strong>NO.1</strong>
            <p>
              新加坡学前教育被公认为世界上最好的学前教育体系之一，沿袭了英国的幼儿教育体系，新加坡政府对学前教育的发展采用监管、扶持的机制，鼓励民间私立自行运营发展幼儿教育
            </p>
          </div>
        </div>
      </div>

      <div class="content clearfix margin-t-80 animation-show">
        <div class="list img right">
          <img
            src="../../../assets/images/overseas-study/preschool-education-icon2.jpg"
          />
        </div>
        <div class="list text left">
          <div class="t">
            <strong>NO.2</strong>
            <p>
              通常为3至6周岁的适龄儿童提供三年的学前教育，“寓教于乐”的教学理念。每个年级的日常课程包含了：开发语言和阅读能力、基本算术、科学常识、创新能力、实践技能以及音乐欣赏和室外游戏等等，孩子每天有频繁的机会选择和探索，注重孩子的智力开发，鼓励幼儿在游戏中学习；注重培养幼儿的独创性，培养社会责任感。课程通常以英语和第二语言进行教学，使孩子各方面技能都得到均衡发展。
            </p>
          </div>
        </div>
      </div>

      <div class="content clearfix margin-t-80 animation-show">
        <div class="list left img">
          <img
            src="../../../assets/images/overseas-study/preschool-education-icon3.jpg"
          />
        </div>
        <div class="list text right">
          <div class="t">
            <strong>NO.3</strong>
            <p>
              新加坡的教育十分注重从小进行基本的价值观和道德观的教育、培养良好个性品质的人格：辨别是非对错；愿意与他人沟通与分享；具有好奇心及勇于探索；建立健康的生活以及培养良好的习惯；掌握独立生活的自理能力。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="advantage margin-t-80">
      <h3 class="study-title">选择新加坡学前教育的优势</h3>
      <div class="pc-max-width box-content clearfix">
        <div v-for="(item, key) in listData" :key="key" class="item left">
          <img :src="item.icon" :alt="item.text" />
          <p>{{ item.text }}</p>
        </div>
      </div>
      <h4>适合人群：3岁至6岁适龄儿童可直接入学，无英文要求</h4>
    </div>

    <Process></Process>
1
    <RecommendSchool :schoolData="schoolData"></RecommendSchool>
  </div>
</template>
<script>
import Process from "./Process";
import RecommendSchool from "./RecommendSchool";
export default {
  components: {
    Process,
    RecommendSchool,
  },
  data() {
    return {
      listData: [
        {
          icon: require("../../../assets/images/overseas-study/preschool-education-icon4.png"),
          text: "入学门槛低，学生证批复率高",
        },
        {
          icon: require("../../../assets/images/overseas-study/preschool-education-icon5.png"),
          text: "启蒙阶段培养孩子的创造力、想象力以及动手能力",
        },
        {
          icon: require("../../../assets/images/overseas-study/preschool-education-icon6.png"),
          text: "培养孩子良好的习惯、塑造孩子的社会意识",
        },
        {
          icon: require("../../../assets/images/overseas-study/preschool-education-icon7.png"),
          text: "师资考核严格、教学质量高",
        },
        {
          icon: require("../../../assets/images/overseas-study/preschool-education-icon8.png"),
          text: "免AEIS考试直接升入小学一年级",
        },
        {
          icon: require("../../../assets/images/overseas-study/preschool-education-icon9.png"),
          text: "让孩子早在童年阶段就轻松掌握英语",
        },
      ],
      schoolData: {
        title: "推荐学前机构",
        list: [
          {
            icon: require('../../../assets/images/overseas-study/school/e-bridge-logo.png'),
            name: "E-bridge伊桥幼儿园",
            url: "/e-bridge",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/etonhouse-logo.png"),
            name: "etonhouse伊顿",
            url: "/etonhouse",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/maplebear-logo.png"),
            name: "Maple Bear 枫叶小熊",
            url: "/maple-bear",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/mindchaps-logo.png"),
            name: "Mindchaps",
            url: "/mindc-champs",
          },
          {
            icon: require("../../../assets/images/overseas-study/school/myfirstskool-logo.png"),
            name: "Myfirstskool",
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
        ]
      }
    };
  },
};
</script>
<style scoped lang="less">
.content {
  position: relative;
  .list {
    width: 50%;
    img {
      display: block;
      width: 100%;
    }
    strong {
      display: block;
      font-size: 36px;
      color: #447375;
      margin-bottom: 15px;
      span {
        display: block;
        margin-top: 15px;
        font-size: 16px;
        padding: 5px 0;
        background: #bd8c67;
        text-align: center;
        color: #fff;
      }
    }
    p {
      font-size: 16px;
      line-height: 28px;
    }
    &.sixth {
      strong {
        color: #bd8c67;
        display: inline-block;
      }
    }
    &.text {
      position: absolute;
      display: flex;
      height: 100%;
      right: 0;
      top: 0;
      padding-left: 45px;
      .t {
        align-self: center;
        width: 100%;
      }
      &.left {
        padding: 0 45px 0 0;
        left: 0;
        right: auto;
      }
    }
  }
  @media (max-width: 767px) {
    padding: 0 5px;
    .list {
      width: 100%;
      text-align: center;
      strong {
        font-size: 20px;
        margin: 20px 0 10px 0;
      }
      p {
        line-height: 28px;
        font-size: 16px;
      }
      &.text {
        position: static;
        padding: 0;
        &.left {
          padding: 0;
          text-align: center;
        }
      }
    }
  }
}

.advantage {
  padding: 40px 0;
  background: #f7f7f7;
  h4 {
    font-size: 16px;
    color: #447375;
    text-align: center;
  }
  .box-content {
    margin-top: 50px;
    .item {
      width: 13%;
      margin: 0 4.4% 10px 0;
      text-align: center;
      &:nth-child(6n + 0) {
        margin-right: 0;
      }
      img {
        display: block;
        width: 100%;
      }
      p {
        height: 118px;
        padding: 20px 10px;
        line-height: 24px;
      }
    }
  }
  @media (max-width: 767px) {
    padding: 20px 0;
    .box-content {
      margin-top: 30px;
      .item {
        width: 48%;
        margin-right: 4%;
        &:nth-child(even) {
          margin-right: 0;
        }
        p {
          height: 70px;
          padding: 10px 5px;
          line-height: 22px;
        }
      }
    }
    h4 {
      font-size: 14px;
    }
  }
}
</style>