<template>
  <div class="advantage margin-t-80">
    <div class="pc-max-width">
      <div class="public-title animation-show">
        <h3>我们的优势</h3>
        <span>
          <i>
            <img src="../../../assets/images/title.gif" />
          </i>
        </span>
        <p>Our Advantages</p>
      </div>
      <div class="content animation-show">
        <div class="list">
          <img src="../../../assets/images/new-advantage-icon1.png" />
          <p>
            超过十年的行业经验沉淀<br />专注服务高净值人群
          </p>
        </div>
        <div class="list">
          <img src="../../../assets/images/new-advantage-icon2.png" />
          <p>
            高效整合顶级行业资源，<br /> 精准落实，助您稳健快速实现目标
          </p>
        </div>
        <div class="list">
          <img src="../../../assets/images/new-advantage-icon3.png" />
          <p>
            我们最核心的服务价值: <br /> 隐私至上-您的隐私，我们的服务
          </p>
        </div>
        <div class="list">
          <img src="../../../assets/images/new-advantage-icon4.png" />
          <p>
            立足新加坡深耕大中华地区 <br /> 强大的本土行业背景
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
  .content {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-top: 50px;
    .list {
      width: 22%;
      border: 1px solid #EFEFEF;
      border-radius: 5px;
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
        padding: 10px 0 40px;
        color: #3E3E3E;
        font-size: 14px;
        line-height: 26px;
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
           br {
             display: none;
           }
         }
       }
     }
  }
}
</style>