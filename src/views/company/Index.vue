<template>
  <div class="stock">
    <div class="banner"></div>
    <div class="introduction pc-max-width">
      <p>新加坡一直被公认为全球商业中心，拥有开放的商业政策，发达的金融体系，高技能人才，绝佳的地理位置，以及新加坡对外商投资的税收政策优惠。吸引全球众多企业家来此拓展海外业务，这里不但是美国和欧洲企业设立亚洲总部的首选地点，同时还是亚洲公司进军国际市场的理想平台</p>
    </div>

    <div class="pc-max-width">
      <div class="clearfix content">
        <div class="list right img">
        <img class="right" src="../../assets/images/company-image1.jpg" alt="" />
        </div>
        <div class="list text left">
          <div class="t">
            <strong>新加坡注册公司优势</strong>
            <p>1.	全球最低税赋国家之一</p>
            <p>2.	获豁免的私人公司年收入不超过500万新币，则无需审计</p>
            <p>3.	无外汇管制</p>
            <p>4.	政治、经济和贸易环境稳定</p>
            <p>5.	与多国签订投资和双重课税保护条约</p>
            <p>6.	国际品牌与形象，清晰严格的制度与法律</p>
          </div>
        </div>
      </div>
      <div class="clearfix content">
        <div class="list left img">
        <img class="right" src="../../assets/images/company-image2.jpg" alt="" />
        </div>
        <div class="list text right">
          <div class="t">
            <strong>新加坡注册公司所需材料</strong>
            <p>1.	公司英文名称</p>
            <p>2.	公司业务描述</p>
            <p>3.	新加坡本地董事</p>
            <p>4.	新加坡法定秘书</p>
            <p>5.	新加坡本地办公室地址</p>
            <p>6.	公司注册资金</p>
            <p>7.	董事、股东证件以及联系信息</p>
          </div>
        </div>
      </div>
    </div>

    <NewContactUs text="想在新加坡注册公司？马上联系我们，了解新加坡注册公司的一手资料！" />
  </div>
</template>
<script>
import NewContactUs from '../../components/NewContactUs'
export default {
  components: {
    NewContactUs
  }
}
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 340px;
  background: url('../../assets/images/company-banner.jpg') no-repeat top center;
  background-size: auto 340px;
  @media (max-width: 767px) {
    padding-top: 60px;
    height: 200px;
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
}

.content {
  position: relative;
  margin-top: 80px;
  background: #f7f7f7;
  .list {
    width: 50%;
    img {
      display: block;
      width: 100%;
    }
    strong {
      display: block;
      font-size: 18px;
      color: #447375;
      font-weight: normal;
      margin-bottom: 30px;
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
        align-self: center;
        width: 100%;
      }
      &.left {
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
        line-height: 24px;
        font-size: 14px;
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
</style>