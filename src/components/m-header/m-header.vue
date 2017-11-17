<template>
  <div class="m-header">
    <div class="center">
      <h1>LOGO</h1>
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">产品服务</a></li>
        <li><a href="#">专家团队</a></li>
        <li><a href="#">成功案例</a></li>
        <li><a href="#">关于我们</a></li>
      </ul>
      <div class="leave fr">
        <img src="./u636.png" alt="">
        <span>退出</span>
      </div>
       <div class="line fr"><img src="./u630.png" alt=""></div>
      <p class="welcome fr">Cindy你好，欢迎回到远程治疗平台 !</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "m-header",
  data() {
    return {};
  }
};
</script>

<style scoped>
.m-header {
  height: 50px;
}
.center {
  width: 1200px;
  height: 50px;
  margin: 0 auto;
}
.center h1 {
  float: left;
  height: 50px;
  width: 42px;
  line-height: 50px;
  font-size: 18px;
  font-weight: bold;
}
.center ul {
  float: left;
  margin-left: 20px;
}
.center ul li {
  float: left;

  padding: 0 10px;
}
.center ul li a {
  display: block;
  line-height: 50px;
  font-size: 12px;
  color: #999;
  text-decoration: none;
}
.welcome {
  font-size: 12px;
  line-height: 50px;
  color: #666;
}
.leave {
  color: #5ba3a7;
  line-height: 50px;
  cursor: pointer;
}
.line {
  margin: 10px 15px;
}
</style>
