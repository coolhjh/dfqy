<template>
  <div class="assess_list_box">
    <div id="assess_list">
      <card></card>
    </div>
    <div class="pagenation">
      <pagination></pagination>  
</div>
    </div>
  </div>
</template>
<script>
import card from "./card";
import pagination from "./pagination";
export default {
  components: {
    card,
    pagination
  },
  name: "assess_list"
};
</script>
<style>
.assess_list_box #assess_list {
  width: 1200px;
  margin: 30px auto;
  border: 1px solid rgba(242, 242, 242, 1);
}
</style>

