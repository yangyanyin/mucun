<template>
  <div class="stock">
    <div class="banner"></div>
    <IncrementServiceTab />
    <div class="introduction pc-max-width">
      <p>新加坡是世界上最廉洁的国家、全球少数享有AAA信贷评级的国家、最适合经商的国家、个人所得税率全球最低的国家、最具人才竞争力的国家、是亚洲最宜居的国家、全球最安全的国家、全球最适合孩子成长的国家、教育素质全球排第一的国家，新加坡还有许多其它的荣耀，如国立大学亚洲排名第一、公共交通全球名列前茅、护照免签国家排行榜第一、樟宜机场全球排名第一等。</p>
      <p>新加坡的优势也反映在其房地产上，这是一个低风险的成熟房地产市场。在新加坡购买私宅没有公摊面积，送停车位，为精装房，属“可拎包入住”型。新加坡新私宅地契至少99年，保值期长，无需缴纳遗产税和资本增值税，租金回报率明显高于中国大陆，而银行贷款利率低年限长。新加坡房产的泡沫指数是相当低的，为0.45，在参与调查的20个城市中排第18，处于公允水平。与新加坡房价相比，香港、伦敦和纽约黄金地段的房价分别高出115%、65%和43%，是投资的好选择。新加坡30%的豪宅都被中国人买走，中国购房者已超过印尼和马来西亚，成为新加坡豪宅的第一外籍买家。正因为如此，越来越多的中国人，开始进军新加坡市场购买心仪的房产。</p>       
    </div>

    <div class="pc-max-width">
      <div class="clearfix content">
        <div class="list left img">
          <img class="right" src="../../assets/images/estate-image1.jpg" alt="" />
        </div>
        <div class="list text right">
          <div class="t">
            <strong>优势1</strong>
            <p>高租金回报率，年回报率在4%左右，商业成熟区住宅的回报率可达5%，较北上广1.5%左右的回报率而言，投资优势明显。一套百万新币的房屋年租金可达4-5万新币。</p>
          </div>
        </div>
      </div>
      <div class="clearfix content">
        <div class="list right img">
          <img class="right" src="../../assets/images/estate-image2.jpg" alt="" />
        </div>
        <div class="list text left">
          <div class="t">
            <strong>优势2</strong>
            <p>土地供给有限，且考虑到新加坡人口增长规划，需求增长速度大于供给，政府规划在2030年人口达到650万至690万，较现有的五百多万人口，约年增长8万左右。</p>
          </div>
        </div>
      </div>
      <div class="clearfix content">
        <div class="list left img">
          <img class="right" src="../../assets/images/estate-image3.jpg" alt="" />
        </div>
        <div class="list text right">
          <div class="t">
            <strong>优势3</strong>
            <p>亚洲的金融中心，地理位置上连接印度洋和太平洋，环视亚洲。人才及产业集聚效应明显，经济增长空间巨大。</p>
          </div>
        </div>
      </div>
      <div class="clearfix content">
        <div class="list right img">
          <img class="right" src="../../assets/images/estate-image4.jpg" alt="" />
        </div>
        <div class="list text left">
          <div class="t">
            <strong>优势4</strong>
            <p>稳定的政治经济环境，严格的法律保护和透明的产权交易，确保房产交易的合法性，政府对开发商的管制非常严格，开发住宅项目质量有保障，购买面积即房屋使用面积，买房即有停车位使用权（无须额外购买）。</p>
          </div>
        </div>
      </div>
      <div class="clearfix content">
        <div class="list left img">
          <img class="right" src="../../assets/images/estate-image5.jpg" alt="" />
        </div>
        <div class="list text right">
          <div class="t">
            <strong>优势5</strong>
            <p>无遗产税，低房产税率、低房产贷款利率（当前年贷款利率1.48%左右）和外国人可申请最高60% 至80%的购房款贷款，降低了购房成本和对现金流的压力。</p>
          </div>
        </div>
      </div>
      <div class="clearfix content">
        <div class="list right img">
          <img class="right" src="../../assets/images/estate-image6.jpg" alt="" />
        </div>
        <div class="list text left">
          <div class="t">
            <strong>优势6</strong>
            <p>优美的花园城市景观，完善的城市基础设施建筑，不断迎合人口的增长、经济的发展，置业潜力良好。</p>
          </div>
        </div>
      </div>
      
    </div>
    <NewContactUs text="想在新加坡置业？马上联系我们，了解新加坡置业的一手资料！" />
  </div>
</template>
<script>
import NewContactUs from '../../components/NewContactUs'
import IncrementServiceTab from '../../components/commonComponent/IncrementServiceTab'

export default {
  components: {
    NewContactUs,
    IncrementServiceTab
  }
}
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 340px;
  background: url('../../assets/images/estate-banner.jpg') no-repeat bottom center;
  background-size: auto 340px;
  @media (max-width: 767px) {
    padding-top: 60px;
    height: 260px;
    background-size: auto 200px;
  }
}
.introduction {
  padding-top: 30px;
  p {
    margin-top: 30px;
    font-size: 16px;
    line-height: 32px;
    color: #315455;
  }
  @media (max-width: 767px) {
    padding: 30px;
    p {
      margin: 0 0 20px 0;
      font-size: 14px;
      line-height: 24px;
    }
  }
}

.content {
  position: relative;
  margin-top: 40px;
  background: #f7f7f7;
  .list {
    &.img {
      width: 47%;
    }
    &.text {
      width: 53%;
    }
    img {
      display: block;
      width: 100%;
    }
    strong {
      display: block;
      font-size: 18px;
      color: #447375;
      font-weight: normal;
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
      font-size: 14px;
      line-height: 30px;
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
      padding: 45px;
      .t {
        position: relative;
        align-self: center;
        width: 100%;
        padding-left: 20px;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 3%;
          height: 90%;
          width: 3px;
          background: #315455;
        }
      }
      &.left {
        left: 0;
        right: auto;
      }
    }
  }
  @media (max-width: 767px) {
    background: #fff;
    .list {
      width: 100% !important;
      text-align: center;
      strong {
        font-size: 18px;
        margin: 15px 0 10px 0;
      }
      p {
        line-height: 24px;
        font-size: 12px;
      }
      &.text {
        position: static;
        padding: 0;
        &.left {
          padding: 0;
          text-align: center;
        }
        .t {
          padding-left: 0;
          &:after {
            display: none;
          }
        }
      }
    }
  }
}
</style>