<template>
  <div class="navBar">
    <div class="header">
      <div class="header-in">
        <div class="userHead fl">
          <a class="img fl">
            <div></div>
            <span>Beo</span>
          </a>
          <div class="icon fl">
            <div class="glod">0</div>
            <div class="star">0</div>
          </div>
        </div>
        <div class="nav fl">
          <b-nav>
            <b-nav-item active>视频模式</b-nav-item>
            <b-nav-item>白板模式</b-nav-item>
            <b-nav-item>游戏模式</b-nav-item>
            <b-nav-item>屏幕共享</b-nav-item>
            <b-nav-item>双视屏白板</b-nav-item>
            <b-nav-item>表格调用</b-nav-item>
          </b-nav>
        </div>
        <ul class="exit fr">
          <li class="fr leave">
            <img src="../../../static/img/u10915.png" alt="">
            <span>离开评估室</span>
            </li>
          <li class="fr line">|</li>
          <li class="fr msg">
            <ul>
              <li class="fl">消息</li>
              <li class="fl line">|</li>
              <li class="fl">奖励</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "navBar",
  data() {
    return {};
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 72px;
  background-color: rgba(91, 163, 167, 1);
}

.header-in {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}

.header-in > div {
  height: 100%;
}

.userHead {
  width: 183px;
}

ul.nav li a {
  height: 100%;
  line-height: 72px;
  padding: 0 12px;
  color: #fff;
  font-size: 22px;
}

.exit {
  width: 280px;
  height: 100%;
}

.exit > li {
  padding-left: 30px;
  color: #fff;
  font-size: 18px;
  line-height: 72px;
}

.exit > .line {
  font-size: 30px;
}

.exit > .leave {
  font-size: 16px;
}

.msg .line {
  padding: 0 15px;
  font-size: 16px;
}

.exit .msg {
  padding-left: 0;
}

.userHead .img {
  width: 42px;
  height: 42px;
  display: block;
}

.userHead .img div {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-top: 4px;
}

.userHead .img span {
  display: block;
  width: 100%;
  text-align: center;
  color: #fff;
}

.icon {
  width: 40px;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0 16px 0;
  margin-left: 40px;
  color: #fff;
}

.icon div {
  height: 50%;
  width: 100%;
  padding-left: 24px;
}

.glod {
  background: url("../../../static/img/glod.png") no-repeat left center;
}

.star {
  background: url("../../../static/img/star.png") no-repeat left center;
}
</style>