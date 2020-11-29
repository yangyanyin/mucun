<template>
  <div class="japan">
     <div class="banner">
        <img src="../../assets/images/japan-d-bn.jpg" />
    </div>

    <Introduction :introduction="introduction"></Introduction>

    <Advantage :advantage="advantage"></Advantage>

    <Description :description="description"></Description>

    <ProjectProcess :projectProcess="projectProcess"></ProjectProcess>

    <ContentImg></ContentImg>

    <ContactUs></ContactUs>
  </div>
</template>
<script>
import Introduction from '../canada/base/Introduction.vue'
import Advantage from '../canada/base/Advantage'
import ProjectProcess from '../canada/base/ProjectProcess'
import Description from '../canada/base/Description'
import ContentImg from '../../components/ContentImg'
import ContactUs from '../../components/commonComponent/ContactUs'
export default {
  components: {
    Introduction,
    Advantage,
    ContentImg,
    Description,
    ContactUs,
    ProjectProcess
  },
   data () {
     return {
       introduction: {
         title: {
          zh: '日本经营管理签证',
          en: 'Business Management Visa'
        },
         detail: [
           '项目简介',
           '日本经营管理签证主要针对在日进行投资业务和经营活动的外籍人士所设置的长期居住签证。在取得日本经营签证后，即可取得在日本长期居住的资格，进而实现移民日本的最终目的。与此同时，外籍投资者也即可加入日本的社会保险体系，在医疗、生育、养老等方面享受同等的国民待遇。'
         ]
       },
       advantage: {
          title: '项目优势',
          line_number: 4,
          list: [
            {
              icon: require('../../assets/images/japan/japan-img1.jpg'),
              title: '无门槛要求',
              text: '日本经营管理签证无语言与面试要求，申请时由SGPEC保驾护航带领客户入境日本，协助办理'
            },
            {
              icon: require('../../assets/images/japan/japan-img2.jpg'),
              title: '无移民监',
              text: '持日本经营签证的外籍人士可以自由进出日本，没有居住时间要求，只要在日企业正常经营盈利即可顺利续签'
            },
            {
              icon: require('../../assets/images/japan/japan-img3.jpg'),
              title: '日本开户安全系数高',
              text: '在日本设立公司，拓展业务即可开设本地银行账户，享受法人银行贷款低利率政策'
            },
            {
              icon: require('../../assets/images/japan/japan-img4.jpg'),
              title: '资金可以安全支配',
              text: '日本作为亚洲发达国家、金融中心之一，持日本经营签证者所投资的金额不是存在政府指定账户，而是存入申请者在日本开设的公司账户里，资金安全、可支配，最大化保障隐私。'
            }
          ]
        },
        description: [
          {
            icon: require('../../assets/images/japan/japan-img5.jpg'),
            title: '对申请人的要求',
            detail: [
              '日本注册公司，至少500万日元实收资本（4.5万美元）的注册资金到位。',
              '投资金额越高，获得签证的机会就越高。公司成立后，投入的资金可用于业务拓展。',
              '',
              '商业计划书',
              '确定在日本有发展的事业内容，提供合理的商业计划书。计划必须能够证明公司可以稳定经营，确保业务的可行性、稳定性、连续性。 根据经营内容，需要有各种营业许可证',
              '某些类型的企业需要营业许可证才能运营；例如，餐馆，建筑公司，金融服务等。必须确保已获得经营业务所需的所有许可证。',
              '',
              '主申请人要有3年以上管理经验',
              '要求申请人有过类似的管理经验，比如总经理、副总经理、股东等，部门经理是最低要求，对公司规模无要求，需要提供工作证明信。',
              '',
              '办公室',
              '日本公司的注册地址需要真实租赁。移民局有权访问营业场所并检查。',
              '',
              '董事名单',
              '确定成立日本公司的董事名单，其中必须要有一位长期居住日本的人作为日方代表。',
              '',
              '雇佣2名以上常勤员工',
              '至少要拥有2名常勤职员。可以雇佣日本当地的华人也可以是日本人，雇佣时要考虑到业务的实际需求。'
            ]
          }
        ],
        projectProcess: [
          '评估/签约',
          '准备所需的材料',
          '设立办公室',
          '由SGPEC递交申请到日本移民厅',
          '批准后申请临时签证登陆开户办理行政手续如开户等',
          '成立公司',
          '获得经营管理签证'
        ]
      }
    } 
}
</script>
<style scoped lang="less">
.banner {
  position: relative;
  text-align: center;
  width: 100%;
  overflow: hidden;
  height: 340px;
  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
  }
  @media (max-width: 767px) {
    padding-top: 60px;
    height: 240px;
    img {
      top: 60px;
      height: 180px;
    }
  }
}
</style>
<style lang="less">
.japan .canada-title {
  position: relative;
  font-size: 28px;
  text-align: center;
  padding-bottom: 20px;
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 42px;
    height: 5px;
    margin-left: -21px;
    background: #447375FF;
  }
  i {
    display: block;
  }
  @media (max-width: 1200px) {
    font-size: 26px;
    padding-bottom: 18px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
}

.japan {
  .description .description-item {
    background: #f7fffd;
    > div {
      @media (min-width: 767px) {
        p {
          line-height: 24px;
        }
        &.text {
          width: 65%;
        }
        &.img {
          width: 35%;
        }
        img {
          height: 560px;
        }
      }
    }
  }
}
</style>