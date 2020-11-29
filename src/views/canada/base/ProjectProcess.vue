<template>
  <div class="project-process margin-t-80">
    <h3 class="canada-title">项目流程</h3>
    <div class="pc-max-width">
      <ul v-for="(list, index) in stepArr" :key="index">
        <li v-for="(item, key) in list" :key="key" :style="{width: 100 / list.length - 3 + '%'}">
          <h3>第{{key + (index === 0? 1 : 8)}}步</h3>
          <i :class="{on: item.length > 20}">{{item}}</i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { device } from "../../../assets/js/config.js";
export default {
  props: {
    projectProcess: Array
  },
  computed: {
    stepArr () {
      if (this.projectProcess.length > 7 && device() === 'web') {
        return [
          this.projectProcess.slice(0, 7),
          this.projectProcess.slice(7, 14)
        ]
      }
      return [this.projectProcess]
    }
  }
}
</script>
<style scoped lang="less">
.project-process {
  padding: 50px 0;
  background: #f7f7f7;
  ul {
    @media(min-width: 767px) {
      display: flex;
      justify-content: space-between;
      padding-top: 50px;
    }
    li {
      position: relative;
      height: 150px;
      padding-top: 30px;
      text-align: center;
      border-radius: 5px;
      box-shadow: 0 0 5px 0 #bdbdbd;
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
        margin-right: 0;
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
        position: absolute;
        display: block;
        top: 60%;
        left: 10px;
        right: 10px;
        font-size: 16px;
        transform: translateY(-50%);
        &.on {
          font-size: 12px;
        }
      }
    }
  }
  @media(max-width: 767px) {
    padding: 30px 0;
    ul {
      overflow: auto;
      white-space: nowrap;
      padding: 20px 5px;
      li {
        display: inline-flex;
        width: 120px !important;
        margin-right: 40px;
        white-space: normal;
        i {
          font-size: 14px;
        }
      }
    }
  }
}
</style>