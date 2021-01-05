<template>
    <div class="pc-max-width lecture margin-t-80">
        <img class="img" src="../../../assets/images/overseas-study/lecture-img.jpg">
        <div class="adviser">
            <h3>留学顾问</h3>
            <p>新加坡衣食住行、人文环境、家属陪<br />读、精英教育等一系列问题，资深专家<br />一对一为您解答</p>
            <span>
                <img src="../../../assets/images/overseas-study/consultant-ewm.jpg" />
                扫码添加好友<br />获取留学最新资讯
            </span>
        </div>
    </div>
</template>
<style scoped lang="less">
.lecture {
    .img {
        display: block;
        width: 100%;
    }
    .adviser {
        position: relative;
        background: #fafff5;
        padding: 80px 80px 80px 120px;
        &:after {
            content: '';
            position: absolute;
            top: 90px;
            left: 80px;
            width: 5px;
            height: 198px;
            background: #447375;
        }
        h3 {
            color: #447375;
            font-size: 36px;
        }
        p {
            margin-top: 40px;
            font-size: 22px;
            line-height: 40px;
            color: #447375;
        }
        span {
            position: absolute;
            top: 80px;
            right: 80px;
            padding: 20px;
            background: #fff;
            text-align: center;
            font-size: 16px;
            line-height: 26px;
            img {
                display: block;
                width: 150px;
            }
        }
    }
    @media(max-width: 767px) {
        .adviser {
            padding: 30px;
            &:after {
                top: 35px;
                left: 15px;
                width: 3px;
                height: 95px;
            }
            h3 {
                font-size: 20px;
            }
            p {
                margin-top: 5px;
                font-size: 14px;
                line-height: 24px;
            }
            span {
                padding: 5px;
                right: 10px;
                top: 20px;
                font-size: 12px;
                line-height: 18px;
                img {
                    width: 80px;
                    margin: auto;
                }
            }
        }
    }
}
</style>