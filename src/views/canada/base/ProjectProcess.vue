<template>
  <div class="project-process margin-t-80">
    <h3 class="canada-title">项目流程</h3>
    <div class="pc-max-width">
      <ul>
        <li v-for="(item, key) in projectProcess" :key="key" :style="{width: 100 / projectProcess.length - 3 + '%'}">
          <h3>第{{key + 1}}步</h3>
          <i :class="{on: item.length > 20}">{{item}}</i>
        </li>
      </ul>
      <!-- <ul>
        <li v-for="(item, key) in projectProcess.splice(8, 14)" :key="key" :style="{width: 100 / projectProcess.length - 3 + '%'}">
          <h3>第{{key + 1}}步</h3>
          <i :class="{on: item.length > 20}">{{item}}</i>
        </li>
      </ul> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    projectProcess: Array
  }
}
</script>
<style scoped lang="less">
.project-process {
  padding: 50px 0;
  background: #f7f7f7;
  ul {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    li {
      display: flex;
      position: relative;
      height: 150px;
      padding-top: 30px;
      text-align: center;
      border-radius: 5px;
      box-shadow: 0 0 5px 0 #bdbdbd;
      justify-content: center;
      align-items: center;
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: -23%;
        width: 20px;
        height: 20px;
        background: url('../../../assets/images/canada/arrow-right.png') no-repeat;
        background-size: 100%;
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
      h3 {
        position: absolute;
        top: 0;
        left: 20px;
        right: 20px;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        color: #fff;
        background: #447375;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
      i {
        padding: 10px;
        font-size: 16px;
        &.on {
          font-size: 12px;
        }
      }
    }
  }
}
</style>