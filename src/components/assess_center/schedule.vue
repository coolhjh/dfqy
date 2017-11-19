<template>
 <div class="root">
    <div class="date">
      <!-- 年份 月份 -->
      <div class="thead">
        <div class="status">
          <span>可预约</span> <img src="./u1267.png" alt="">&nbsp;&nbsp;&nbsp;
          <span>已被预约</span> <img src="./u1281.png" alt="">&nbsp;&nbsp;&nbsp;
          <span>已完成</span> <img src="./u1289.png" alt="">
        </div>
        <div class="title">
          <p><span @click="weekPre"> < </span> 本周 <span @click="weekNext"> > </span></p>
          <div class="date_pick_box"  @mouseover="showCalendar" @mouseout="hideCalendar">
            <p v-text="datepick">
              <!-- 悬浮日历 -->
              <div class="date_pick_content" v-show="isShowCalendar" @click="isShowCalendar=false">
                 <datepicker @sendDate="reseDate"></datepicker>
              </div>
            </p>
          </div>
        </div>
        <div class="today"><p>今天</p></div>
      </div>
      <!-- 每周的周日到周六 -->
      <div class="days">
        <div class="first">全天</div>
        <div class="li" v-for="(day, index) in days" :key="index">
            <div>
               {{day.getMonth()+1}}-{{ day.getDate() }}&nbsp;&nbsp;{{ day.getDay()|getWeek}}
            </div>
        </div>
      </div>
      <div class="table">
        <!-- 每天的时间点 -->
        <ul class="timeList">
          <li><p>8:00</p></li>
          <li><p>9:00</p></li>
          <li><p>10:00</p></li>
          <li><p>11:00</p></li>
          <li><p>12:00</p></li>
          <li><p>13:00</p></li>
          <li><p>14:00</p></li>
          <li><p>15:00</p></li>
        </ul>
        <!-- 时间点对应的日程表格 -->
        <div class="list">
          <ul @click="showModal" v-for="(item,index) in timeList" :key = "index">
            <li v-for="(item2, index2) in days" :key = "index2" :data-clock="index" :data-date="index2">
              <p @click="setWork" class="ah"></p>
              <p @click="setWork" class="ph"></p>
          </li>
        </ul>
        </div>
      </div>
    </div>
      <!-- 模态框 -->
      <div class="modalbox" v-show="modal">
        <div class="modalContent">
          <p>设置可评估时间</p>
          <form action="">
            <select name="timeStart" id="">
              <option value="">设置开始时间</option>
              <option :value="hh" v-text="((hh*1+8)<10?'0'+(hh*1+8)+':00':(hh*1+8)+':00')">8:00</option>
              <option :value="hh" v-text="((hh*1+8)<10?'0'+(hh*1+8)+':30':(hh*1+8)+':30')">8:30</option>
            </select>
            <select name="timeEnd" id="">
              <option value="">设置结束时间</option>
              <option :value="hh" v-text="((hh*1+9)<10?'0'+(hh*1+9)+':00':(hh*1+9)+':00')">8:00</option>
              <option :value="hh" v-text="((hh*1+9)<10?'0'+(hh*1+9)+':30':(hh*1+9)+':00')">8:30</option>
            </select>
          </form>
          <div class="comfirm">
            <span>确定</span>
          </div>
          <div class="close" @click="close">
            <img src="./u1729.png" alt="">
          </div>
        </div>
      </div>
 </div>
