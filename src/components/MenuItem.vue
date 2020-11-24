<template>
    <div class="menu" id="emigrant-menu">
        <router-link v-for="(item, key) in menuList" :key="key" 
            :to="item.url" 
            :style="{'width':width}">
            <i>
                {{item.zh_text}}
                <em>{{item.en_text}}</em>
            </i>
        </router-link>
    </div>
</template>
<script>
import { animation, windowScroll } from "../assets/js/config"
export default {
    props: {
        menuList: Array
    },
    computed: {
        width () {
            return 100 / this.menuList.length + '%'
        }
    },
    mounted () {
        let scroll = document.documentElement.scrollTop || document.body.scrollTop;
        animation(scroll);
        windowScroll();
        let linkBox = document.getElementById('emigrant-menu')
        let linkActive = linkBox.getElementsByClassName('router-link-active')[0].offsetLeft - 100
        setTimeout(()=> {
        linkBox.scrollLeft = linkActive
        }, 10)
    }
}
</script>
<style scoped lang="less">
.menu {
      position: relative;
      height: 80px;
      margin: -40px 0 20px 0;
      background: #fff;
      border-radius: 5px;
      z-index: 99;
      box-shadow: 0 3px 3px 0 #ababab;
      @media (max-width: 767px) {
        margin-top: -30px;
      }
      a {
        display: inline-block;
        width: 25%;
        text-align: center;
        height: 80px;
        cursor: pointer;
        color: #111;
        i {
          display: inline-block;
          font-size: 16px;
          padding: 17px 0;
          em {
            display: block;
          }
        }
        &.router-link-active {
          i {
            color: #447375;
            font-weight: bold;
            border-bottom: 4px  solid #447375;
          }
        }
        @media (min-width: 767px) {
          &:hover {
            i {
              color: #447375;
              border-bottom: 4px  solid #447375;
            }
          }
        }
      }
      @media (max-width: 767px) {
        white-space: nowrap;
        height: 60px;
        overflow-x: auto;
        padding: 0 10px;
        &::-webkit-scrollbar {
          width: 5px;
          height: 0px;
        } 
        a {
          position: relative;
          width: auto;
          height: auto;
          padding: 0 10px;
          i {
            padding: 10px 0;
            font-size: 14px;
          }
          &.router-link-active {
            i {
              color: #447375;
              font-weight: bold;
              border-bottom: none;
            }
            &:after {
              content: '';
              position: absolute;
              left: 10px;
              right: 10px;
              bottom: 0;
              height: 4px;
              background: #447375;
            }
          }
        }
      }
    }

</style>