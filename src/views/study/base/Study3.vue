<template>
    <div>
        <div class="pc-max-width">
            <div class="content clearfix margin-t-80 animation-show">
                <div class="list left img">
                    <img src="../../../assets/images/overseas-study/international-school-icon1.jpg" />
                </div>
                <div class="list text right">
                    <div class="t">
                        <p>不像政府学校学位名额只有少量空缺留给国际学生，新加坡开设的国际学校都拥有自主招生的权利，入学难度低。新加坡的国际学校教育课程主要分为3类： AP（美国基础的系统）、IB(国际学士学位)系统和IGCSE（英联邦国家系统）。</p>
                    </div>
                </div>
            </div>
            <div class="content clearfix margin-t-80 animation-show">
                <div class="list img right">
                    <img src="../../../assets/images/overseas-study/international-school-icon2.jpg" />
                </div>
                <div class="list text left">
                    <div class="t">
                        <p>国际学校硬件设施好更为学生综合素质的发展创造了条件，其师资力量都来自世界各地，提供更广泛的课程，增强学生的学习经验，拓展国际化的视野。提供了从幼儿园至高中阶段的一站式教学服务。而且国际学校的文凭皆受全世界认可，尤其是新加坡IB文凭的通过率远高于全球平均水平，在国际IB会考已实现七连冠了。</p>
                    </div>
                </div>
            </div>
            <div class="content clearfix margin-t-80 animation-show">
                <div class="list left img">
                    <img src="../../../assets/images/overseas-study/international-school-icon3.jpg" />
                </div>
                <div class="list text right">
                    <div class="t">
                        <p>持有IB证书的学生可直接申请就读130多个国家的4000多所大学。最重要的是IB考生的得分在38分(满分45分)就能进入美国常春藤大学、英国剑桥大学以及牛津大学。而新加坡的IB平均分为37.99分，这让许多家长将新加坡国际学校视为孩子跻身世界一流大学的绝佳“跳板”。</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="advantage pc-max-width margin-t-80">
            <h3 class="study-title">选择国际学校的优势</h3>
            <div class="box-content clearfix">
                <div v-for="(item, key) in listData" :key="key" class="item left">
                    <img :src="item" />
                </div>
            </div>
        </div>
        
        <Process></Process>

        <div class="pc-max-width clearfix margin-t-80 suitable-for">
            <div class="left">
                <h3 class="study-title">适合人群</h3>
                <p>1. 想要移民新加坡的家庭 </p>
                <p>2. 希望孩子接受双语教学和多元化的教育体系</p>
                <p>3. 向往西方生活环境，想循序渐进跳板到欧美</p>
            </div>
            <div class="right">
                <img src="../../../assets/images/overseas-study/international-school-icon9.jpg" />
            </div>
        </div>
        
        <RecommendSchool :schoolData="schoolData"></RecommendSchool>
    </div>
</template>
<script>
import RecommendSchool from './RecommendSchool'
import Process from './Process'
export default {
    components: {
        RecommendSchool,
        Process
    },
    data () {
        return {
            listData: [
                 require('../../../assets/images/overseas-study/international-school-icon4.jpg'),
                 require('../../../assets/images/overseas-study/international-school-icon5.jpg'),
                 require('../../../assets/images/overseas-study/international-school-icon6.jpg'),
                 require('../../../assets/images/overseas-study/international-school-icon7.jpg'),
                 require('../../../assets/images/overseas-study/international-school-icon8.jpg')
            ],
            schoolData: {
                title: '公立院校推荐',
                list: [
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school1.png'),
                        name: '华中国际学校'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school2.png'),
                        name: '新加坡英华国际学校'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school3.png'),
                        name: '辅仁国际学校'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school4.png'),
                        name: '圣若瑟书院国际学校'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school5.png'),
                        name: '新加坡楷博高等教育学院'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school6.png'),
                        name: '新加坡管理学院'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school7.png'),
                        name: '新加坡psb学院'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school8.png'),
                        name: '澳洲詹姆斯库克大学新加坡校区'
                    }
                ]
            }
        }
    }
}
</script>
<style scoped lang="less">
.content {
  position: relative;
  .list {
    width: 50%;
    img {
      display: block;
      width: 100%;
    }
    strong {
      display: block;
      font-size: 36px;
      color: #447375;
      margin-bottom: 15px;
      span {
        display: block;
        margin-top: 15px;
        font-size: 16px;
        padding: 5px 0;
        background: #bd8c67;
        text-align: center;
        color: #fff;
      }
    }
    p {
      font-size: 16px;
      line-height: 28px;
    }
    &.sixth {
      strong {
        color: #bd8c67;
        display: inline-block;
      }
    }
    &.text {
      position: absolute;
      display: flex;
      height: 100%;
      right: 0;
      top: 0;
      color: #fff;
      padding: 0 45px;
      background: #969696;
      .t {
        align-self: center;
        width: 100%;
      }
      &.left {
        left: 0;
        right: auto;
      }
    }
  }
  @media (max-width: 767px) {
    padding: 0 5px;
    .list {
      width: 100%;
      text-align: center;
      strong {
        font-size: 20px;
        margin: 20px 0 10px 0;
      }
      p {
        line-height: 24px;
        font-size: 14px;
      }
      &.text {
        position: static;
        padding: 15px;
        &.left {
          text-align: center;
        }
      }
    }
  }
}

.advantage {
    .box-content {
        margin-top: 50px;
        .item {
            width: 18%;
            margin: 0 2.5% 10px 0;
            text-align: center;
            &:nth-child(5) {
                margin: 0;
            }
            img {
                display: block;
                width: 100%;
            }
        }
    }
    @media(max-width: 767px) {
        .box-content {
            margin-top: 30px;
            .item {
                width: 48%;
                margin-right: 4%;
                &:nth-child(even) {
                    margin-right: 0;
                }
            }
        }
    }
}

.suitable-for {
    color: #fff;
    background: #112032;
    .left {
        width: 50%;
        padding: 40px 50px;

    }
    .right {
        width: 50%;
        margin-right: -10px;
    }
    h3 {
        color: #fff;
        margin-bottom: 100px;
        &:after {
            left: 0;
            margin: 0;
            background: #fff;
        }
    }
    p {
        font-size: 16px;
        line-height: 34px;
    }
    @media (max-width: 1200px) {
        .left {
            padding: 35px 40px;
        }
        p {
            line-height: 32px;
        }
    }
}
</style>