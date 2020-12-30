<template>
  <div class="recommend-school pc-max-width margin-t-80">
    <h3 class="study-title">{{ schoolData.title }}</h3>
    <ul class="clearfix">
      <li class="left" v-for="(item, key) in schoolData.list" :key="key">
        <router-link :to="item.url">
          <span>{{ item.name }}</span>
          <img :src="item.icon" alt="新加坡理工学院" />
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    schoolData: Object,
  },
};
</script>
<style scoped lang="less">
.recommend-school {
  text-align: center;
  ul {
    margin-top: 50px;
    border-right: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    li {
      width: 25%;
      border-top: 1px solid #ebebeb;
      border-left: 1px solid #ebebeb;
      text-align: center;
      padding: 40px 0;
      a {
        color: #444;
        @media (min-width: 767px) {
          &:hover {
            color: #447375;
            img {
              transform: scale(1.1);
            }
          }
        }
      }
      span {
        display: block;
        padding-bottom: 20px;
        font-size: 16px;
      }
      img {
        display: block;
        width: 100%;
        transition: .3s;
      }
    }
    @media (max-width: 767px) {
      margin-top: 30px;
      li {
        width: 50%;
        padding: 20px 0;
        span {
          padding-bottom: 10px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>