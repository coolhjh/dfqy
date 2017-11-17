<template>
  <div id="app">
    <m-header></m-header>
    <navBar></navBar>
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from "./components/m-header/m-header";
import navBar from "./components/navBar/navBar";
import MFooter from "./components/footer/footer";
export default {
  components: {
    MHeader,
    navBar,
    MFooter
  }
};
</script>

<style>
@import "./../static/base.css";
</style>
