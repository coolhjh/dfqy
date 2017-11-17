<template>
   <div>
     <!-- 中部倒计时栏 -->
      <div class="tips">
        <div class="timeLeft fl">
          <img src="../../../static/img/u10805.png" alt="">
          <span>倒计时 00:40:00</span>     
        </div>
        <div class="plan fr">
          <a href="#">本节计划</a>
        </div>
    </div>
    <!-- 视频播放区域 -->
    <div class="videoBox clearfix">
      <div class="left fl">
        <video src="" height="666" width="888" class="video"></video>
        <!-- 播放控制 -->
        <div class="control">
         
        </div>
      </div>
      <!-- 右侧视频列表 -->
      <div class="rightTop fr">
        <div class="head">
          <img src="../../../static/img/u12463.png" alt="">
          <span>视频</span>
        </div>
        <!-- 搜索 -->
        <div class="search">
          <input type="text">
          <a href="#"></a>
        </div>
        <!-- 列表 -->
        <ul class="videoList">
          <li class="clearfix">
            <div class="listLeft fl">
              <a href="#"><img src="../../../static/img/u12372.jpg" alt=""></a>
              <!-- 播放按钮开始 -->
              <a class="btn" href="#">
                <img class="btn1" src="../../../static/img/u12368.png" alt="">
                <img class="btn2" src="../../../static/img/u12370.png" alt="">
              </a>
              <!-- 按钮结束 -->
            </div>
            <div class="listRight fr">
              <p>视频标题</p>
              <p>视频简介</p>
            </div>
           </li>
          <li class="clearfix">
            <div class="listLeft fl">
              <a href="#"><img src="../../../static/img/u12372.jpg" alt=""></a>
              <a class="btn" href="#">
                <img class="btn1" src="../../../static/img/u12368.png" alt="">
                <img class="btn2" src="../../../static/img/u12370.png" alt="">
              </a>
            </div>
            <div class="listRight fr">
              <p>视频标题</p>
              <p>视频简介</p>
            </div>
           </li>
          <li class="clearfix">
            <div class="listLeft fl">
              <a href="#"><img src="../../../static/img/u12372.jpg" alt=""></a>
              <a class="btn" href="#">
                <img class="btn1" src="../../../static/img/u12368.png" alt="">
                <img class="btn2" src="../../../static/img/u12370.png" alt="">
              </a>
            </div>
            <div class="listRight fr">
              <p>视频标题</p>
              <p>视频简介</p>
            </div>
           </li>
           <li class="clearfix">
            <div class="listLeft fl">
              <a href="#"><img src="../../../static/img/u12372.jpg" alt=""></a>
              <a class="btn" href="#">
                <img class="btn1" src="../../../static/img/u12368.png" alt="">
                <img class="btn2" src="../../../static/img/u12370.png" alt="">
              </a>
            </div>
            <div class="listRight fr">
              <p>视频标题</p>
              <p>视频简介</p>
            </div>
           </li>
           <li class="clearfix">
            <div class="listLeft fl">
              <a href="#"><img src="../../../static/img/u12372.jpg" alt=""></a>
              <a class="btn" href="#">
                <img class="btn1" src="../../../static/img/u12368.png" alt="">
                <img class="btn2" src="../../../static/img/u12370.png" alt="">
              </a>
            </div>
            <div class="listRight fr">
              <p>视频标题</p>
              <p>视频简介</p>
            </div>
           </li>
           <li class="clearfix">
            <div class="listLeft fl">
              <a href="#"><img src="../../../static/img/u12372.jpg" alt=""></a>
              <a class="btn" href="#">
                <img class="btn1" src="../../../static/img/u12368.png" alt="">
                <img class="btn2" src="../../../static/img/u12370.png" alt="">
              </a>
            </div>
            <div class="listRight fr">
              <p>视频标题</p>
              <p>视频简介</p>
            </div>
           </li>
        </ul>
      </div>
      <div class="rightBottom fr">
        <img src="../../../static/img/u10848.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "player",
  data() {
    return {};
  }
};
</script>
<style scoped>
/* 中部倒计时栏 */
.tips {
  width: 1200px;
  margin: 0 auto;
  height: 60px;
}
.timeLeft span {
  display: inline-block;
  padding-left: 6px;
  font-size: 14px;
  color: #5ba3a7;
  text-align: left;
  line-height: 60px;
}
.plan {
  width: 90px;
  height: 30px;
  background: url("../../../static/img/u11343.png") no-repeat center center;
  margin-top: 15px;
}
.plan a {
  color: #fff;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 30px;
  text-decoration: none;
}
/* 视频播放区域 */
.videoBox {
  width: 1200px;
  margin: 0 auto;
}
.rightTop {
  width: 302px;
  height: 430px;
  box-sizing: border-box;
  border: 1px solid rgba(91, 163, 167, 1);
}
.rightBottom {
  width: 302px;
  height: 226px;
  background-color: #123;
  margin-top: 10px;
}
.videoBox .left {
  position: relative;
  overflow: hidden;
}
/* 播放控制 */
.videoBox .control {
  position: absolute;
  left: 0;
  bottom: -40px;
  height: 40px;
  width: 100%;
  background: url(../../../static/img/u11929.png) no-repeat center center;
  opacity: 0.5;
}
.left:hover .control {
  bottom: 0;
}
/* 右侧视频列表标题 */
.rightTop {
  overflow: hidden;
}
.rightTop .head {
  width: 300px;
  height: 40px;
  background-color: rgba(91, 163, 167, 1);
  text-align: center;
  line-height: 40px;
}
.rightTop img {
  display: inline-block;
  width: 24px;
  height: 13px;
}
.rightTop span {
  font-size: 14px;
  color: #fff;
  margin-left: 5px;
}
/* 搜索栏 */
.search {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  position: relative;
}
.search input {
  width: 282px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid rgba(91, 163, 167, 1);
}
.search a {
  width: 20px;
  height: 20px;
  background: url(../../../static/img/u12469.png);
  position: absolute;
  right: 18px;
  top: 6px;
}
/* 列表 */
.videoList {
  height: 100%;
  overflow: auto;
  padding: 0 10px;
  margin-top: 10px;
}
.videoList li {
  margin-bottom: 15px;
  display: flex;
}
.videoList .listLeft {
  position: relative;
  width: 104px;
  height: 78px;
}
.videoList .listLeft img {
  display: block;
  width: 100%;
  height: 100%;
}
.listLeft p {
  font-size: 14px;
}
.listRight {
  flex: 1;
  margin-left: 5px;
}
.listRight p:nth-child(1) {
  color: #666;
  font-size: 14px;
}
.listRight p:nth-child(2) {
  color: #999;
  font-size: 12px;
}
/* 播放按钮 */
.btn {
  display: block;
  width: 29px;
  height: 29px;
  position: absolute;
  left: 40px;
  top: 25px;
  margin: 0;
}
.btn img {
  position: absolute;
  top: 0;
  left: 0;
}
.btn img.btn1 {
  opacity: 0.7;
}
.btn img.btn2 {
  left: 10px;
  top: 8px;
}
.btn img.btn2 {
  width: 10px;
  height: 11px;
  transform: rotate(90deg);
}
/* 右下单视频预览 */
.rightBottom {
  width: 302px;
  height: 226px;
}
.rightBottom img {
  /* display: block; */
  width: 100%;
  height: 100%;
}
</style>

