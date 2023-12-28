<template>
  <div ref="thisMenuDivRef" v-show="_isShow" class="fillsys-rowfill-menu">
    <span><a href='#' @click="_addRow">添加行</a></span>
    <span><a href='#'>删除行</a></span>
    <span><a href='#'>重置行</a></span>
  </div>
</template>

<style scoped>
.fillsys-rowfill-menu {
  max-height: 100%;
  overflow-y: auto;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  -webkit-transition: opacity 0.218s;
  -moz-transition: opacity 0.218s;
  -o-transition: opacity 0.218s;
  transition: opacity 0.218s;
  background: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: default;
  font-size: 13px;
  margin: 0;
  outline: none;
  padding: 6px 0;
  position: absolute;
  z-index: 1004;
  box-sizing: border-box;
  user-select: none;
  display: block;

  text-align: justify-all;
  vertical-align: center;
  height: 40px;
  width: 150px;


  top: v-bind('_position.top');
  left: v-bind('_position.left');
}
</style>

<script setup lang="ts">

// -----> import
import { ref, reactive, defineExpose } from 'vue'
import {FillModelConfigger} from "./fillModelConfigger";
// <----- import

// -----> props
const props = defineProps({
  lsDocInstance: {
    required: true, // 是否必传
    type: FillModelConfigger, // 类型
    default: {} // 默认值
  },
})
// <----- props

// -----> ref
const thisMenuDivRef = ref<any>(null)
// <----- ref

// ----->
const _isShow = ref(false);
const _position = reactive({
  top: '0px',
  left: '0px',
});
// <-----

const _addRow = function (){
  console.log('gogogog')
  props.lsDocInstance.addFillRow();
}

/**
 * 显示行填报菜单
 * @param x
 * @param y
 * @param rowFillAxis
 */
const show = function (x: number, y: number) {

  // 1. 如果菜单已经显示，则不做处理
  if (_isShow.value) {
    return;
  }

  // 2. 计算菜单位置，并显示
  let winH = document.documentElement.clientHeight,
      winW = document.documentElement.clientWidth;
  let menuW = thisMenuDivRef.value.offestWidth ,
      menuH = thisMenuDivRef.value.offsetHeight ;
  let top = y,
      left = x;

  if (x + menuW > winW) {
    left = x - menuW;
  }

  if (y + menuH > winH) {
    top = y - menuH;
  }

  if (top < 0) {
    top = 0;
  }
  console.log('top:',top)
  console.log('left:',left)

  _position.top = `${top}px`;
  _position.left = `${left}px`;
  _isShow.value = true;
}

/**
 * 隐藏菜单
 */
const hidden = function (){
  if (!_isShow.value) return;
  _isShow.value = false;
}

/**
 * 是否显示
 */
const isShow = function (){
  return _isShow.value;
}

defineExpose({
  show,
  hidden,
  isShow
});

</script>
