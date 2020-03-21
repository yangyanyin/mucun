<template>
  <div class="hotline">
    咨询热线: 
    <h3>+65 8866 5586</h3>
    <span class="tel"><img class="s" src="../../assets/images/footer-iphone.png" />
      <div>
        <p>+65 8866 5586</p>
      </div>
    </span>
    <span>
      <img class="s" src="../../assets/images/footer-email.png" />
      <div>
        <p>sgpec@spgec.sg</p>
      </div>
    </span>
    <span class="wx"><img class="s" src="../../assets/images/footer-wx.png" />
      <div>
        <p><img src="../../assets/images/WeChat.png" /></p>
      </div>
    </span>
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

  
  h3 {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    margin: 0 5px 0 10px;
  }
  span {
    position: relative;
    display: inline-block;
    width: 24px;
    margin-left: 30px;
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
        width: 115px;
      }
    }
    &.wx {
      div {
        right: -3px;
      }
      p {
        right: -5px;
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
          height: 140px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    h3 {
      font-size: 16px;
    }
    span {
      margin-left: 20px;
    }
  }
}

</style>