<template>
  <!-- 媒体 -->
    <div class="pc-max-width">
      <div class="media-content clearfix">
        <h3 class="left">媒体报道</h3>
        <ul class="right">
          <li v-for="(item, key) in mediaData" :key="key">
            <a target="_blank" :href="item.url"><img :src="item.img" /></a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      mediaData: [
        {
          img: require('../../../assets/images/media/wangyi@2x.png'),
          url: 'https://edu.163.com/20/1125/17/FS9VIVUK0029985J.html '
        },
        {
          img: require('../../../assets/images/media/fenghangwang@2x.png'),
          url: 'https://gd.ifeng.com/c/v002zk7Qk--jElpeoYodb-_OqSikQ9gZgWUv9GfR7T-_oHjzeI__ '
        },
        {
          img: require('../../../assets/images/media/sohu@2x.png'),
          url: 'https://biznews.sohu.com/a/436022953_120181749 '
        },
        {
          img: require('../../../assets/images/media/dazhongwang@2x.png'),
          url: 'http://www.dzwww.com/xinwen/jishixinwen/202101/t20210127_7756821.htm'
        },
        {
          img: require('../../../assets/images/media/zhongguozixunwang@2x.png'),
          url: 'http://www.zguonew.com/56618.html '
        },
        {
          img: require('../../../assets/images/media/exact-release@2x.png'),
          url: 'https://exactrelease.org/global-citizenship-programs-waterland-capital/'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
// 媒体报道
.media-content {
  position: relative;
  top: -58px;
  z-index: 99;
  border: 1px solid #E5E5E5;
  background: #fff;
  h3 {
    position: relative;
    padding: 0 35px;
    line-height: 114px;
    font-size: 20px;
    font-weight: bold;
    &:after {
      content: '';
      position: absolute;
      width: 1px;
      height: 50px;
      right: 0;
      top: 32px;
      background: #E5E5E5;
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100% - 170px);
    height: 114px;
    img {
      display: block;
      height: 75px;
    }
  }
  @media(max-width:1120px) {
    ul img {
      height: 60px;
    }
  }
  @media(max-width: 767px) {
    display: none;
    // top: -30px;
    // border-radius: 5px;
    // h3 {
    //   display: none;
    //   padding: 0 10px;
    //   font-size: 14px;
    // }
    // ul {
    //   display: block;
    //   width: 100%;
    //   height: auto;
    //   padding: 10px;
    //   white-space: nowrap;
    //   text-align: left;
    //   overflow: auto;
    //   li {
    //     display: inline-block;
    //     margin: 0 5px;
    //     img {
    //       height: 34px;
    //     }
    //   }
    // }
  }
}
</style>