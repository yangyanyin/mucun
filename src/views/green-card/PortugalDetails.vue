<template>
  <div class="portugal">
     <div class="banner">
        <img src="../../assets/images/portugal-d-bn.jpg" />
    </div>

    <div class="portugal-visa pc-max-width margin-t-80">
      
      <h3 class="canada-title">
        葡萄牙黄金签证
        <i>ARI/Golden Residence Permit Program</i>
      </h3>
      <div class="content clearfix">
        <div class="right">
          <img src="../../assets/images/portugal/portugal-visa-img.jpg" />
        </div>
        <div class="left">
          <p>
            国家：葡萄牙共和国<br />
            首都：里斯本（Lisbon<br />
            欧盟区：欧盟成员国，申根区成员国<br />
            货币：欧元（EUR）<br />
            国土面积：92212 km2<br />
            人口数量：1029.1万人<br />
            免签国家: 185个国家<br />
            主要语言：葡萄牙语
          </p>
          <span>葡萄牙作为一个地中海国家，葡萄牙有着丰富多彩的文化以及优美宜人的地中海气候。政治气候稳定，经济快速发展和自由进出整个申根区的特权让葡萄牙成为理想的家庭和商业迁移目的地。</span>
        </div>
      </div>
    </div>

    <Advantage :advantage="eightTheBest"></Advantage>

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
         detail: [
           '项目简介',
           '葡萄牙于1986年加入欧盟，1995年加入申根区。在2012年9月由葡萄牙外交部及内政部共同签署11820-A/2012号法案，正式推出了“葡萄牙居留计划”（ARI/Golden Residence Permit Program）；并在2013年1月签署1661-A/2013号法案，弱化居住要求；',
           '该计划允许非欧盟成员国的公民通过投资购买房产、投资基金、创造岗位等多种方式，获得黄金居留身份。'
         ]
       },
       eightTheBest: {
         title: '葡萄牙八之最',
        line_number: 8,
        list: [
          {
            icon: require('../../assets/images/portugal/portugal-img9.jpg'),
            text: '世界上最自由的国家之一'
          },
          {
            icon: require('../../assets/images/portugal/portugal-img10.jpg'),
            text: '全球最适合养老的七大国家之一'
          },
          {
            icon: require('../../assets/images/portugal/portugal-img11.jpg'),
            text: '2015全球声誉最好国家排行位居18位'
          },
          {
            icon: require('../../assets/images/portugal/portugal-img12.jpg'),
            text: '葡萄牙拥有6所高校跻身全球最佳'
          },
          {
            icon: require('../../assets/images/portugal/portugal-img13.jpg'),
            text: '葡萄牙和平指数全球排名第七'
          },
          {
            icon: require('../../assets/images/portugal/portugal-img14.jpg'),
            text: '葡萄牙物价水平西欧最低'
          },
          {
            icon: require('../../assets/images/portugal/portugal-img15.jpg'),
            text: '葡萄牙移民融入指数世界第二'
          },
          {
            icon: require('../../assets/images/portugal/portugal-img16.jpg'),
            text: '葡萄牙“黄金居留”被评为全球最佳投资移民政策'
          }
        ]
       },
       advantage: {
          title: '项目优势',
          line_number: 7,
          list: [
            {
              icon: require('../../assets/images/portugal/portugal-img2.png'),
              text: '无年龄要求，无外语要求，无资产要求，整体流程只需3-6 个月'
            },
            {
              icon: require('../../assets/images/portugal/portugal-img3.png'),
              text: '申请门槛低，不需要商业背景和资金来源'
            },
            {
              icon: require('../../assets/images/portugal/portugal-img4.png'),
              text: '传统西欧国家，所获身份自由出入 申根国'
            },
            {
              icon: require('../../assets/images/portugal/portugal-img5.png'),
              text: '每年只需在当地居住7天，每年旅游即可满足居住要求'
            },
            {
              icon: require('../../assets/images/portugal/portugal-img6.png'),
              text: '一人办理，全家获身份'
            },
            {
              icon: require('../../assets/images/portugal/portugal-img7.png'),
              text: '持黄金签证的夫妻在葡居住一年后，其当地出生的新生儿可获得落地公民权'
            },
            {
              icon: require('../../assets/images/portugal/portugal-img8.png'),
              text: '护照排名世界第6，免签180多个国家及地区'
            }
          ]
        },
        description: [
          {
            icon: require('../../assets/images/portugal/portugal-img1.jpg'),
            title: '黄金居留计划的投资要求',
            detail: [
              '1 在葡萄牙当地购买不低于50万欧元的房地产，即可申请“黄金签证”',
              '',
              '2 葡萄牙于2015年6月30日正式通过了最新黄金居留法案（63/2015），增加了黄金居留签证的投资方式： 购置至少30年建筑年龄的房地产，或是购置于城市重建区的房地产并对其进行翻新工程，投资额不低于35万欧元，即可获得“黄金签证” ',
              '',
              '3 从获得“黄金签证”起，所投资房产需要持有不少于5年 ',
              '4 “黄金签证”首次签发为两年有效期，之后可以续签每次签发期限均为2年',
              '5 持“黄金签证”5年后，满足相应条件可以申请永居或直接入籍（永居每5年更新一次）'
            ]
          }
        ],
        projectProcess: [
          '评估/与SGPEC签订服务合约',
          '准备文件材料',
          '完成投资金额转账，缴纳手续费和审查费',
          '提交投资相关文件并支付黄金签证申请费',
          '赴葡萄牙进行指纹识别过程，即录入身份',
          '获得黄金居留签证'
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

.portugal-visa {
  .content {
    background: #f7f7f7;
    margin-top: 50px;
    .left {
      width: 470px;
      padding: 60px;
      color: #447375;
      line-height: 28px;
      p {
        font-size: 16px;
      }
      span {
        display: block;
        margin-top: 20px;
        font-size: 12px;
      }
    }
    .right {
      width: calc(100% - 470px);
      height: 448px;
      overflow: hidden;
      img {
        display: block;
        position: relative;
        left: 50%;
        height: 100%;
        transform: translateX(-50%);
      }
    }
    @media (max-width: 767px) {
      margin-top: 30px;
      .left {
        width: 100%;
        padding: 20px;
        line-height: 24px;
        p {
          font-size: 14px;
        }
      }
      .right {
        width: 100%;
        height: auto;
        img {
          width: 100%;
          height: auto;
          left: 0;
          transform: translateX(0);
        }
      }
    }
  }
}
</style>

<style lang="less">
.portugal {
  .canada-title {
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
  .advantage-type8 {
    padding: 0;
    background: #fff;
    .item {
      p {
        color: #447375;
        font-size: 15px;
      }
    }
  }
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
          height: 324px;
        }
      }
    }
  }
}
</style>