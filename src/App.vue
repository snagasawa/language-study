<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-header style="text-align: right; font-size: 12px">
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <nav-menu></nav-menu>
        </el-aside>
        <router-view/>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";
import NavMenu from "@/components/NavMenu";

export default {
  name: "App",
  components: {
    "nav-menu": NavMenu
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
