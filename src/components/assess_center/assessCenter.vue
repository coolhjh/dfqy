<template>
  <div class="box">
    <div class="center">
      <div class="task">
        <span>当前任务</span>
      </div>
      <div class="taskBox">
        <div class="scheduleSet fl">
          <div class="border fl"></div>
          <div class="text fl">
            <p>1. 设置日程排班表</p>
            <p><span>·</span> <span>日程排班，随时随地安排评估。</span></p>
          </div>
          <div class="optBtN fr">
            <router-link tag="a" to="/schedule">
              <span>立即完善</span>
            </router-link>
          </div> 
        </div>
        <div class="checkM fr">
          <div class="border fl"></div>
            <div class="text fl">
              <p>2. 在线教室检测</p>
              <p><span>·</span> <span>检测一下电脑和网络，保障宝贝正常评估。</span></p>
            </div>
          <div class="optBtN fr">
            <!-- 待更改路由链接 -->
            <router-link tag="a" to="/">
              <span>立即检测</span>
            </router-link>
          </div> 
        </div>
      </div>
      <div class="arrangement">
        <img src="./u3583.png" alt="">
        <span>评估安排</span>
        <span>待总结：<span class="summaNum">1</span></span>
        <span>待评估：<span class="assessNum">3</span> &nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
      <div class="card">
        <card></card>
      </div>
    </div>
  </div>
</template>
<script>
import card from "./card";
export default {
  components: {
    card: card
  },
  name: "assessCenter"
};
</script>
<style scoped>
.box {
  margin-top: 30px;
}
.center {
  width: 1200px;
  margin: 0 auto;
}
.taskBox {
  height: 100px;
  margin-top: 15px;
}
.task {
  height: 30px;
  /* width: 1200px;
  margin: 0 auto; */
  background: url(./u3583.png) no-repeat left center;
  padding-left: 38px;
  line-height: 30px;
}
.box .task span {
  font-size: 20px;
  color: rgb(91, 163, 167);
}
.scheduleSet,
.checkM {
  width: 590px;
  height: 100px;
  box-shadow: rgba(200, 200, 200, 0.35) 0px 1px 4px;
}
.scheduleSet .border,
.checkM .border {
  width: 10px;
  height: 100%;
  background-color: rgba(255, 126, 98, 1);
}
.scheduleSet .text,
.checkM .text {
  height: 100%;
  margin-left: 10px;
}
.text p:nth-child(1) {
  color: rgb(91, 163, 167);
  font-size: 18px;
  margin-top: 20px;
}
.text p span:nth-child(1) {
  color: #5ba3a7;
  font-size: 14px;
  font-weight: 800;
  margin-left: 5px;
}
.text p span:nth-child(2) {
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
}
.optBtN {
  width: 94px;
  height: 30px;
  background: url(./u3568.png) no-repeat center center;
  margin: 33px 20px 0 0;
}
.optBtN:hover {
  background-image: url(./u3568_mouseOver.png);
}
.optBtN span {
  display: block;
  width: 94px;
  height: 30px;
  text-decoration: none;
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 30px;
}
.arrangement {
  height: 90px;
  line-height: 90px;
}
.arrangement span:nth-child(2) {
  font-size: 22px;
  color: #5ba3a7;
}
.arrangement img {
  display: inline-block;
  margin: -8px 5px 0 0;
}
.arrangement span:nth-child(3),
.arrangement span:nth-child(4) {
  float: right;
  color: #666;
  font-size: 14px;
}
.summaNum,
.assessNum {
  color: #ff7e62;
}
.box .card {
  border: 1px solid rgba(242, 242, 242, 1);
}
</style>


