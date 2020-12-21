<template>
  <div class="download">
    <h3>下载手册（PDF）</h3>
    <div class="pdf">
      <i>瓦努阿图 <br /> Vanuatu</i>
    </div>
    <p>*填写资料即可获取项目资料</p>

    <input type="text" placeholder="请填写您的姓名"/>
    <input type="text" placeholder="请填写您的邮箱"/>
    <button>立即获取项目手册</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.download {
  padding-top: 50px;
  h3 {
    font-size: 16px;
  }
  .pdf {
    position: relative;
    width: 120px;
    height: 160px;
    margin: 20px 0 30px;
    background: #EDEDED;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: 4;
      width: 16px;
      height: 100%;
      background: #447375;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: 3;
      width: 100%;
      height: 44px;
      background: #E2E2E2;
    }
    i {
      position: absolute;
      right: 10px;
      bottom: 10px;
      font-size: 12px;
      color: #447375;
      line-height: 14px;
      transform: scale(.9);
    }
  }
  p {
    padding-bottom: 10px;
    font-size: 12px;
    color: #A7A7A7;
  }
  input {
    display: block;
    width: 100%;
    height: 50px;
    margin-top: 15px;
    font-size: 16px;
    padding: 5px 20px;
    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    border-radius: 5px;
  }
  button {
    display: block;
    width: 100%;
    height: 50px;
    margin-top: 15px;
    color: #fff;
    font-size: 16px;
    line-height: 50px;
    background: #447375;
    border-radius: 5px;
  }
}
</style>