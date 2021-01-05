<template>
  <div class="preschool">
    <div class="pc-max-width">
      <div class="content clearfix margin-t-80 animation-show">
        <div class="list left img">
          <img
            src="../../../assets/images/overseas-study/preschool-education-icon2.jpg"
          />
        </div>
        <div class="list text right">
          <div class="t">
            <strong>新加坡学前教育</strong>
            <p>新加坡学前教育被公认为世界上最好的学前教育体系之一，沿袭了英国的幼儿教育体系，新加坡政府对学前教育的发展采用监管、扶持的机制，鼓励民间私立自行运营发展幼儿教育。新加坡的教育十分注重从小进行基本的价值观和道德观的教育、培养良好个性品质的人格：辨别是非对错；愿意与他人沟通与分享；具有好奇心及勇于探索；建立健康的生活以及培养良好的习惯；掌握独立生活的自理能力。</p>
            <p>通常为3至6周岁的适龄儿童提供三年的学前教育，“寓教于乐”的教学理念。每个年级的日常课程包含了：开发语言和阅读能力、基本算术、科学常识、创新能力、实践技能以及音乐欣赏和室外游戏等等，孩子每天有频繁的机会选择和探索，注重孩子的智力开发，鼓励幼儿在游戏中学习；注重培养幼儿的独创性，培养社会责任感。课程通常以英语和第二语言进行教学，使孩子各方面技能都得到均衡发展。</p>
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

    <div class="margin-t-80 select-we pc-max-width"> 
      <h3 class="study-title">为什么选择我们</h3>
      <ul class="clearfix">
        <li>
          <img src="../../../assets/images/select-we1.jpg" />
          <i>超过十年的行业经验沉淀，专注服务高净值人群</i>
        </li>
        <li>
          <img src="../../../assets/images/select-we2.jpg" />
          <i>高效整合顶级行业资源，精准落实，助您稳健快速实现目标</i>
        </li>
        <li>
          <img src="../../../assets/images/select-we3.jpg" />
          <i>我们最核心的服务价值：隐私至上-您的隐私，我们的服务</i>
        </li>
      </ul>
      <p>Waterland Capital-侨水资本专注于为高净值人群子女提供一站式专属定制的VIP留学方案，依托我司高端资源与各大院校保持良好合作关系，我们经验丰富的专业规划团队将量体裁衣规划与推荐最佳院校，从出入境手续的办理开始，到登陆安家、子女入学以及后期家长移民提供一站式细致周到的服务安排，因为我们身在新加坡所以更懂新加坡，让您即便在国外也有宾至如归的感觉。</p>
      <span>Waterland Capital-侨水资本愿在助您孩子成为精英的成长道路上，做您值得信赖的海外朋友。</span>
    </div>

    <Process></Process>

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
  .img {
    width: 50%;
    padding-right: 40px;
    img {
      display: block;
      width: 100%;
    }
  }
  .text {
    width: 50%;
    strong {
      display: block;
      font-size: 20px;
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
      margin-bottom: 15px;
      font-size: 14px;
      line-height: 26px;
    }
  }
  @media (max-width: 767px) {
    padding: 0 5px;
    .list {
      width: 100%;
      text-align: center;
      padding: 0;
      strong {
        font-size: 20px;
        margin: 20px 0 10px 0;
      }
      p {
        line-height: 28px;
        font-size: 16px;
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

.select-we {
  line-height: 28px;
  text-align: center;
  p {
    font-size: 16px;
    padding: 0 200px;
  }
  span {
    display: block;
    margin-top: 30px;
    color: #447375;
    font-size: 16px;
  }
  ul {
    padding: 50px 0;
    li {
      float: left;
      width: 31%;
      margin-right: 3.5%;
      background: #F7F7F7;
      img {
        display: block;
        width: 100%;
      }
      i {
        display: block;
        padding: 40px;
        font-size: 16px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 767px) {
    line-height: 24px;
    p {
      padding: 0;
    }
    span {
      margin-top: 15px;
    }
    ul {
      padding: 30px 0 15px 0;
      li {
        width: 100%;
        margin: 0 0 20px 0;
        i {
          padding: 30px;
        }
      }
    }
  }
}
</style>