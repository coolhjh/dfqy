<template>
  <div id="navBox">
    <div class="center">
      <router-link to="/">
        <div class="home"><img src="./个人中心_u792.png" alt=""></div>
      </router-link>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect">
        <router-link to="/assess_list">
          <el-menu-item index="2">评估任务单</el-menu-item>
        </router-link>
        <router-link to="/mystudent">
          <el-menu-item index="3">我的学员</el-menu-item>
        </router-link>
        <router-link to="/schedule">
          <el-menu-item index="4">日程管理</el-menu-item>
        </router-link>
        <router-link to="/workaccount">
          <el-menu-item index="5">工作统计</el-menu-item>
        </router-link>
        <router-link to="management">
          <el-menu-item index="6">账号管理</el-menu-item>
        </router-link>
    </el-menu>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
#navBox {
  width: 100%;
  height: 72px;
  background-color: rgb(91, 163, 167);
}
#navBox .center {
  width: 1200px;
  height: 72px;
  margin: 0 auto;
  position: relative;
}
#navBox .home {
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 12px;
  cursor: pointer;
  padding: 10px 20px 10px 0;
}
#navBox .el-menu--horizontal {
  border: none;
  width: 1160px;
  height: 72px;
  display: inline-block;
  margin-left: 55px;
  background-color: rgb(91, 163, 167);
}
#navBox .el-menu--horizontal .el-menu-item {
  height: 72px;
  line-height: 72px;
  font-family: "微软雅黑";
  font-weight: 410;
  font-style: normal;
  font-size: 22px;
  color: #ffffff;
}
#navBox .el-menu--horizontal .el-menu-item:hover {
  opacity: 0.8;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(91, 163, 167, 1);
}
#navBox .el-menu-item.is-active {
  border: none;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(91, 163, 167, 1);
  opacity: 0.8;
}
</style>
