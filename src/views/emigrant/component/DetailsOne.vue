<template>
  <div class="details details-one">    
    <div class="clearfix margin-t-80">
      <div class="img left">
        <img v-lazy="{src: require('../../../assets/images/emigrant-img1.jpg'), loading: require('../../../assets/images/country-loading.png'), error: require('../../../assets/images/country-loading.png')}" />
      </div>
      <div class="des right">
        <h3>项目简介</h3>
        <p>自雇移民是新加坡最常见的移民途径之一，旨在申请人通过注册一家公司，申请 Employment Pass 即EP，从而完成新加坡移民全过程。</p>
        <p>EP是新加坡人力资源部门 （Ministry of Manpower）批准的最高级别的工作签证，申请人获得EP后，可以进一步申请新加坡永久居民 (Permanent Residence 即PR )，最终获得新加坡公民。</p>
        <p>• 注册公司</p>
        <p>• 申请EP （最高级别的工作签证）</p>
        <p>• 申请PR （新加坡绿卡）</p>
        <p>• 申请公民（新加坡护照）</p>
      </div>
    </div>

    <div class="clearfix">
      <div class="img right">
        <img v-lazy="{src: require('../../../assets/images/emigrant-img2.jpg'), loading: require('../../../assets/images/country-loading.png'), error: require('../../../assets/images/country-loading.png')}" />
      </div>
      <div class="des left">
        <h3>注册新加坡公司的必要条件:</h3>
        <p>• 公司需要英文名称并以私人有限公司结尾，即PTE LTD</p>
        <p>• 需要一位年满18岁新加坡公民或者永久居民作为代理董事</p>
        <p>• 根据《公司法》条文，公司成立后6个月内必须聘请公司秘书</p>
        <p>• 公司必须提供一个注册地址</p>
        <p>• 每年必须缴交年度税务报表</p>
        <p>• 股东人数不可以超过50名</p>
      </div>
    </div>

    <div class="clearfix">
      <div class="img left">
        <img v-lazy="{src: require('../../../assets/images/emigrant-img3.jpg'), loading: require('../../../assets/images/country-loading.png'), error: require('../../../assets/images/country-loading.png')}" />
      </div>
      <div class="des right">
        <h3>申请EP要求：</h3>
        <p>• 本科或以上学历，月薪$4500</p>
        <p>• 本科以下学历，需要特殊资质证书/行业成就证明，或者个人成就证明以及更高月薪来支持</p>
        <p>• EP申请人需要担任公司高级管理或者高级技术职位</p>
      </div>
    </div>

    <div class="clearfix">
      <div class="img right">
        <img v-lazy="{src: require('../../../assets/images/emigrant-img4.jpg'), loading: require('../../../assets/images/country-loading.png'), error: require('../../../assets/images/country-loading.png')}" />
      </div>
      <div class="des left">
        <h3>申请新加坡永久居民(PR)的条件</h3>
        <p>• 持有EP至少2年以及最近2年的个人税单</p>
        <p>• 月薪达到5000新元或以上</p>
        <p>• 无犯罪纪录</p>
        <p>• 本科或者以上学历</p>
        <p>• 携带配偶或者21岁以下的子女的申请人，其家属需要居住在新加坡</p>
      </div>
    </div>

    <div class="clearfix">
      <div class="img left">
        <img v-lazy="{src: require('../../../assets/images/emigrant-img5.jpg'), loading: require('../../../assets/images/country-loading.png'), error: require('../../../assets/images/country-loading.png')}" />
      </div>
      <div class="des right">
        <h3>申请新加坡公民的条件：</h3>
        <p>• 年满21周岁，并持有新加坡永久居民2年或以上</p>
        <p>• 无犯罪纪录</p>
        <p>• 最近2年的个人税单</p>
        <p>• 最近2年新加坡公积金纪录</p>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
}
</script>
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