</template>
<script>
import datepicker from "./datepicker";
export default {
  components: {
    datepicker
  },
  name: "date",
  data() {
    return {
      modal: false,
      currentYear: 1970, // 年份
      currentMonth: 1, // 月份
      currentDay: 1, // 日期
      currentWeek: 1, // 星期
      datepick: "",
      isShowCalendar: false,
      hh:0,
      days:[],
      timeList:[
        {"8-9":this.days},
        {"9-10":this.days},
        {"10-11":this.days},
        {"11-12":this.days},
        {"12-13":this.days},
        {"13-14":this.days},
        {"14-15":this.days}
      ]//每一周的周日到周六
    };
  },
  mounted() {},

  created() {
    this.initData(null);
    // this.getData();
  },

  methods: {
    formatDate(year, month, day) {
      const y = year;
      let m = month;
      if (m < 10) m = `0${m}`;
      let d = day;
      if (d < 10) d = `0${d}`;
      return `${y}-${m}-${d}`;
    },
    reseDate:function(arg){
      this.datepick = arg;
    },
    initData(cur) {
      let date = "";
      if (cur) {
        date = new Date(cur);
      } else {
        date = new Date();
      }
      this.currentDay = date.getDate(); // 今日日期 几号
      this.currentYear = date.getFullYear(); // 当前年份
      this.currentMonth = date.getMonth() + 1; // 当前月份
      this.currentWeek = date.getDay(); // 1...6,0   // 星期几
      if (this.currentWeek === 0) {
        this.currentWeek = 7;
      }
      const str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      ); // 今日日期 2017-11-09
      this.datepick = str;
      this.days.length = 0;
      // 今天是周日，放在第一行第7个位置，前面6个 这里默认显示一周，如果需要显示一个月，则第二个循环为 i<= 35- this.currentWeek
      /* eslint-disabled */
      for (let i = this.currentWeek; i >= 0; i -= 1) {
        const d = new Date(str);
        d.setDate(d.getDate() - i);
        //console.log("y:" + d.getDate());
        this.days.push(d);
      }
      for (let i = 1; i < 7 - this.currentWeek; i += 1) {
        const d = new Date(str);
        d.setDate(d.getDate() + i);
        this.days.push(d);
      }
    },
    //  上个星期
    weekPre() {
      const d = this.days[this.currentWeek]; // 如果当期日期是7号或者小于7号
      d.setDate(d.getDate() - 7);
      this.initData(d);
    },
    setWork(el){
      // console.log(el.currentTarget.className);//根据class判断具体哪半个小时ah/ph
      // console.log(el.currentTarget.parentNode.dataset);//根据clock判断是第几个小时,根据date判断是哪天
      var elInfo={
        date:el.currentTarget.parentNode.dataset.date,
        clock:el.currentTarget.parentNode.dataset.clock,
        ss:el.currentTarget.className,
      }
      console.log(elInfo);
      this.hh = elInfo.clock;
    },
    //  下个星期
    weekNext() {
      const d = this.days[this.currentWeek]; // 如果当期日期是7号或者小于7号
      d.setDate(d.getDate() + 7);
      this.initData(d);
    },
    // 弹出模态框
    showModal() {
      this.modal = true;
    },
    //关闭模态框
    close() {
      this.modal = false;
    },
    //显示小日历组件
    showCalendar() {
      this.isShowCalendar = true;
    },
    hideCalendar() {
      this.isShowCalendar = false;
    }
    //获取数据
    // getData: function() {
    //   this.$http
    //     .post("https://192.168.1.101:8089/appraiser/courseCenter/list", [
    //       {
    //         jsonrpc: "2.0",
    //         method: "call",
    //         params: {
    //           entity: "com.tocean.appraiser.entity.Schedule",
    //           pageNo: 1,
    //           size: 6,
    //           sort: "",
    //           domain: [
    //             [
    //               "appraiserId",
    //               "=",
    //               "201711151125F0053226817F4103860A92B5FCA43578"
    //             ]
    //           ]
    //         },
    //         id: 939510069
    //       }
    //     ])
    //     .then(
    //       response => {
    //         // 响应成功回调
    //         console.log("seccuss");
    //       },
    //       response => {
    //         // 响应错误回调
    //       }
    //     );
    // }
  },
  watch:{
    datepick(newvalue,oldvalue){
      this.initData(newvalue);
      this.isShowCalendar = false;
    }
  }
};
</script>
<style scoped>
.root {
  width: 100%;
  height: 100%;
}
.date {
  height: 716px;
  color: #333;
  width: 1200px;
  margin: 30px auto;
  border: 1px solid #999;
}
.thead {
  width: 100%;
  height: 80px;
  display: flex;
}
.status {
  flex: 1;
  height: 100%;
  line-height: 80px;
  padding-left: 15px;
  font-size: 12px;
}
.title {
  flex: 1;
  text-align: center;
  color: #5ba3a7;
  position: relative;
}
.title .date_pick_box {
  width: 250px;
  margin: 0 auto;
}
.title .date_pick_content {
  width: 258px;
  height: 250px;
  border: 1px solid #ccc;
  margin-left: -40px;
  /* position: absolute;
  bottom: -250px;
  left: 50%;
  transform: translateX(-50%); */
}
.title p:nth-child(1) {
  font-weight: bold;
  margin: 10px auto;
  width: 150px;
}
.today {
  flex: 1;
  text-align: right;
  padding-right: 10px;
  line-height: 80px;
  color: #5ba3a7;
}
.table {
  width: 100%;
  height: 577px;
  margin-top: 10px;
  overflow: auto;
  display: flex;
}
.timeList {
  width: 90px;
  margin-top: 10px;
}
.timeList li {
  position: relative;
  height: 91px;
}
.timeList li p {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}
.list {
  flex: 7;
  margin-top: 10px;
}
.list li {
  border: 1px solid rgb(230, 230, 230);
  width: 14.25%;
  float: left;
  cursor: pointer;
  height: 91px;
}
.list li p {
  width: 100%;
  height: 50%;
  text-align: center;
  vertical-align: middle;
}
.days {
  display: flex;
  padding-right: 20px;
}
.days .first {
  width: 90px;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  line-height: 40px;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid rgba(230, 230, 230, 1);
}
.days .li {
  flex: 1;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  line-height: 40px;
  background-color: rgba(250, 250, 250, 1);
  box-sizing: border-box;
  border: 1px solid rgba(230, 230, 230, 1);
}
/* 状态样式 */
.bookable {
  background-color: rgba(91, 163, 167, 1);
}
.booking {
  background-color: rgba(255, 126, 98, 1);
}
.bookCancle {
  background-color: rgba(102, 102, 102, 1);
}
/* 模态框 */
.modalbox {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: inherit;
  background-color: rgba(0, 0, 0, 0.3);
}
.modalContent {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 420px;
  height: 279px;
  background-color: #fff;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
.modalContent p {
  font-family: "微软雅黑";
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  color: #5ba3a7;
  line-height: 100px;
  text-align: center;
}
form {
  display: flex;
  justify-content: space-around;
}
select {
  width: 180px;
  height: 54px;
  border: 1px solid rgb(169, 169, 169);
  outline: none;
  color: #5ba3a7;
  font-size: 16px;
}
.close {
  width: 23px;
  height: 23px;
  position: absolute;
  top: 5px;
  right: 5px;
  color: #333;
}
.close img {
  display: block;
}
.comfirm {
  width: 120px;
  height: 30px;
  border-radius: 30px;
  line-height: 30px;
  text-align: center;
  background: url(./u1727.png) no-repeat center center;
  cursor: pointer;
  margin: 50px auto;
}
</style>


