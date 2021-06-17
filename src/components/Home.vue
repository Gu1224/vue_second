<template>
  <el-container>
    <!-- 头部区域 -->
    <el-header>
      <el-row>
        <!-- 左侧logo -->
        <el-col :span="2">
          <el-image :src="require('../assets/images/logo.png')" class="logo"></el-image>
        </el-col>
        <!-- 中部菜单 -->
        <el-col :span="17" :offset="2">
          <el-menu mode="horizontal" :default-active="this.activeIndex">
            <el-menu-item
              v-for="item in menuData"
              :key="item.id"
              :index="item.id + ''"
            >{{item.value}}</el-menu-item>
          </el-menu>
        </el-col>
        <!-- 右侧头像 -->
        <el-col :span="1" :offset="2">
          <el-dropdown>
            <el-avatar :src="require('../assets/images/avatar.jpg')"></el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <i class="el-icon-s-order"></i>我的简历
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-s-fold"></i>投递记录
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-switch-button"></i>退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <!-- 主体区域 -->
    <el-main>
      <!-- 走马灯 -->
      <el-carousel :interval="6000" height="444px">
        <el-carousel-item>
          <el-image :src="require('../assets/images/doorPic.jpg')"></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image :src="require('../assets/images/recruit.png')"></el-image>
        </el-carousel-item>
      </el-carousel>
      <!-- 公司简介 -->
      <div class="company">
        <p class="com_intro_title">公司简介</p>
        <el-divider></el-divider>
        <p class="com_intro_first">
          广州卓动信息科技有限公司成立于2013年。凭借夯实的技术沉淀和敏捷的团队响应，
          深耕于游戏发行、游戏研发、电商应用、工具应用、企业服务等多领域。
        </p>
        <p class="com_intro_second">
          从游戏出海起家到多项目、多业务、多领域并行，卓动已经成长为市值20亿的互联网公司，
          业务覆盖至全球70多个国家，拥有超7000万用户，并在多个业务领域中持续探索。2019年，
          卓动成立Superera轻游戏发行品牌，拓展了全球上百家轻游戏研发商。2020年，联合代理
          游戏免费榜第一的《最强蜗牛》，并试水电商与企业服务领域。
        </p>
        <p class="com_intro_third">
          未来，卓动作为互联网行业的领先者与探索者，秉持“多元、合作、共赢”的经营理念，致
          力于成为全球领先的互联网服务供应商。
        </p>
      </div>
      <!-- 校招职位 -->
      <div class="recruit">
        <p class="recruit_title">校招职位</p>
        <el-divider></el-divider>
        <el-row :gutter="30">
          <el-col :span="6" v-for="item in recruitData" :key="item.id">
            <el-card class="recruit_card" shadow="hover">
              <el-link class="category" :underline="false">{{item.category}}</el-link>
              <el-button type="primary" size="mini">共有{{item.num}}个职位</el-button>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div></div>
    </el-main>
  </el-container>
</template>

<script>
import menuList from '../assets/js/menu'
import recruitList from '../assets/js/recruit'

export default {
  created () {
    this.getMenuData()
    this.getRecruitData()
  },
  data () {
    return {
      activeIndex: '1',
      menuList,
      menuData: [],
      recruitList,
      recruitData: []
    }
  },
  methods: {
    getMenuData () {
      this.menuData = this.menuList.data
      console.log('menuData', this.menuData)
    },
    getRecruitData () {
      this.recruitData = this.recruitList.data
      console.log('recruitData', this.recruitData)
    }
  }
}
</script>

<style scoped>
/* 头部区域 */
.el-header {
  position: fixed;
  top: 0;
  z-index: 999;
  background: #fff;
  height: 64px !important;
  border-bottom: solid 1px #e6e6e6;
}
.logo {
  height: 60px !important;
}
.el-menu.el-menu--horizontal {
  height: 60px;
  border-bottom: solid 0 #e6e6e6;
}
.el-avatar {
  width: 40px;
  height: 40px;
  margin: 12px 0;
}

/* 主体区域 */
.el-main {
  margin-top: 45px;
}
.company,
.recruit {
  width: 77%;
  margin: auto;
  padding-top: 35px;
  border-bottom-width: 20px;
}
.com_intro_title,
.recruit_title {
  font-size: 32px;
  color: rgb(87, 93, 106);
  padding: 10px;
  margin: auto;
  width: 14%;
}
p.com_intro_first,
p.com_intro_second,
p.com_intro_third {
  font-size: 14px;
  text-indent: 2em;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 0 !important;
  line-height: 2;
}

.category {
  margin: 0px 32% 10px 32%;
  font-size: 20px;
}
.recruit_card {
  margin: 10px 0;
}
.recruit_card .el-button {
  margin: 0 35px;
}
/* 分割线 */
.el-divider {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  width: 85px;
  margin: 0px auto 20px auto;
}
</style>
