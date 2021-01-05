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
        <!-- <div class="list">
          <img src="../../../assets/images/advantage-icon1.png" />
          <p>
            官方牌照直营
            <br />不成功不收费
          </p>
        </div> -->
        <div class="list">
          <img src="../../../assets/images/advantage-icon2.png" />
          <p>
            超过十年的行业经验沉淀，<br /> 专注服务高净值人群
          </p>
        </div>
        <div class="list">
          <img src="../../../assets/images/advantage-icon3.png" />
          <p>
            高效整合顶级行业资源，<br /> 精准落实，助您稳健快速实现目标
          </p>
        </div>
        <div class="list">
          <img src="../../../assets/images/advantage-icon4.png" />
          <p>
            我们最核心的服务价值: <br /> 隐私至上-您的隐私，我们的服务
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
/** 我们的优势 **/
.advantage {
  position: relative;
  padding: 70px 0;
  background: url("../../../assets//images/advantage-bg.png") no-repeat top center;
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
    padding: 50px 80px 0;
    .list {
      width: 242px;
      &:hover {
        img {
          transform: scale(1.06);
        }
      }
      img {
        display: block;
        width: 200px;
        margin: auto;
        transition: .3s;
      }
      p {
        text-align: center;
        padding-top: 10px;
        color: #fff;
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
  @media (max-width: 767px) {
    padding: 40px 0;
     .content {
       padding: 30px 0;
       .list {
         width: 30%;
         img {
           width: 100px;
         }
         p {
           font-size: 12px;
           line-height: 20px;
         }
       }
     }
  }
}
</style>