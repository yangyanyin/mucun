<template>
    <div class="public-school">
        <div class="pc-max-width">
            <div class="content clearfix margin-t-80 animation-show">
                <div class="list left img">
                    <img src="../../../assets/images/overseas-study/public-school-icon1.jpg" />
                </div>
                <div class="list text right">
                    <div class="t">
                        <strong>NO.1</strong>
                        <p>新加坡公立学校一直保持着高水准的教学质量，注重学术，对各学科要求都比较高，尤其是数学和科学，经常在国际竞赛中独占鳌头。最独特的优势是双语教育，让学生在学习英语以外，还要学习自己的母语，加深对自己文化的根基。</p>
                    </div>
                </div>
            </div>

            <div class="content clearfix margin-t-80 animation-show">
                <div class="list img right">
                    <img src="../../../assets/images/overseas-study/public-school-icon2.jpg" />
                </div>
                <div class="list text left">
                    <div class="t">
                        <strong>NO.2</strong>
                        <p>公立中小学采用英联邦的GCE(General Certificate of Education)教育系统，从小六PSLE会考，O水准，A水准，最大升学优势是跻身进入世界顶尖大学：新加坡国立大学（NUS）、新加坡南洋理工大学（NTU）以及新加坡管理大学（SMU）等优秀的公立大学，而且就读新加坡公立大学，政府会为国际学生提供60%到80%不等的学费津贴，享受该政策学生们必须要签订一份协议，毕业后留在本地企业工作三年，就业率高达90%以上。</p>
                    </div>
                </div>
            </div>

            <div class="content clearfix margin-t-80 animation-show">
                <div class="list left img">
                    <img src="../../../assets/images/overseas-study/public-school-icon3.jpg" />
                </div>
                <div class="list text right">
                    <div class="t">
                        <strong>NO.3</strong>
                        <p>新加坡推行能力型教育，强调培养学生的自主学习。实行分流教育，因材施教使学生根据自己的才华进入不同层次学习，注重发挥学生潜能。另外中小学的CCA课外活动体制，支持学生的多元兴趣，让学生得到全面发展，培养学生品质素养，提高自律以及自信心。</p>
                    </div>
                </div>
            </div>

            <div class="content clearfix margin-t-80 animation-show">
                <div class="list img right">
                    <img src="../../../assets/images/overseas-study/public-school-icon4.jpg" />
                </div>
                <div class="list text left">
                    <div class="t">
                        <strong>NO.4</strong>
                        <p>公立学校不仅教育品质非常高，而且国际学生的学费也相对低廉。在每年的九月、二月份，新加坡教育部(MOE)会为那些希望进入新加坡公立中小学的国际学生举行统一入学考试。</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="advantage margin-t-80">
            <h3 class="study-title">新加坡留学优势</h3>
            <div class="pc-max-width box-content clearfix">
                <div v-for="(item, key) in listData" :key="key" class="item left">
                    <img :src="item.icon" :alt="item.text">
                    <p>{{item.text}}</p>
                </div>
            </div>
        </div>

        <div class="pc-max-width clearfix margin-t-80 suitable-for">
            <div class="left">
                <h3 class="study-title">适合人群</h3>
                <strong>基础教育（中小学）</strong>
                <p>6-15岁，成绩优秀、适应能力强的学生，AEIS考试成绩</p>
                <strong>高等教育</strong>
                <p>理工学院和高中要求高考一本线以上，雅思6.0分以上，“O”水准考试成绩 新加坡公立大学要求高考一本线以上，雅思6.0分以上，“A”水准考试成绩</p>
            </div>
            <div class="right">
                <img src="../../../assets/images/overseas-study/public-school-icon13.jpg" />
            </div>
        </div>

         <Process></Process>
        
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
                {
                    icon: require('../../../assets/images/overseas-study/public-school-icon5.png'),
                    text: '学费低廉、留学性价比更高'
                },
                {
                    icon: require('../../../assets/images/overseas-study/public-school-icon6.png'),
                    text: '教育经费由政府财政支持'
                },
                {
                    icon: require('../../../assets/images/overseas-study/public-school-icon7.png'),
                    text: '重视学生的双语教育'
                },
                {
                    icon: require('../../../assets/images/overseas-study/public-school-icon8.png'),
                    text: '特殊的陪读政策'
                },
                {
                    icon: require('../../../assets/images/overseas-study/public-school-icon9.png'),
                    text: '教育资源丰富'
                },
                {
                    icon: require('../../../assets/images/overseas-study/public-school-icon10.png'),
                    text: '成熟的人才培养机制'
                },
                {
                    icon: require('../../../assets/images/overseas-study/public-school-icon11.png'),
                    text: '毕业就业率93%'
                },
                {
                    icon: require('../../../assets/images/overseas-study/public-school-icon12.png'),
                    text: 'PR获批率极高'
                }
            ],
            schoolData: {
                title: '公立院校推荐',
                list: [
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school6.png'),
                        name: '新加坡理工学院'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school7.png'),
                        name: '新加坡南洋理工学院'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school8.png'),
                        name: '新加坡义安理工学院'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school2.png'),
                        name: '新加坡淡马锡理工学院'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school3.png'),
                        name: '新加坡共和理工学院'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school5.png'),
                        name: '新加坡国立大学'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school1.png'),
                        name: '南洋理工大学'
                    },
                    {
                        icon: require('../../../assets/images/overseas-study/school/recommend-school4.png'),
                        name: '新加坡管理大学'
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
      padding-left: 45px;
      .t {
        align-self: center;
        width: 100%;
      }
      &.left {
        padding: 0 45px 0 0;
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
        padding: 0;
        &.left {
          padding: 0;
          text-align: center;
        }
      }
    }
  }
}

.advantage {
    padding: 40px 0;
    background: #F7F7F7;
    h3 {
        font-size: 30px;
        text-align: center;
    }
    .box-content {
        margin-top: 50px;
        .item {
            width: 20%;
            margin: 0 6.666% 10px 0;
            text-align: center;
            &:nth-child(4n+0) {
                margin: 0;
            }
            img {
                display: block;
                width: 100%;
            }
            p {
                height: 118px;
                padding: 20px 10px;
                line-height: 24px;
            }
        }
    }
    @media (max-width: 767px) {
        padding: 25px 0;
        .box-content {
            margin-top: 30px;
            .item {
                width: 48%;
                margin: 0 4% 5px 0;
                &:nth-child(even) {
                    margin-right: 0;
                }
                p {
                    height: 60px;
                    padding: 10px 5px;
                    line-height: 20px;
                }
            }
        }
    }
}

.suitable-for {
    color: #fff;
    background: #497189;
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
        &:after {
            left: 0;
            margin: 0;
            background: #fff;
        }
    }
    strong {
        display: block;
        margin: 35px 0 10px;
        font-size: 20px;
        font-weight: normal;
    }
    p {
        font-size: 16px;
        line-height: 34px;
    }
    @media (max-width: 1200px) {
        .left {
            padding: 35px 40px;
        }
        strong {
            margin: 30px 0 10px;
        }
        p {
            line-height: 32px;
        }
    }
    @media (max-width: 767px) {
        .left {
            width: 100%;
            padding: 20px 10px;
        }
        .right {
            width: auto;
            margin: 0 -10px;
            img {
                display: block;
                width: 100%;
            }
        }
        strong {
            margin: 20px 0 5px;
            font-size: 16px;
            font-weight: normal;
        }
        p {
            font-size: 14px;
            line-height: 26px;
        }
    }
}
</style>