<template>
  <div class="details details-one">
    <div class="introduction">
      <h3>新加坡简介 </h3>
      <p>新加坡作为多元文化、多元种族的国家，同时也是全球最国际化、治安最好的发达国家之一，其中华人占其人口的一大半，文化相近，便于融入。由于距离中国仅4个多小时的航程，新加坡成为许多中国移民申请者的首选国家。新加坡所推行的自由经济体系，包容性强，广纳人才，欢迎全球各地的企业家和专业人才到此定居。独特的双语教育也是首屈一指，名声在外，使得越来越多的国际学生涌向新加坡留学。移民的背后，是对事业发展、财富保障、精英教育的全球化布局思维。不同的新加坡移民途径所需要满足的条件各不相同，那么哪一种移民方式最适合你？</p>
    </div>

    <div class="advantage">
      <h3>新加坡移民优势</h3>
      <ul class="clearfix">
        <li>
          <img src="https://cms.aicassets.com/images/default/5ce2316b3458e.jpeg" />
          <p>社会福利优厚健全</p>
        </li>
        <li>
          <img src="https://cms.aicassets.com/images/default/5e7eb120aa7cf.jpeg" />
          <p>华人宜居生活首选</p>
        </li>
        <li>
          <img src="https://cms.aicassets.com/images/default/5ce2341e6e055.jpeg" />
          <p>亚洲税收天堂</p>
        </li>
        <li>
          <img src="https://cms.aicassets.com/images/default/5ce2330e138f8.jpeg" />
          <p>东西方文化交汇的枢纽</p>
        </li>
      </ul>
      <ul>
        <li>
          <img src="https://cms.aicassets.com/images/default/5ce2326bdebb3.jpeg" />
          <p>全球最具竞争力的经济体</p>
        </li>
        <li>
          <img src="https://cms.aicassets.com/images/default/5ce2327b87906.jpeg" />
          <p>最合适儿童成长的国家</p>
        </li>
        <li>
          <img src="https://cms.aicassets.com/images/default/5ce2356d37820.jpeg" />
          <p>护照指数全球第一</p>
        </li>
        <li>
          <img src="https://cms.aicassets.com/images/default/5ce2323609414.jpeg" />
          <p>食品安全全球第一</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="less">
  .introduction {
    height: 393px;
    background: url('../../../assets/images/introduction-bg.png') no-repeat top center;
    margin-bottom: 40px;
    text-align: center;
    padding: 70px;
    h3 {
      position: relative;
      margin-bottom: 70px;
      font-size: 30px;
      color: #fff;
      &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -20px;
        width: 40px;
        height: 3px;
        margin-left: -20px;
        background: #fff;
      }
    }
    p {
      color: #fff;
      line-height: 28px;
      font-size: 16px;
    }
  }
  .advantage {
    padding-top: 10px;
    text-align: center;
    h3 {
      position: relative;
      margin-bottom: 70px;
      font-size: 30px;
      &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -20px;
        width: 40px;
        height: 3px;
        margin-left: -20px;
        background: #447375;
      }
    }
    ul {
      padding: 0 80px 50px;
    }
    li {
      display: inline-block;
      width: 25%;
      p {
        font-size: 16px;
      }
      img {
        display: block;
        width: 160px;
        margin: 0 auto 15px;
      }
    }
  }
  @media (max-width: 767px) {
    .introduction {
      height: auto;
      padding: 20px;
      margin-bottom: 20px;
      h3 {
        font-size: 20px;
        margin-bottom: 30px;
        &:after {
          height: 2px;
          bottom: -15px;
        }
      }
      p {
        font-size: 14px;
        line-height: 22px;;
      }
    }
    .advantage {
      h3 {
        font-size: 20px;
        margin-bottom: 30px;
        &:after {
          height: 2px;
          bottom: -15px;
        }
      }
      ul {
        padding: 0;
        li {
          float: left;
          width: 50%;
          padding: 0 5px 20px;
          p {
            font-size: 14px;
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>