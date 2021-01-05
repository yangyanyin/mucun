<template>
  <div class="details details-tow">
    <div class="title t1">
      <h3>
        <span>项目介绍</span>
      </h3>
    </div>
    <p>股权投资移民即投资入股公司担保申请EP， 申请人必须成为实体企业股东至少三年，以投资的模式获得公司高级管理层工作签证。三个月内登陆新加坡，获得EP批准后，24个月后提交永居申请，最终实现全家移民。</p>
    
    <div class="title t2">
      <h3>
        <span>申请条件</span>
      </h3>
    </div>
    <div class="icon-box">
      <ul>
        <li>
          <img src="../../../assets/images/emigrant-icon1.png" />
          <span>21岁以上</span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon2.png" />
          <span>大学本科以上学历</span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon3.png" />
          <span>无犯罪证明</span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon4.png" />
          <span>相关管理经验5年以上</span>
        </li>
      </ul>
    </div>

    <div class="title t3">
      <h3>
        <span>项目优势</span>
      </h3>
    </div>
    <div class="icon-box">
      <ul>
        <li>
          <img src="../../../assets/images/emigrant-icon5.png" />
          <span>无资金来源要求<br />简单快捷</span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon6.png" />
          <span>办理周期短<br />60天即可登陆新加坡</span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon7.png" />
          <span>无语言要求<br />方便快捷</span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon8.png" />
          <span>海外资产不征税<br />无资本增值税</span>
        </li>
        
      </ul>
      <ul class="m-top30">
        <li>
          <img src="../../../assets/images/emigrant-icon9.png" />
          <span>一人申请<br />全家获取新加坡永久居民</span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon10.png" />
          <span>中英双语教育制度<br />跳板欧美留学最佳途径</span>
        </li>
      </ul>
    </div>
    <div class="note">注：该EP可以作为投资公司的股东，但不参与公司管理运作<br />股权投资移民项目3至5年完成，新加坡永久居民审批周期为6至12个月。</div>

    <div class="process pc-max-width">
      <h5>申请流程</h5>
      <div class="sc">
        <ul>
          <li v-for="(item, key) in process" :key="key">
            <span>NO.{{key + 1}}</span>
            {{item}}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      process: [
        '评估/签约',
        '企业背景调查',
        '签订企业融资协议',
        '申请EP并获批',
        '完成投资',
        'PR(绿卡)申请并获批',
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.title {
  height: 258px;
  &.t1 {
    background: url('../../../assets/images/emigrant-img7.jpg') no-repeat top center;
  }
  &.t2 {
    background: url('../../../assets/images/emigrant-img6.jpg') no-repeat top center;
  }
  &.t3 {
    background: url('../../../assets/images/emigrant-img8.jpg') no-repeat top center;
  }
  @media (max-width: 767px) {
    height: 130px;
    background-size: auto 130px !important;
  }
}
p {
  font-size: 17px;
  text-align: center;
  color: #447375;
  line-height: 30px;
  padding: 60px 250px 100px;
  @media (max-width: 767px) {
    padding: 20px 0 50px;
    font-size: 14px;
    line-height: 26px;
  }
}

.process {
  padding-bottom: 100px;
  h5 {
    width: 220px;
    margin: 20px auto 0;
    line-height: 38px;
    text-align: center;
    color: #fff;
    background: #447375;
    opacity: 1;
    border-radius: 90px;
  }
  ul {
    display: flex;
    justify-content: space-around;
    padding: 35px 50px 0;
    li {
      position: relative;
      color: #447375;
      &:last-child {
        &:after {
          display: none;
        }
      }
      &:after {
        content: '';
        position: absolute;
        width: 40px;
        top: 23px;
        right: -80px;
        height: 18px;
        background: url('../../../assets/images/bank/bank-arrow-right.png') no-repeat;
        background-size: 100%;
      }
      span {
        display: block;
        width: 60px;
        height: 60px;
        margin: 0 auto 20px;
        text-align: center;
        line-height: 58px;
        border: 2px solid #D9E5E6;
        font-size: 18px;
        background: #EDF4F3;
        border-radius: 100%;
      }
    }
  }
  @media (max-width: 1200px) {
    ul li {
      &:after {
        right: -50px;
      }
    }
  }
  @media (max-width: 767px) {
    .sc {
      overflow: auto;
      padding-bottom: 20px;
      ul {
        width: 700px;
        padding: 20px 0 0;
        li {
          &:after {
            top: 15px;
            right: -35px;
          }
          span {
            width: 50px;
            height: 50px;
            line-height: 48px;
            margin-bottom: 10px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>