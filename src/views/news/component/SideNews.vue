<template>
  <div class="side-news">
    <div class="recommend">
      <h3>为你推荐</h3>
      <div class="list">
        <router-link to="/news-details/1">新加坡全球护照交流中心-SGPEC，总部位于法治严明的新加坡，是多国政府和机构投资移民项目的官方授权持牌机构。作为新加坡行业领先的专业移民机构，以高效快速，隐私保密著称业内。</router-link>
        <router-link to="/news-details/1">新加坡全球护照交流中心-SGPEC，总部位于法治严明的新加坡，是多国政府和机构投资移民项目的官方授权持牌机构。作为新加坡行业领先的专业移民机构，以高效快速，隐私保密著称业内。</router-link>
        <router-link to="/news-details/1">新加坡全球护照交流中心-SGPEC，总部位于法治严明的新加坡，是多国政府和机构投资移民项目的官方授权持牌机构。作为新加坡行业领先的专业移民机构，以高效快速，隐私保密著称业内。</router-link>
        <router-link to="/news-details/1">新加坡全球护照交流中心-SGPEC，总部位于法治严明的新加坡，是多国政府和机构投资移民项目的官方授权持牌机构。作为新加坡行业领先的专业移民机构，以高效快速，隐私保密著称业内。</router-link>
        <router-link to="/news-details/1">新加坡全球护照交流中心-SGPEC，总部位于法治严明的新加坡，是多国政府和机构投资移民项目的官方授权持牌机构。作为新加坡行业领先的专业移民机构，以高效快速，隐私保密著称业内。</router-link>
        <router-link to="/news-details/1">新加坡全球护照交流中心-SGPEC，总部位于法治严明的新加坡，是多国政府和机构投资移民项目的官方授权持牌机构。作为新加坡行业领先的专业移民机构，以高效快速，隐私保密著称业内。</router-link>
        <router-link to="/news-details/1">新加坡全球护照交流中心-SGPEC，总部位于法治严明的新加坡，是多国政府和机构投资移民项目的官方授权持牌机构。作为新加坡行业领先的专业移民机构，以高效快速，隐私保密著称业内。</router-link>
      </div>
    </div>
    <div class="contact">
      <InputBox />
    </div>
  </div>
</template>
<script>
import InputBox from '../../../components/commonComponent/InputBox'
export default {
  components: {
    InputBox
  }
}
</script>
<style lang="less" scoped>
.side-news {
  >div {
    background: #fff;
    border-top: 2px solid #447375;
    margin-bottom: 10px
  }
  .recommend {
    padding: 25px 30px;
    h3 {
      position: relative;
      font-size: 26px;
      padding-left: 18px;
      padding-bottom: 22px;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 5px;
        width: 4px;
        height: 26px;
        background: #447375;
      }
    }
    .list {
      border-top: 1px solid #f7f7f7;
      padding-top: 10px;
      a {
        display: block;
        margin: 12px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #444;
      }
    }
  }
}
</style>
<style lang="less">
.side-news {
  .input-box {
    border-radius: 0;
    box-shadow: none;
    padding: 25px 30px;
  }
}
</style>