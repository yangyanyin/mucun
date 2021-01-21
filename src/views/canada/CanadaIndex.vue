<template>
  <div class="canada-index">
    <div class="introduction pc-max-width margin-t-80">
      <h3 class="canada-title">加拿大简介</h3>
      <p>位于美国以北，在北美洲最顶端，其领土面积达998万平方公里，居世界第二位。亦是发达国家之中的领土面积最大者。作为一个移民国家，据数据统计亚洲是加拿大迄今为止最大的移民来源地区，加拿大政府一直以来对移民的态度都非常友好积极，希望通过设立创投移民项目从而帮助经济和社会的发展。仅仅多伦多市区里就有半数的居民是来自全球各国共100多个民族的移民，多元的族裔特色，使得这里汇集了世界上140多种语言，成为全世界最多元化的城市之一。</p>
      <p>加拿大作为一个本身人口基数较小的国家，考虑到未来人口太少终归会引发一系列社会问题，比如劳动力不足，国防力量缺失等大量接收欢迎新移民成为了更好的解决方法，移民也由此也成为加拿大人口增长的强大力量。</p>
      <p>研究人员预计，加拿大将在未来80年内成为全球更重要的移民中心，并预测加拿大的净移民率（移进人数减去移出人数）将达到世界最高水平，领先于土耳其和瑞典。</p> 
    </div>

    <div class="project margin-t-80">
      <h3 class="canada-title">移民项目</h3>
      <div class="list pc-max-width clearfix">
        <div class="item left">
          <img src="../../assets/images/canada/canada-index-img2.jpg" />
          <p>加拿大魁北克省投资移民项目 (Quebec Immigrant Investor Program, QIIP)</p>
          <router-link to="/canada-details/one">了解详情</router-link>
        </div>
        <div class="item left">
          <img src="../../assets/images/canada/canada-index-img4.jpg" />
          <p>加拿大联邦天使投资人计划 (Canada Federal Angel Investor Program)</p>
          <router-link to="/canada-details/two">了解详情</router-link>
        </div>
        <div class="item left">
          <img src="../../assets/images/canada/canada-index-img3.jpg" />
          <p>安省雇主担保项⽬ (Ontario Employer Guarantee Project)</p>
          <router-link to="/canada-details/three">了解详情</router-link>
        </div>
        <div class="item left">
          <img src="../../assets/images/canada/canada-index-img1.jpg" />
          <p>NB省企业家移民介绍 (New Brunswick Provincial Nominee Program)</p>
          <router-link to="/canada-details/four">了解详情</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.introduction {
  p {
    margin-top: 30px;
    font-size: 16px;
    line-height: 26px;
  }
  @media(max-width: 767px) {
    p {
      margin-top: 20px;
      font-size: 14px;
      line-height: 22px;
    }
  }
}
.project {
  padding: 50px 0;
  background: #f7f7f7;
  .list {
    padding-top: 50px;
    .item {
      position: relative;
      width: calc(25% - 12px);
      margin-right: 15px;
      transition: .3s;
      background: #fff;
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 10px #d8d8d8;
        a {
          background: #447375;
          color: #fff;
        }
      }
      &:last-child {
        margin-right: 0;
      }
      img {
        display: block;
        width: 100%;
      }
      p {
        padding: 30px 50px;
        text-align: center;
        height: 140px;
        line-height: 26px;
      }
      a {
        display: block;
        width: 100px;
        height: 40px;
        margin: 0 auto 20px;
        text-align: center;
        line-height: 38px;
        color: #447375;
        background: #FFFFFF;
        transition: .3s;
        border: 1px solid #447375;
        border-radius: 90px;
      }
    }
  }
  @media(max-width: 767px) {
    padding: 25px 0;
    .list {
      padding-top: 30px;
      .item {
        width: 49%;
        margin: 0 2% 10px 0;
        &:nth-child(even) {
          margin-right: 0;
        }
        p {
          height: 95px;
          padding: 15px 5px;
          line-height: 20px;
          font-size: 13px;
        }
        a {
          height: 30px;
          line-height: 28px;
        }
      }
    }
  }
}
</style>