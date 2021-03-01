<template>
  <div class="advantage">
    <h3>我们的优势</h3>
    <div class="list first">
      <img src="../../../assets/images/new-advantage-icon1.png" />
      <p>
        超过十年的行业经验沉淀<br />专注服务高净值人群
      </p>
    </div>
    <div class="list">
      <img src="../../../assets/images/new-advantage-icon2.png" />
      <p>
        高效整合顶级行业资源<br /> 精准落实，助您稳健快速实现目标
      </p>
    </div>
    <div class="list">
      <img src="../../../assets/images/new-advantage-icon3.png" />
      <p>
        我们最核心的服务价值: <br /> 隐私至上-您的隐私，我们的服务
      </p>
    </div>
    <div class="list last">
      <img src="../../../assets/images/new-advantage-icon4.png" />
      <p>
        立足新加坡深耕大中华地区 <br /> 强大的本土行业背景
      </p>
    </div>
  </div>
</template>
<style scoped lang="less">
/** 我们的优势 **/
.advantage {
  display: none;
  border: 1px solid #447375;
  border-radius: 5px;
  margin: 20px 10px 0;
  @media (max-width: 767px) {
    display: block;
  }
  h3 {
    display: block;
    text-align: center;
    font-size: 18px;
    line-height: 54px;
    font-weight: bold;
    color: #fff;
    background: #447375;
  }
  .list {
    display: inline-block;
    width: 50%;
    padding: 20px 0;
    &.first {
      border-right: 1px solid #447375;
      border-bottom: 1px solid #447375;
    }
    &.last {
      margin: -1px 0 0 -1px;
      border-left: 1px solid #447375;
      border-top: 1px solid #447375;
    }
    img {
      display: block;
      width: 110px;
      margin: auto;
    }
    p {
      line-height: 20px;
      text-align: center;
      font-size: 12px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      /* autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: no */
    }
  }
}
</style>