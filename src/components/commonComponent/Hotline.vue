<template>
  <div class="hotline">
    咨询热线: 
    <h3><a href="tel:6588665586"><img src="../../assets/images/hto-tel.png" /></a> </h3>
    <div class="icon">
      <span class="tel">
        <img class="s" src="../../assets/images/telegram.png" />
        <div>
          <p><a href="tel:6588665586">+65 8866 5586</a></p>
        </div>
      </span>
      <span class="tel iphone">
        <img class="s" src="../../assets/images/footer-iphone.png" />
        <div>
          <p>
            +65 8866 5586
            <a target="_blank" href="https://api.whatsapp.com/send/?phone=6588665586&text&app_absent=0">点我，WhatsApp及时对话</a>
          </p>
        </div>
      </span>
      <span>
        <img class="s" src="../../assets/images/footer-email.png" />
        <div>
          <p> <a class="a-email" href="mailto:inquiry@waterlandcap.com">inquiry@waterlandcap.com</a> </p>
        </div>
      </span>
      <span class="wx"><img class="s" src="../../assets/images/footer-wx.png" />
        <div>
          <p>
            <img @click="showWeChat(1)" v-if="WeChatAll.indexOf(1) < 0" src="../../assets/images/WeChat-bg.png" />
            <img v-else src="../../assets/images/WeChat.png" />扫一扫添加微信
          </p>
          <p>
            <img @click="showWeChat(2)" v-if="WeChatAll.indexOf(2) < 0" src="../../assets/images/WeChat2-bg.png" />
            <img v-else src="../../assets/images/WeChat2.png" />扫一扫关注公众号
          </p>
            
        </div>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      WeChatAll: []
    }
  },
  methods: {
    showWeChat (type) {
      this.WeChatAll.push(type)
    }
  }
}
</script>
<style scoped lang="less">
.hotline {
  color: #efd492;
  display:flex;
  flex-flow: row wrap;
  align-items: center;
  padding-top: 35px;
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
    a {
      color: #444;
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
          width: 180px;
          p {
            padding-left: 40px;
            background: #fff url('../../assets/images/down-tel2.png') no-repeat 10px 10px;
            background-size: 20px;
            a {
              display: block;
              color: #000;
              font-size: 13px;
              font-weight: normal;
              text-decoration: underline;
              margin: 5px 0 0 -28px;
            }
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
      &.iphone {
        div {
          height: 80px;
        }
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