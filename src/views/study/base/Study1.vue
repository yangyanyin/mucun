<template>
  <div>
    <div class="about pc-max-width margin-t-80 clearfix">
      <img
        class="img left"
        src="../../../assets/images/overseas-study/study-int1.jpg"
      />
      <div class="text right">
        <h3 class="study-title">新加坡留学简介</h3>
        <p>
          新加坡——举世闻名的“花园城市”，既现代又充满活力，其教育体制享誉亚洲乃至全球。这里不但有优质的公立教育资源，还有众多知名的国际学校，无缝衔接世界各国教育体制。新加坡政府自2017年起放宽移民政策，开放了留学生直接申请永居政策，欢迎在新加坡受教育的年轻人，不需要邀请函即可直接申请永久居民（PR），真正实现留学+移民两不误，一人留学，全家移民！新加坡凭借多元的教育选择和利好的移民政策，吸引着千千万万的国际学生到此就读，是国际学生寻求顶尖教育的完美目的地。
        </p>
      </div>
    </div>
    <div class="advantage margin-t-80">
      <h3 class="study-title">新加坡留学优势</h3>
      <div class="pc-max-width box-content clearfix">
        <div v-for="(item, key) in listData" :key="key" class="item left">
          <img :src="item.icon" :alt="item.text" />
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div class="study-pk pc-max-width">
      <div class="sc clearfix">
        <div class="left">
          <img src="../../../assets/images/overseas-study/study-country1.jpg" />
          <h3>欧美留学</h3>
          <p>
            欧美的各大院校有良好的声誉，所颁发文凭含金量高受国际公认，而且毕业后的薪酬也高。但是
            ，英国院校申请难度大，对雅思分数要求要比新加坡高，而且英国学费和生活成本也是主要留学国家中最贵的，其次是大批留学生申请人拒签率占申请总数的一半以上，另外英国还取消了PSW签证(毕业后的工作签)，这让许多留学生望而却步，就业无保障。
          </p>
        </div>
        <div class="right">
          <img src="../../../assets/images/overseas-study/study-country2.jpg" />
          <h3>新加坡留学</h3>
          <p>
            新加坡临近中国，治安稳定、交通便利。英语为官方，华人占70%多的人口，浓厚的华人文化氛围，为中国学生提供了一个独特且非常容易融入的语言环境，留学签证批复率高。相比欧美国家，新加坡的留学费用更实惠且文化同源，而且毕业后新加坡政府鼓励就业及移民的措施，使留学新加坡越来越受到人们青睐。
          </p>
          
        </div>
      </div>
    </div>
    <EnrollmentPlan></EnrollmentPlan>
  </div>
</template>
<script>
import EnrollmentPlan from "../../../components/EnrollmentPlan";
export default {
  components: {
    EnrollmentPlan,
  },
  data() {
    return {
      listData: [
        {
          icon: require("../../../assets/images/overseas-study/study-img1.jpg"),
          text: "中西文化精髓，教育理念先进，特色的双语教学在全球独一无二",
        },
        {
          icon: require("../../../assets/images/overseas-study/study-img2.jpg"),
          text: "公立、私立和国际学校供选择，教学体系多元化",
        },
        {
          icon: require("../../../assets/images/overseas-study/study-img3.jpg"),
          text: "教育质量好，成绩含金量高，IB成绩全球第一",
        },
        {
          icon: require("../../../assets/images/overseas-study/study-img4.jpg"),
          text: "低龄留学首选国家，独特的母系陪读政策",
        },
        {
          icon: require("../../../assets/images/overseas-study/study-img5.jpg"),
          text: "精英分流教学，充分挖掘每一个学生的潜能",
        },
        {
          icon: require("../../../assets/images/overseas-study/study-img6.jpg"),
          text: "拥有亚洲顶级学府：新加坡南洋理工大学和新加坡国立大学",
        },
        {
          icon: require("../../../assets/images/overseas-study/study-img7.jpg"),
          text: "英联邦教育体系与世界接轨，所获文凭及学分获得全球广泛认可",
        },
        {
          icon: require("../../../assets/images/overseas-study/study-img8.jpg"),
          text: "转学到欧美国家继续深造的绝佳跳板",
        },
        {
          icon: require("../../../assets/images/overseas-study/study-img9.jpg"),
          text: "良好的社会环境和治安，让学生和家长放心",
        },
        {
          icon: require("../../../assets/images/overseas-study/study-img10.jpg"),
          text: "宽松移民政策，留学移民两不误，实现全家移民",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.about {
  .img {
    width: 54%;
  }
  .text {
    h3 {
      text-align: left;
      &:after {
        left: 0;
        margin: 0;
      }
    }
    width: 42%;
    p {
      padding-top: 30px;
      font-size: 16px;
      line-height: 32px;
    }
  }
  @media (max-width: 1200px) {
    .text {
      p {
        padding-top: 20px;
        line-height: 26px;
        font-size: 15px;
      }
    }
  }
  @media (max-width: 767px) {
    .img {
      width: 100%;
    }
    .text {
      width: 100%;
      padding-top: 20px;
      p {
        font-size: 14px;
        line-height: 24px;
        padding-top: 13px;
      }
    }
  }
}
.advantage {
  padding: 40px 0;
  background: #f7f7f7;
  h3 {
    text-align: center;
  }
  .box-content {
    margin-top: 50px;
    .item {
      width: 16%;
      margin: 0 5% 10px 0;
      text-align: center;
      @media (min-width: 767px) {
        &:nth-child(5n + 0) {
          margin-right: 0;
        }
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
    padding: 25px 0;
    .box-content {
      margin-top: 30px;
      .item {
        width: 48%;
        margin: 0 4% 5px 0;
        &:nth-child(even) {
          margin-right: 0;
        }
        p {
          height: 80px;
          padding: 10px 5px;
          line-height: 20px;
        }
      }
    }
  }
}

.study-pk {
  .sc {
    padding: 60px 10px;
    background: url("../../../assets/images/overseas-study/study-vs.jpg")
      no-repeat center center;
    .left {
      width: 40%;
    }
    .right {
      width: 40%;
    }
    text-align: center;
    h3 {
      font-size: 28px;
      padding: 30px 0;
    }
    p {
      font-size: 16px;
      line-height: 30px;
      text-align: left;
    }
  }

  @media (max-width: 767px) {
    overflow: auto;
    .sc {
      padding: 30px 10px;
      // width: 600px;
      background-size: 60px;
      .left {
        width: 100%;
        padding-bottom: 120px;
      }
      .right {
        width: 100%;
      }
      img {
        display: inline-block;
        width: 60px;
      }
      h3 {
        font-size: 18px;
        padding: 15px 0;
      }
      p {
        font-size: 13px;
        line-height: 24px;
      }
    }
  }
}
</style>