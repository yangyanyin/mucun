<template>
  <div class="details details-four">
    <div class="title t1">
      <h3>
        家族办公室
        <i>Project introduction</i>
      </h3>
    </div>
    <div class="des">
      <h3>什么是家族办公室</h3>
      <p>家族办公室是一个机构性平台，能够为富裕的家族提供综合的财富和家族服务管理。通过专人管理的保值方案能够满足家族的要求，这便是家族办公室的主要作用。此外，该平台还能够确保财富将会作为继承规划的一部分，传承至家族的下一代。 家族办公室是专业的私人组织，帮助家族管理财富。每个家族需要家族办公室的目的都是独一无二的，可能包括金融投资、地产规划、税收筹划和慈善事业等。</p>
    </div>

    <div class="title t2">
      <h3>
        项目优势
        <i>Project advantage</i>
      </h3>
    </div>
    <div class="icon-box">
      <ul>
        <li>
          <img src="../../../assets/images/emigrant-icon16.png" />
          <span>为家族建立<br />传承文化</span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon17.png" />
          <span>风险整合<br />集中管理</span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon18.png" />
          <span>服务集中化<br /> <i>T</i></span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon19.png" />
          <span>后代的规划<br /> <i>T</i></span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon20.png" />
          <span>潜在回报率高<br /> <i>T</i></span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon21.png" />
          <span>治理与管理<br />框架的构建</span>
        </li>
      </ul>
    </div>
    <div class="note">
      注：新加坡是家族办公室的理想创建地，这里低税负，新加坡基金享有税负减免等优惠政策
    </div>
    <div class="plan">
      <div class="title t3">
        <h3>
          家族办公室的设立以及新加坡移民计划
          <i>Establishment of Family Office & Immigration from Singapore</i>
        </h3>
      </div>
      <div class="list clearfix">
        <div class="left">
          <h3>计划一</h3>
          <p>投资金额 (基金+股票+债券) 5000万新元以上，可获得三个Ep名额，通过EP来申请新加坡永久居民(PR), 最终得到新加坡公民（护照）。</p>
        </div>
        <div class="right">
          <h3>计划二</h3>
          <p>资金额2亿新元以上，申请人以及配偶，未满21周岁的子女可获得新加坡永久居民(PR)，和3个EP名额。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.title {
  height: 258px;
  &.t1 {
    background: url('../../../assets/images/emigrant-img12.jpg') no-repeat top center;
  }
  &.t2 {
    background: url('../../../assets/images/emigrant-img14.jpg') no-repeat top center;
  }
  &.t3 {
    background: url('../../../assets/images/emigrant-img13.jpg') no-repeat top center;
    @media (max-width: 767px) {
      background: none;
    }
  }
  @media (max-width: 767px) {
    height: 130px;
    background-size: auto 130px !important;
  }
}
.des {
  margin: auto;
  width: 720px;
  text-align: center;
  padding: 60px 0 110px;
  h3 {
    color: #447375;
    padding-bottom: 30px;
    font-size: 18px;
  }
  p {
    color: #447375;
    line-height: 26px;
    font-size: 16px;
  }
  @media (max-width: 767px) {
    width: auto;
    padding: 30px 0 60px;
    h3 {
      padding-bottom: 20px;
    }
    p {
      line-break: 22px;
      font-size: 14px;
    }
  }
}
.plan {
  position: relative;
  .title {
    height: 480px;
    h3 {
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .list {
    position: absolute;
    top: 190px;
    left: 50%;
    width: 820px;
    transform: translateX(-50%);
    text-align: center;
    > div {
      width: 400px;
      height: 200px;
      background: #fff;
      border-radius: 10px;
      padding: 40px;
      h3 {
        display: inline-block;
        position: relative;
        font-size: 22px;
        color: #447375;
        &::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 18px;
          width: 30px;
          height: 3px;
          background: #d4dfdf;
          border-radius: 1px;
        }
      }
      p {
        color: #447375;
        margin-top: 20px;
        line-height: 24px;
      }
    }
  }
  @media (max-width: 767px) {
    background: url('../../../assets/images/emigrant-img13.jpg') no-repeat top center;
    background-size: auto 600px;
    margin: 0 -10px;
    padding: 15px;
    .list {
      position: static;
      width: 100%;
      transform: translate(0);
      >div {
        width: 100%;
        padding: 20px;
        margin-bottom: 10px;
        h3 {
          font-size: 20px;
        }
      }
    }
    .title {
      height: auto;
      padding: 35px 0 25px;
      h3 {
        position: static;
        transform: translate(0);
      }
    }
  }
}
</style>