
<template>

  <input type="button" value="绑定">
  <LuckySheet :sheet-config='sheetConfig' />

</template>

<script setup>

import { ref, onMounted } from 'vue'
import LuckySheet from '../components/LuckySheet.vue'

let sheetData = [{
      "name": "Sheet1",
      color: "",
      "status": "1",
      "order": "0",
      "data": [],
      "config": {},
      "index": 0
    }]; //客户端sheet数据[sheet1, sheet2, sheet3]

// localStorage.sheetData;

const sheetConfig = ref({
  lang: 'zh',
  // cellRightClickConfig: {
  //   customs: [{
  //     title: 'test',
  //     onClick: function (clickEvent, event, params) {
  //       console.log('function test click', clickEvent, event, params)
  //     }
  //   }]
  // },
  data: sheetData,
});

</script>



<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>