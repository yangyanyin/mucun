<template>
  <Layout>
    <div class="banner">
      <img src="../../assets/images/asset-banner.jpg" />
    </div>
    <div class="pc-max-width asset-allocation">
      <div class="content clearfix margin-t-80 animation-show">
        <div class="list left img">
          <img src="../../assets/images/asset-allocation/asset-img1.png" alt />
        </div>
        <div class="list text right">
          <div class="t">
            <strong>海外资产配置成高净值人群关注焦点</strong>
            <p>60%以上富人计划在未来两年增持海外资产；47%高净值个人已安排30%以上的资产投资海外。</p>
          </div>
        </div>
      </div>

      <div class="content clearfix margin-t-80 animation-show">
        <div class="list img right">
          <img src="../../assets/images/asset-allocation/asset-img2.png" alt />
        </div>
        <div class="list text left">
          <div class="t">
            <strong>分散风险抵御系统性金融风险和金融危机</strong>
            <p>高净值投资者超八成以上为财富增值，二成左右为财富保值；46%高净值人群投资海外主要目的是分散风险。</p>
          </div>
        </div>
      </div>

      <div class="content clearfix margin-t-80 animation-show">
        <div class="list left img">
          <img src="../../assets/images/asset-allocation/asset-img3.png" alt />
        </div>
        <div class="list text right">
          <div class="t">
            <strong>瞄准全球摆脱国内投资标的限制</strong>
            <p>国内经济面对下行压力；股市波动震荡赚钱难；房地产投资上车为时已晚；单纯的现金为王，投资不再牢靠。</p>
          </div>
        </div>
      </div>

      <div class="content clearfix margin-t-80 animation-show">
        <div class="list img right">
          <img src="../../assets/images/asset-allocation/asset-img4.png" alt />
        </div>
        <div class="list text left">
          <div class="t">
            <strong>海外资产配置 > 买房置地</strong>
            <p>海外不动产投资年化收益不高，整体策略略显单薄。</p>
            <div class="calculation">
              <div class="article1">
                <span>60%</span>
              </div>
              <i>中国投资者的房地产资产配置比例超过60%</i>

              <div class="article2">
                <span>10%</span>
              </div>
              <i>发达国家投资者房地产资产配置比例则低于10%</i>
            </div>
          </div>
        </div>
      </div>

      <div class="content clearfix margin-t-80 animation-show">
        <div class="list left img">
          <img src="../../assets/images/asset-allocation/asset-img5.png" alt />
        </div>
        <div class="list text right">
          <div class="t">
            <strong>海外资产配置，不只是富人特权</strong>
            <p>
              全球资产配置“平民化”是必然的趋势
              <br />突破额度限制，信息不对称等门槛限制
            </p>
          </div>
        </div>
      </div>

      <div class="content clearfix margin-t-80 animation-show">
        <div class="list img right">
          <img src="../../assets/images/asset-allocation/asset-img6.png" alt />
        </div>
        <div class="list text left sixth">
          <div class="t">
            <strong>
              专业的事情请交给专业的人做
              <span>新加坡全球护照交流中心--全球精英客户的共同选择</span>
            </strong>
            <p>新加坡全球护照交流中心专业团队常年深耕新加坡，整合本土商业资源，深度搜寻潜力投资项目，我们专业为客户提供海外资产配置，新加坡本土优质企业收购并欧，潜力项目投资，地产投资，股权投资等服务。</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../components/layout.vue";
import { animation, windowScroll } from "../../assets/js/config.js";
export default {
  name: "app",
  components: {
    Layout
  },
  mounted() {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    animation(scroll);
    windowScroll();
  }
};
</script>
<style lang="less" scoped>
.banner {
  position: relative;
  text-align: center;
  width: 100%;
  overflow: hidden;
  height: 340px;
  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
  }
  @media (max-width: 767px) {
    padding-top: 60px;
    height: 316px;
    img {
      top: 60px;
      height: 256px;
    }
  }
}
.asset-allocation {
  margin-bottom: 80px;
}
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
      font-size: 26px;
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
      font-size: 19px;
      line-height: 38px;
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
        text-align: right;
        left: 0;
        right: auto;
      }
    }
    .calculation {
      padding: 30px 0 0 30%;
      text-align: center;
      i {
        display: block;
        margin: 10px 0 15px 0;
        color: #828282;
      }
      > div {
        position: relative;
        width: 100%;
        height: 26px;
        background: #e7e7e7;
        border-radius: 13px;
        span {
          position: absolute;
          left: 0;
          top: 0;
          height: 26px;
          border-radius: 13px;
          line-height: 26px;
          font-size: 14px;
          color: #fff;
        }
        &.article1 {
          span {
            width: 60%;
            background: #50bc53;
          }
        }
        &.article2 {
          span {
            width: 10%;
            background: #519ee7;
          }
        }
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
      .calculation {
        padding: 30px 5%;
      }
    }
  }
}
</style>

