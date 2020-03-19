<template>
  <div class="side-news">
    <div class="recommend animation-show">
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
    <div class="contact animation-show">
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
  @media (max-width: 767px) {
    padding-top: 20px;
    .contact {
      border: none;
    }
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
    @media (max-width: 767px) {
      padding: 15px 0 10px;
      h3 {
        font-size: 18px;
        padding: 0 0 15px 10px;
        &:after {
          top: 3px;
          width: 2px;
          height: 17px;
        }
      }
      .list {
        padding: 0;
        a {
          margin: 20px 0;
        }
      }
    }
  }
}
</style>
<style lang="less">
.side-news {
  .input-box {
    padding: 25px 30px;
    @media (min-width: 767px) {
      box-shadow: none;
      border-radius: 0;
    }
  }
}
</style>