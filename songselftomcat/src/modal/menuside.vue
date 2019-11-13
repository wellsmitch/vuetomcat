<template>
    <a-layout-sider
      collapsible
      v-model="collapsed"
    >
      <!--<div class="logo" />-->
      <img src="~ASSETS/song.jpg" alt="" style="height: 50px;margin: 0 auto;padding: 6px 0;display: block;border-radius: 50%">
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <!--<a-menu-item key="1">-->
        <!--<a-icon type="pie-chart" />-->
        <!--<span>Option 1</span>-->
        <!--</a-menu-item>-->
        <!--<a-menu-item key="2">-->
        <!--<a-icon type="desktop" />-->
        <!--<span>Option 2</span>-->
        <!--</a-menu-item>-->
        <a-sub-menu
          key="sub1"
          :collapsible=collapsed1
        >
          <span slot="title">
            <icon-font style="font-weight: 800;color: #Fff" type="icon-h5" />
            <span>web</span>
            <!--<a-icon type="user" />-->
          </span>
          <a-menu-item @click="techologyJump('html')" key="3">html</a-menu-item>
          <a-menu-item key="4">
            <router-link :to="{name:'cssindex',path: '/cssindex',query: {param1:'css'}}">css</router-link>
          </a-menu-item>
          <!--<a-menu-item @click="techologyJump('原生js')" key="5">原生js</a-menu-item>-->
          <a-menu-item @click="techologyJump('vue')" key="6">vue</a-menu-item>
          <a-menu-item @click="techologyJump('react')" key="7">react</a-menu-item>
          <a-menu-item @click="techologyJump('angular')" key="8">angular</a-menu-item>
          <a-menu-item @click="techologyJump('微信小程序')" key="9">微信小程序</a-menu-item>
          <a-menu-item @click="techologyJump('H5plus')" key="10">H5plus</a-menu-item>
          <a-menu-item @click="techologyJump('mui')" key="11">mui</a-menu-item>
        </a-sub-menu>
        <a-sub-menu
          key="sub2"
        >
          <span slot="title">
            <!--<a-icon type="team" />-->
             <icon-font style="font-weight: 800;color: #Fff" type="icon-java" />
            <span>java</span>
          </span>
          <a-menu-item @click="techologyJump()" key="6">基础语法</a-menu-item>
          <a-menu-item @click="techologyJump()" key="8">mybatis</a-menu-item>
        </a-sub-menu>

        <a-sub-menu
          key="sub3"


        >
          <span slot="title">
            <!--<a-icon type="team" />-->
           <icon-font style="font-weight: 800;color: #Fff" type="icon-shujuku" />
            <span>数据库</span>
          </span>
          <a-menu-item @click="techologyJump()" key="6">基础语法</a-menu-item>
          <!--<a-menu-item key="8">mybatis</a-menu-item>-->
        </a-sub-menu>

      </a-menu>
    </a-layout-sider>
</template>

<script>
  import { Icon } from 'ant-design-vue';
  import fonts from "./fonts.js";
  const IconFont = Icon.createFromIconfontCN({
    //iconfont 生成的js
    scriptUrl: fonts,
    // scriptUrl: '../../static/fonts.js',
    // scriptUrl: '//at.alicdn.com/t/font_1447547_erxuscdi1uk.js',
  });
  export default {
    name: 'menu_side',
    data() {
      return {
        collapsed: false,
        collapsed1: false,

        menuListNum: 0
      }
    },
    methods: {
      onChange(date, dateString) {
        console.log(date, dateString);
      },
      techologyJump(a) {
        this.$router.push({
          path: '/webIndex',
          name: 'webIndex',
          query:{param1:a}
        }).catch(function (e) {
          // console.log(e);
        })
      }
    },
    mounted() {
      // this.techologyJump('html')
    },
    components: {
      IconFont,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, .2);
    margin: 16px;
  }
</style>
