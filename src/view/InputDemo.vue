
<template>

  <input type="button" value="绑定">
  <LuckySheet :sheet-config='sheetConfig' />

</template>

<script setup>

import {ref} from 'vue'
import LuckySheet from '../components/LuckySheet.vue'
import {luckysheet as LuckyExcel} from "../core";

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

// 表格_luckySheet配置信息_变量
const sheetConfig = ref({
  lang: 'zh',
  hook: {
    rangeSelect: function (index, sheet) {
      console.info(index)
      console.info(sheet)
    },
  },
  cellRightClickConfig : {
    customs: [{
      title: '保存',
      onClick: function (clickEvent, event, params) {
        console.log(LuckyExcel.getAllSheets())
        let saveInfo = JSON.stringify(LuckyExcel.getAllSheets());  //将JSON转为字符串存到变量里
        localStorage.setItem("sheetSave",saveInfo);//将变量存到localStorage里
      }
    },{
      title: '设置为填报单元格',
      onClick: function (clickEvent, event, params) {
        console.log(LuckyExcel.getAllSheets())
        setupFileCells(clickEvent, event, params);
      }
    },{
      title: localStorage.getItem('model') === 'fillModel'? '切换到设计模式' : '切换到填报模式',
      onClick: function (clickEvent, event, params) {
        localStorage.setItem("model",localStorage.getItem("model") === "fillModel"? "designModel" : "fillModel");//将变量存到localStorage里
        location.reload();
      }
    }]
  },
  data: function () {
    if (localStorage.getItem("sheetSave")){
      return JSON.parse(localStorage.getItem("sheetSave"));
    }
  }(),
});

// 表格_填报配置信息_变量
const fillConfig = {
  fillAreaList :[],   // 填报区域列表

};

let setupFileCells = function (clickEvent, event, params) {
  console.log(params.columnIndex,params.rowIndex);

  // config.authority
}

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