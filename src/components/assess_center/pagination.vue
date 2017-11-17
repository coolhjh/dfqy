<template>
  <div id="pagination_box">
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="prev, pager, next"
        :total="1000"
        prev-text="上一页"
        next-text="下一页">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "pagination",
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  }
};
</script>
<style>
#pagination_box .block {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}
#pagination_box .el-pager li {
  padding: 0;
  width: 32px;
  height: 32px;
  color: #333;
  min-width: 32px;
  font-weight: normal;
  line-height: 32px;
  border: 1px solid rgba(228, 228, 228, 1);
}
#pagination_box .el-pager li:hover {
  color: rgba(242, 242, 242, 1);
  background-color: rgba(91, 163, 167, 1);
}
#pagination_box .el-pager li.active {
  background-color: rgba(91, 163, 167, 1);
  color: rgba(242, 242, 242, 1);
}
#pagination_box .el-pagination button {
  padding: 0;
  width: 65px;
  height: 32px;
}
#pagination_box .el-pagination button span {
  display: block;
  width: 65px;
  height: 32px;
  line-height: 32px;
  border: 1px solid rgba(228, 228, 228, 1);
}
#pagination_box .el-pagination button:not([class*="disabled"]):hover {
  background-color: rgba(91, 163, 167, 1);
  color: rgba(242, 242, 242, 1);
}
</style>
