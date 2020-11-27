<template>
  <div class="recommend-school pc-max-width margin-t-80">
    <h3 class="study-title">{{schoolData.title}}</h3>
    <ul class="clearfix">
        <li class="left" v-for="(item, key) in schoolData.list" :key="key">
            <span>{{item.name}}</span>
            <img :src="item.icon" alt="新加坡理工学院" />
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    schoolData: Object
  }
}
</script>
<style scoped lang="less">

.recommend-school {
    text-align: center;
    ul {
        margin-top: 50px;
        border-right: 1px solid #EBEBEB;
        border-bottom: 1px solid #EBEBEB;
        li {
            width: 25%;
            border-top: 1px solid #EBEBEB;
            border-left: 1px solid #EBEBEB;
            text-align: center;
            padding: 40px 0;
            span {
                display: block;
                padding-bottom: 20px;
                font-size: 16px;
            }
            img {
                display: block;
                width: 100%;
            }
        }
    }
}
</style>