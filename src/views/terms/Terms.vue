<template>
  <div class="terms">
    <div class="content">
      <span class="close" @click="closeTerms"><img src="../../assets/images/close-black.png"></span>
      <h3>隐私条款</h3>
      <div>
        <p>一、侨水资本网站尽一切合理的努力，保护您的隐私信息不被泄露给无关的第三方，保守您的秘密。如果您有任何疑问，请联系客服。</p>
        <p>二、您可随时访问在注册时被要求填写的信息，随时修改这些信息，包括信息的公开或保密 状态。</p>
        <p>三、隐私信息包括: </p>
        <ul>
          <li><i>1、</i>您的住址;</li>
          <li><i>2、</i>您的联系方式;</li>
          <li><i>3、</i>您的账号、密码;</li>
          <li><i>4、</i>您不希望公开的其他信息。</li>
        </ul>
        <p>四、下列信息不属于隐私信息:</p>
        <ul>
          <li><i>1、</i>您发布的项目信息;</li>
          <li><i>2、</i>您希望公开的其他信息;</li>
          <li><i>3、</i>您在侨水资本网站上进行登录、操作等活动过程中网站记录的相关信息;</li>
          <li><i>4、</i>为了其他用户的利益必须公开的其他信息。</li>
        </ul>
        <p>五、下列情况下，侨水资本网站有权公布或向第三人披露您的有关信息:  </p>
        <ul>
          <li><i>1、</i>您以明确的方式授权;</li>
          <li><i>2、</i>法律法规要求;</li>
          <li><i>3、</i>仲裁机构的裁决的要求;</li>
          <li><i>4、</i>司法机关的判决、裁定、协助执行通知书或者其他法律文件要求;</li>
          <li><i>5、</i>行政机关要求;</li>
          <li><i>6、</i>您违反了使用条款的规定或者有其他损害移投界权益的行为;</li>
          <li><i>7、</i>为向您提供您需要的信息，必须公布或向第三人披露您的有关信息;</li>
          <li><i>8、</i>为了您的利益而必须公布或向第三人披露您的有关信息的其他情形。</li>
        </ul>
        <p>六、下列情况视为您“以明确的方式授权”侨水资本网站向第三人披露您的有关信息: </p>
        <ul>
          <li><i>1、</i>在侨水资本网站交换名片;</li>
          <li><i>2、</i>在侨水资本网站对其他项目信息进行了回应;</li>
          <li><i>3、</i>在侨水资本网站发布信息; </li>
          <li><i>4、</i>在侨水资本网站填写信息时，勾选了“公开”或者其他类似的选项;</li>
          <li><i>5、</i>您以信函、电子邮件或传真等有形的方式授权;</li>
          <li><i>6、</i>在必要情况下您以口头授权，后以信函、电子邮件或传真等有形的方式确认此项授权；或者侨水资本网站得到您的口头授权后，以信函、电子邮件或传真等有形的方式向您确认是否授权，授权披露信息的范围、内容等，您在半小时以内未予答复，默认了此项授权;</li>
          <li><i>7、</i>其他明确的方式。</li>
        </ul>
        <p>七、下列情形导致您的隐私信息被泄露，侨水资本网站不承担任何责任: </p>
        <ul>
          <li><i>1、</i>不可抗力;</li>
          <li><i>2、</i>意外事件; </li>
          <li><i>3、</i>侨水资本网站采取了合理的防护措施而遭到黑客攻击、电脑病毒侵入;</li>
          <li><i>4、</i>您未能妥善保管您的隐私信息;</li>
          <li><i>5、</i>您主动向第三人透露您的隐私信息;</li>
          <li><i>6、</i>其他不可归责于侨水资本网站的原因。</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeTerms () {
      this.$emit('closeTerms')
    }
  }
}
</script>
<style lang="less" scoped>
.terms {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 800px;
    height: 80%;
    margin-left: -400px;
    padding: 10px 0 40px 40px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 3px #000;
    transform: translateY(-50%);
    .close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 20px;
      height: 20px;
      cursor: pointer;
      img {
        display: block;
        width: 100%;
      }
    }
    >div {
      display: block;
      height: 85%;
      padding-right: 40px;
      overflow: auto;
    }
    h3 {
      padding: 30px 40px 30px 0;
      text-align: center;
      font-size: 20px;
    }
    p {
      line-height: 22px;
      font-weight: bold;
      margin-top: 20px;
      padding: 5px 0;
    }
    ul {
      li {
        position: relative;
        padding: 5px 0 5px 20px;
        i {
          position: absolute;
          left: 0;
          top: 4px;
        }
        
      }
    }
  }
  @media (max-width: 767px) {
    .content {
      left: 20px;
      right: 20px;
      top: 20px;
      bottom: 20px;
      width: auto;
      height: auto;
      padding: 20px 0 20px 20px;
      margin: 0;
      transform: translateY(0);
      > div {
        padding-right: 20px;
      }
      h3 {
        padding: 15px 20px 15px 0;
        font-size: 18px;
      }
      p {
        line-height: 20px;
        margin-top: 15px;
        font-size: 12px;
      }
      ul li {
        font-size: 12px;
      }
    }
    
  }
}
</style>