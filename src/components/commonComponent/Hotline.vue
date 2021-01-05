<template>
  <div class="hotline">
    咨询热线: 
    <h3><img src="../../assets/images/hto-tel.png" /></h3>
    <div class="icon">
      <span class="tel">
        <img class="s" src="../../assets/images/telegram.png" />
        <div>
          <p>+65 8866 5586</p>
        </div>
      </span>
      <span class="tel iphone">
        <img class="s" src="../../assets/images/footer-iphone.png" />
        <div>
          <p>+65 8866 5586</p>
        </div>
      </span>
      <span>
        <img class="s" src="../../assets/images/footer-email.png" />
        <div>
          <p>inquiry@waterlandcap.com</p>
        </div>
      </span>
      <span class="wx"><img class="s" src="../../assets/images/footer-wx.png" />
        <div>
          <p><img src="../../assets/images/WeChat.png" />扫一扫添加微信</p>
          <p><img src="../../assets/images/WeChat2.png" />扫一扫关注公众号</p>
            
        </div>
      </span>
    </div>
  </div>
</template>
<style scoped lang="less">
.hotline {
  color: #efd492;
  display:flex;
  flex-flow: row wrap;
  align-items: center;
  padding-top: 50px;
  transition: .8s;
  .icon {
    display:flex;
    flex-flow: row wrap;
    align-items: center;
  }
  h3 {
    display: inline-block;
    margin: 0 5px 0 10px;
    img {
      display: block;
      width: 200px;
      transition: .3s;
    }
  }
  span {
    position: relative;
    display: inline-block;
    width: 24px;
    margin-left: 30px;
    transition: .3s;
    &:last-child {
      width: 28px;
    }
    img {
      display: block;
      width: 100%;
      transition: .3s;
    }
    @media (min-width: 767px) {
      &:hover {
        img.s {
          transform: scale(1.06) translateY(-5px);
        }
      }
    }
    &.tel {
      div {
        width: 160px;
        p {
          padding-left: 40px;
          background: #fff url('../../assets/images/down-tel1.png') no-repeat 10px 10px;
          background-size: 20px;
        }
      }
      &.iphone{
        div {
          p {
            padding-left: 40px;
            background: #fff url('../../assets/images/down-tel2.png') no-repeat 10px 10px;
            background-size: 20px;
          }
        }
      }
    }
    &.wx {
      div {
        right: -3px;
        width: 240px;
      }
      p {
        display: inline-block;
        right: -5px;
        font-size: 12px;
        text-align: center;
        &:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        &:last-child {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        img {
          width: 100px;
        }
        &:after {
          content: '';
          right: 3px;
        }
      }
    }
    div {
      position: absolute;
      right: -20px;
      z-index: 999;
      height: 0;
      overflow: hidden;
      transition: .3s;
      p {
        padding: 10px;
        border-radius: 5px;
        background: #fff;
        color: #111;
        font-weight: bold;
        margin-top: 10px;
        &:after {
          content: '';
          position: absolute;
          right: 21px;
          top: -9px;
          width: 0px;
          height: 0px;
          border-width: 10px;
          border-style: solid;
          border-color: transparent transparent #fff;
        }
      }
    }
    &:hover {
      div {
        height: 50px;
      }
      &.wx{
        div {
          height: 147px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    position: relative;
    .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    h3 {
      font-size: 16px;
      img {
        width: 140px;
      }
    }
    span {
      margin-left: 12px;
      width: 20px;
      &:last-child {
        width: 24px;
      }
    }
  }
}

</style>