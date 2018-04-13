<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
        </el-header>
        <el-main>
          <el-input
            style="200px"
            type="textarea"
            :autosize="{ minRows: 10 }"
            placeholder="Please input"
            v-model="input">
          </el-input>
          <div style="padding: 10px;" />
          <el-row>
            <el-button type="primary" v-on:click="read">読み上げ</el-button>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    },
    methods: {
      read: function (event) {
        const ss = new SpeechSynthesisUtterance(this.input)
        ss.lang = 'en-EN'
        speechSynthesis.speak(ss)
      }
    }
  };
</script>