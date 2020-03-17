<template>
  <div class="details details-three">
    <div class="title t1">
      <h3>
        项目介绍
        <i>Project introduction</i>
      </h3>
    </div>
    <div class="des">
      <p>全球商业投资者计划(GIP)是由新加坡经济发展局辖下的联系新加坡部门所策划管理。 联系新加坡部门主要与企业主和企业家建立联系,协助他们在新加坡进行投资与拓展业务。</p>
      <p>新加坡GIP移民即“全球投资者计划”，有意向在新加坡创业或者进行投资的投资者， 可以通过该计划申请新加坡永久居留权（PR）。</p>
      <h3>根据2020年最新GIP政策要求(2020年3月1日实施)：</h3>
      <h4>投资至少250万新元建立一个新的商业实体，或者扩充现有的商业运营； 或者投资至少250万新元在一只全球商业投资计划基金中。 最低营业额要求由原有的5千万新元改为最新的2亿新元。</h4>
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
          <img src="../../../assets/images/emigrant-icon11.png" />
          <span>1年获批<br />新加坡永居</span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon12.png" />
          <span>全家移民<br />一步到位</span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon13.png" />
          <span>无语言、年龄<br />学历要求</span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon14.png" />
          <span>新加坡护照全球<br />免签170个国家以上</span>
        </li>
        <li>
          <img src="../../../assets/images/emigrant-icon15.png" />
          <span>低税率国家<br />政府支持创业</span>
        </li>
      </ul>
    </div>

    <div class="con process">
      <div class="d">
        <h3>申请流程</h3>
        <p>1 申请人签约，填写申请评估表格</p>
        <p>2 全部全部材料，底价申请</p>
        <p>3 申请人需要来新加坡参加经济发展局面试</p>
        <p>4 面试通过，将收到新加坡移民局颁布全球商业投资计划原则批准函</p>
        <p>5 资金在6个月内落实</p>
        <p>6 获得新加坡移民局颁发最终全球商业投资计划最终批准函</p>
        <p>7 在一年内办理相关手续，正式成为新加坡永久居民(PR)</p>
        <p>8 申请新加坡公民</p>
      </div>
    </div>

    <div class="con obtain">
      <div class="d">
        <h3>获取批准后的投资规定</h3>
        <p>在获取永久居留权原则性批准函(IPA)的六个月有效期内,您必须落实承诺的投资。申请人必须通过在新加坡以申请人的姓名开设的独立个人银行帐户进行至少两百五十万元新币(取决于申请人的投资方案)的投资。</p>
        <p>完成该投资后,您必须向新加坡经济发展局提交投资证明文件。
          <span>有关文件包括:</span>
          <span>1.投资证书认证副本 </span>
          <span>2.银行对帐单,以证明申请人的投资是通过在新加坡个人名义注册的独立 银行帐户进行的 </span>
          <span>3.申请人已签署同意投资条款和条件的保证书 </span>
          <span>4.银行资信证明书证明申请人的新加坡银行账户没有嫌疑活动。</span>
        </p>
        <i>注：银行资信证明书必须列出申请人的: 姓名、护照、账户类型、账户信息</i>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.title {
  height: 258px;
  &.t1 {
    background: url('../../../assets/images/emigrant-img9.jpg') no-repeat top center;
  }
  &.t2 {
    background: url('../../../assets/images/emigrant-img10.jpg') no-repeat top center;
  }
  @media (max-width: 767px) {
    height: 130px;
    background-size: auto 130px !important;
  }
}
.des {
  padding: 50px 0 110px;
  width: 600px;
  margin: auto;
  text-align: center;
  p {
    color: #B9B9B9;
    margin-bottom: 25px;
    line-height: 24px;
  }
  h3 {
    color: #447375;
    font-size: 24px;
    padding-bottom: 5px;
  }
  h4 {
    color: #447375;
    font-size: 16px;
    line-height: 28px;
  }
  @media (max-width: 767px) {
    padding: 25px 0 50px;
    width: auto;
    p {
      line-height: 18px;
      font-size: 12px;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 20px;
    }
    h4 {
      font-size: 14px;
      line-height: 22px;
    }
  }
}

.con {
  @media(min-width: 767px) {
    height: 500px;
    background: url('../../../assets/images/emigrant-img11.jpg') no-repeat left center;
    padding-left: 50%;
  }
  .d {
    height: 500px;
    padding: 0 50px;
    background: rgba(255, 255, 255, 0.9);
    h3 {
      color: #447375;
      font-size: 22px;
      padding: 40px 0 10px 0;
    }
    p {
      padding: 10px 0;
      color: #447375;
      font-size: 16px;
      line-height: 26px;
      span {
        display: block;
        font-size: 16px;
      }
    }
  }
  i {
    color: #447375;
  }
  &.obtain {
    padding: 0 50% 0 0;
  }
  @media (max-width:767px) {
    border-top: 1px solid #E4E4E4;
    padding: 0;
    .d {
      height: auto;
      padding: 0;
      h3 {
        font-size: 18px;
        padding: 20px 0 5px 0;
      }
      p {
        padding: 5px 0;
        font-size: 14px;
        line-height: 22px;
        span {
          font-size: 14px;
        }
      }
    }
    &.obtain {
      padding: 0;
    }
  }
}
</style>