<template>
  <div class="cardBox">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="今天" name="first">
      <ul>
        <li>
          <div class="fl courseInfo">
            <span class="headImg"><img src="./u579.png" alt=""></span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="studentName">小明</span>
            <img src="./u6047.png" alt="" class="divideLine">
            <span class="courseTime">
              评估类型 : 新评估 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 评估时间：2017-11-11 14  : 00-15 : 00
            </span>
            <span class="courseStatus">进行中</span>
          </div>
          <div class="option fr">
            <span>进入评估室</span>
          </div>
        </li>
        <li></li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="明天" name="second">
      <ul>
        <li>
          <div class="fl courseInfo">
            <span class="headImg"><img src="./u579.png" alt=""></span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="studentName">小明</span>
            <img src="./u6047.png" alt="" class="divideLine">
            <span class="courseTime">
              评估类型 : 新评估 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 评估时间：2017-11-11 14  : 00-15 : 00
            </span>
            <span class="courseStatus">进行中</span>
          </div>
          <div class="option fr">
            <span>进入评估室</span>
          </div>
        </li>
        <li></li>
      </ul>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
export default {
  name: "card",
  data() {
    return {
      activeName2: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style>
.el-tabs--card > .el-tabs__header {
  border-bottom: none;
}
.el-tabs--card > .el-tabs__header .el-tabs__item {
  border-bottom: 1px solid #dfe4ed;
  color: #5ba3a7;
  width: 90px;
  text-align: center;
  background-color: rgba(250, 250, 250, 1);
}
.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border-top: 1px solid #5ba3a7;
  background-color: transparent;
}
.el-tabs__content {
  padding: 0 15px;
}
.cardBox ul {
  width: 100%;
  margin-bottom: 30px;
}
.cardBox ul li {
  width: 1160px;
  height: 90px;
  border-bottom: 1px solid #dfe4ed;
  background-color: rgba(253, 253, 253, 1);
  line-height: 90px;
  position: relative;
}
.headImg {
  margin-left: 22px;
}
.cardBox .courseInfo .headImg img {
  height: 60px;
  width: 60px;
}
.studentName {
  color: #666;
  font-size: 14px;
}
.divideLine {
  margin: 0 42px;
}
.courseInfo {
  font-size: 16px;
  color: #999999;
}
.courseStatus {
  font-family: "微软雅黑 Regular", "微软雅黑";
  color: #ff7e62;
  font-size: 16px;
  font-weight: 800;
  margin-left: 50px;
}
.option span {
  display: block;
  width: 94px;
  height: 30px;
  background: url(./u3568.png) no-repeat center center;
  line-height: 30px;
  text-align: center;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  border-radius: 30px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
.option span:hover {
  background-image: url(./u3568_mouseOver.png);
}
</style>
