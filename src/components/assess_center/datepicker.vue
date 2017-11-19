<template>
  <div id="calendar">
    <div class="month">
      <ul>
        <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
        <li class="year-month" @click="pickYear(currentYear,currentMonth)">
          <span class="choose-year">{{ currentYear }}</span>
          <span class="choose-month">{{ currentMonth }}月</span>
        </li>
        <li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
      </ul>
    </div>
    <ul class="weekdays">
      <li>日</li>
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
    </ul>
    <ul class="days" v-for="(value,index1) in daysUL":key="index1">
      <li @click="pick(day,index+index1*7)" v-for="(day,index) in value" :key="index">
        <!--今天-->
        <span v-if="day.getMonth()+1 != currentMonth" class="other-month">{{ day.getDate() }}</span>
        <span v-else>
          <!--今天-->
          <span v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class="active">{{ day.getDate() }}</span>
          <span v-else>{{ day.getDate() }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "datepicker",
  data() {
    return {
      currentYear: 1970, // 年份
      currentMonth: 1, // 月份
      currentDay: 1, // 日期
      currentWeek: 1, // 星期
      firstWeek: 1,
      days: [],
      daysUL: [], //每个月的日期列表
      choseDate:''
    };
  },
  created: function() {
    this.initData(null);
  },
  methods: {
    initData(cur) {
      let date = "";
      if (cur) {
        date = new Date(cur);
      } else {
        date = new Date();
      }
      this.currentDay = date.getDate(); // 今日几号
      this.currentYear = date.getFullYear(); // 当前年份
      this.currentMonth = date.getMonth() + 1; // 当前月份
      this.currentWeek = date.getDay(); // 1...6,0   // 今天是星期几

      //当前月的第一天是星期几
      date.setDate(1);
      this.firstWeek = date.getDay();

      // if (this.firstWeek === 0) {
      //   this.firstWeek = 7;
      // }
      const str = this.formatDate(this.currentYear, this.currentMonth, 1); // 今日日期 年-月-日
      this.days.length = 0;

      // 今天是周日，放在第一行第7个位置，前面6个 这里默认显示一周，如果需要显示一个月，则第二个循环为 i<= 42- this.firstWeek
      for (let i = this.firstWeek; i >= 0; i--) {
        const d = new Date(str);
        // console.log(d.getDay());
        var temp_d = d.getDay();
        d.setDate(d.getDate() - i);
        this.days.push(d);
         if (temp_d == 0) {
          break;
        }
      }
      //console.log(this.days);
      //处理1号是星期天为 7 的情况， 为7天就直接放在daysUL里
      if (this.days.length === 7 ) {
        this.daysUL.push(this.days);
        this.days = [];
      }
      console.log(this.daysUL);
      console.log("---------------------");
      let daysCount =
        this.firstWeek +
        new Date(this.currentYear, this.currentMonth, 0).getDate();
      daysCount = daysCount > 35 ? 42 : 35;
      for (let i = 1; i <= daysCount - this.firstWeek; i++) {
        const d = new Date(str);
        d.setDate(d.getDate() + i);
        this.days.push(d); //一个 days 就是一行7天  daysUL 就是个数组，里面有六个days  就是六行42天
        if (this.days.length % 7 === 0) {
          this.daysUL.push(this.days);
          this.days = []; //清空重新存放天数
        }
      }
    },
    pick: function(date) {
      this.choseDate = this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
      this.$emit("sendDate",this.choseDate);
    },
    pickPre: function(year, month) {
      // setDate(0); 上月最后一天
      // setDate(-1); 上月倒数第二天
      // setDate(dx) 参数dx为 上月最后一天的前后dx天
      this.daysUL = [];
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(0);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    pickNext: function(year, month) {
      this.daysUL = [];
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(35);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    pickYear: function(year, month) {
      alert(year + "," + month);
    },

    // 返回 类似 2016-01-02 格式的字符串
    formatDate: function(year, month, day) {
      var y = year;
      var m = month;
      if (m < 10) m = "0" + m;
      var d = day;
      if (d < 10) d = "0" + d;
      return y + "-" + m + "-" + d;
    }
  }
};
</script>
<style scoped>
@import "./datepicker.css";
</style>
