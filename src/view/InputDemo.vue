
<template>

  <input type="button" value="绑定">
  <rowFillMenu ref="rowFillMenuRef" :ls-doc-instance='fillDocInstance'/>
  <LuckySheet :sheet-config='_sheetConfig' />

</template>

<script setup lang="ts">
//---------> import
import {ref} from 'vue'
import LuckySheet from '../components/LuckySheet.vue';
import {FillModelConfigger} from "./sheetDefaultConfig/fillModelConfigger";
import designModelSheetDefaultConfig from "./sheetDefaultConfig/designConfigger";

import rowFillMenu from './sheetDefaultConfig/rowFillMenu.vue';
//<--------- import


//---------> ref
// 行填报菜单组件应用
const rowFillMenuRef = ref<any>(null);
//<--------- ref

/**
 * 显示行填报菜单
 * @param x 要显示的x坐标位置
 * @param y 要显示的y坐标位置
 */
const rowFillMenuShow = function (x: number, y: number) {
  rowFillMenuRef.value.show(x, y);
}

/**
 * 隐藏行填报菜单
 */
const rowFillMenuHidden = function (): void {
  rowFillMenuRef.value.hidden();
}

/**
 * 显示行填报菜单
 */
const getRowFillMenuWithAxis = function () {
  return rowFillMenuRef.value.getRowFillAxis();
}

const getRowFillMenuIsShow = function () {
  return rowFillMenuRef.value.isShow();
}


// 当前工作簿模式
const workModel = localStorage.getItem('model') ? localStorage.getItem('model') : 'designModel';


// 获取当前工作簿配置
let fillDocInstance = ref<FillModelConfigger>();
if (workModel === 'fillModel') { // 填报模式
  let fillConfig = {
    rowFillMenuShow: rowFillMenuShow,
    rowFillMenuHidden: rowFillMenuHidden,
    getRowFillMenuWithAxis: getRowFillMenuWithAxis,
    getRowFillMenuIsShow: getRowFillMenuIsShow,
  }
  fillDocInstance.value = new FillModelConfigger(fillConfig);
} else {  //设计模式
  fillDocInstance.value = designModelSheetDefaultConfig.init();
}
const _sheetConfig = ref(fillDocInstance.value.docConfigJson);  // 表格_luckySheet配置信息_变量


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