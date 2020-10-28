<template>
  <div class="advantage margin-t-80">
    <div class="pc-max-width">
      <div class="public-title animation-show">
        <h3>我们的优势</h3>
        <span>
          <i>
            <img src="../../../assets/images/title-img2.png" />
          </i>
        </span>
        <p>Our Advantages</p>
      </div>
      <div class="content animation-show">
        <div class="list">
          <img src="../../../assets/images/advantage-icon1.png" />
          <p>
            官方牌照直营
            <br />不成功不收费
          </p>
        </div>
        <div class="list">
          <img src="../../../assets/images/advantage-icon2.png" />
          <p>
            境外办理,隐私至上
            <br />精英首选
          </p>
        </div>
        <div class="list">
          <img src="../../../assets/images/advantage-icon3.png" />
          <p>
            护照VIP激活
            <br />行业领先首选
          </p>
        </div>
        <div class="list">
          <img src="../../../assets/images/advantage-icon4.png" />
          <p>
            境外后续服务
            <br />无后顾之忧
          </p>
        </div>
      </div>
    </div>
    <div class="label">
      <ul class="pc-max-width">
        <li>护照项目100%成功率</li>
        <li>费用100%透明</li>
        <li>隐私安全</li>
        <li>资料全程加密</li>
        <li>绝对安全管控</li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="less">
/** 我们的优势 **/
.advantage {
  position: relative;
  height: 730px;
  padding: 70px 0;
  background: url("../../../assets//images/advantage-bg.jpg") no-repeat top center;
  background-size: 100% 730px;
  .public-title {
    h3 {
      color: #fff;
    }
    span {
      &:after,
      &:before {
        background: #fff;
      }
      i {
        background: no-repeat;
      }
    }
    p {
      color: #fff;
    }
  }
  .content {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 50px 80px;
    .list {
      width: 144px;
      &:hover {
        img {
          transform: scale(1.06);
        }
      }
      img {
        display: block;
        width: 100%;
        transition: .3s;
      }
      p {
        text-align: center;
        padding-top: 10px;
        color: #fff;
        font-size: 17px;
        line-height: 30px;
      }
    }
  }
  .label {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 140px;
    line-height: 140px;
    background: rgba(0, 0, 0, 0.3);
    ul {
      text-align: center;
      li {
        display: inline-block;
        padding-left: 26px;
        margin: 0 25px;
        color: #fff;
        font-size: 20px;
        background: url("../../../assets/images/hook.png") no-repeat left center;
        background-size: 18px;
        @media (max-width: 1100px) {
          font-size: 18px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    height: 550px;
    padding: 40px 0;
    background-size: auto 550px;
    .content {
      padding: 0;
      justify-content: center;

      .list {
        width: 150px;
        padding: 0 25px;
        margin: 10px 10px 0;
        p {
          font-size: 14px;
          line-height: 24px;
          padding: 0;
          margin: 0 -15px;
        }
      }
    }
    .label {
      height: 70px;
      padding-top: 10px;
      line-height: 24px;
      text-align: center;
      ul {
        li {
          padding: 0 20px;
          margin: 0;
          font-size: 12px;
          background-size: 14px;
        }
      }
    }
  }
}
</style>