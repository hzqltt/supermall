<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar.vue';
export default {
  name: 'app',
  components: {
    MainTabBar

  }
}

</script>

<style>
@import "./assets/css/normalize.css";
@import "./assets/css/base.css";
</style>
