<template>
  <div class="process margin-t-80">
    <h3 class="study-title">入学流程</h3>
    <div class="list first">
        <img src="../../../assets/images/overseas-study/process1.png" />
        <span>了解学校信息</span>
    </div>
    <div class="list">
        <img src="../../../assets/images/overseas-study/process2.png" />
        <span>制定留学方案</span>
    </div>
    <div class="list">
        <img src="../../../assets/images/overseas-study/process3.png" />
        <span>提交入学申请</span>
    </div>
    <div class="list">
        <img src="../../../assets/images/overseas-study/process4.png" />
        <span>办理学生准证</span>
    </div>
    <div class="list">
        <img src="../../../assets/images/overseas-study/process5.png" />
        <span>获得学生签证</span>
    </div>
    <div class="list">
        <img src="../../../assets/images/overseas-study/process6.png" />
        <span>入学就读</span>
    </div>
  </div>
</template>
<style scoped lang="less">
.process {
    padding: 60px 0;
    text-align: center;
    background: #FCFCFC;
    .list {
        position: relative;
        display: inline-block;
        margin: 60px 40px 0;
        &.first {
            &:after {
                display: none;
            }
        }
        &:after {
            content: '';
            position: absolute;
            top: 31px;
            left: -75px;
            width: 60px;
            height: 2px;
            background: #448937;

        }
        span {
            display: block;
            margin-top: 30px;
            color: #448937;
            font-size: 18px;
        }
    }
}

</style>