<template>
  <div class="details details-one">
    <div class="clearfix">
      <div class="img left">
        <img v-lazy="{src: require('../../../assets/images/emigrant-img1.jpg'), loading: require('../../../assets/images/country-loading.png'), error: require('../../../assets/images/country-loading.png')}" />
      </div>
      <div class="des right">
        <h3>项目简介</h3>
        <p>自雇移民是新加坡现存3种移民途径之一，旨在通过申请人在新加坡注册一家公司，申请EP(Employment Pass)，从而完成移民新加坡的目的。新加坡的EP为工作签证最高级别，即新加坡人力资源部颁发给公司外籍管理层工作人士的最高级别工作准证，申请人获得EP后，可以进一步申请新加坡永久居民(PR)，最终得到新加坡护照（新加坡公民）。 </p>
        <p>•注册公司</p>
        <p>•申请EP（工作签证）</p>
        <p>•申请PR（新加坡永久居民）</p>
        <p>•申请新加坡公民（新加坡护照）</p>
      </div>
    </div>

    <div class="clearfix">
      <div class="img right">
        <img v-lazy="{src: require('../../../assets/images/emigrant-img2.jpg'), loading: require('../../../assets/images/country-loading.png'), error: require('../../../assets/images/country-loading.png')}" />
      </div>
      <div class="des left">
        <h3>注册新加坡公司需要以下条件：</h3>
        <p><p>• 新加坡公民或新加坡永久居民，凡年满18岁的任何国籍人士或公司都可 以投资成立新加坡公司。</p>
        <p>• 公司名需为英文且于英文公司名后需有Pte Ltd.</p>
        <p>• 需指派一位新加坡公民当董事(可不占有公司股份)</p>
        <p>• 需有一名秘书,且其需为新加坡秘书协会的一员</p>
        <p>• 每年需缴交年度税务申报表</p>
        <p>• 股东可以是自然人也可以是法人，股东人数不可超过50位</p>
      </div>
    </div>

    <div class="clearfix">
      <div class="img left">
        <img v-lazy="{src: require('../../../assets/images/emigrant-img3.jpg'), loading: require('../../../assets/images/country-loading.png'), error: require('../../../assets/images/country-loading.png')}" />
      </div>
      <div class="des right">
        <h3>申请EP要求：</h3>
        <p>• 本科及以上学历，月薪达到3900新元</p>
        <p>• 本科以下学历，需要特殊资质证书/行业成就，或个人成就，以及高月薪 来支持(至少6000新元/月)</p>
        <p>• 申请人需担任新加坡公司高级管理人员或高级技术人员职位。</p>
      </div>
    </div>

    <div class="clearfix">
      <div class="img right">
        <img v-lazy="{src: require('../../../assets/images/emigrant-img4.jpg'), loading: require('../../../assets/images/country-loading.png'), error: require('../../../assets/images/country-loading.png')}" />
      </div>
      <div class="des left">
        <h3>申请新加坡永久居民(PR)的条件</h3>
        <p>• 持有新加坡就业准证至少2年（能提供近2年的个税单）</p>
        <p>• 至少5年以上相关工作经验</p>
        <p>• 月薪5000新币起</p>
        <p>• 本科或以上学历</p>
        <p>• 无犯罪记录</p>
        <p>• 携带家属的申请人，家属需居住在新加坡</p>
      </div>
    </div>

    <div class="clearfix">
      <div class="img left">
        <img v-lazy="{src: require('../../../assets/images/emigrant-img5.jpg'), loading: require('../../../assets/images/country-loading.png'), error: require('../../../assets/images/country-loading.png')}" />
      </div>
      <div class="des right">
        <h3>申请新加坡公民的条件：</h3>
        <p>年满21周岁，并且在申请之前持有新加坡永久居民至少2年</p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.details-one {
  >div {
    position: relative;
  }
  .img {
    width: 50%;
    img {
      display: block;
      width: 100%;
    }
  }
  .des {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
    padding: 0 40px;
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
    h3 {
      font-size: 22px;
      color: #447375;
      padding-bottom: 20px;
    }
    p {
      line-height: 26px;
      font-size: 15px;
      color: #447375;
      @media(max-width: 1200px) {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
  @media (max-width: 767px) {
    .left,.right {
      float: none;
      width: 100%;
    }
    .des {
      position: static;
      padding: 20px 0;
      transform: translate(0);
      h3 {
        text-align: center;
        font-size: 18px;
        padding-bottom: 10px;
      }
    }
  }

}
</style>