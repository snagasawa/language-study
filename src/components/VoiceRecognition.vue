<template>
  <el-container>
    <el-main>
      <el-input
        style="200px"
        type="textarea"
        :autosize="{ minRows: 10 }"
        placeholder="Please input"
        :disabled=true
        v-model="input"
      >
      </el-input>
      <div style="padding: 10px;" />
      <el-row>
        <el-button type="primary" v-on:click="input_start">音声入力開始</el-button>
      </el-row>
    </el-main>
  </el-container>
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
      input_start: (event) => {
        window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'ja';

        recognition.addEventListener('start', () => {
          console.log('start')
        });

        recognition.onresult = (e) => {
          console.info(`recognition result : ${e.results[0][0].transcript}`);
 
      		this.input = e.results[0][0].transcript;
      		recognition.stop();
        };

        recognition.start();
        /*

        onresult = (event) => {
          const results = event.results;
          // DEBUG
          console.log('results');
          console.log(results);
          for (var i = event.resultIndex; i < results.length; i++) {
            document.getElementById('result_text').innerHTML = results[i][0].transcript;
          }
        }
        */
      }
    }
  };
</script>