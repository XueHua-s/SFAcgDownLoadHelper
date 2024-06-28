<template>
  <div
    :style="{
      width: props.size + 'px',
      height: props.size + 'px',
      top: position.top + 'px',
      left: position.left + 'px'
    }"
    class="sf-gril-drag-button"
    @mousedown="startDrag"
  >
    <img
      draggable="false"
      :style="{
        width: props.size + 'px',
        height: props.size + 'px'
      }"
      src="http://rs.sfacg.com/web/novel/images/images/emotion/SFGirl/002.png"
      alt=""
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  size: {
    default: 80,
    type: Number
  }
})

const position = ref({ top: 20, left: window.innerWidth - 48 - props.size })

let isDragging = false
let startX = 0
let startY = 0

const startDrag = (event) => {
  isDragging = true
  startX = event.clientX - position.value.left
  startY = event.clientY - position.value.top
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
}

const onDrag = (event) => {
  if (isDragging) {
    let newLeft = event.clientX - startX
    let newTop = event.clientY - startY

    // 边界检查
    if (newLeft < 0) newLeft = 0
    if (newTop < 0) newTop = 0
    if (newLeft > window.innerWidth - props.size)
      newLeft = window.innerWidth - props.size
    if (newTop > window.innerHeight - props.size)
      newTop = window.innerHeight - props.size

    position.value.left = newLeft
    position.value.top = newTop
  }
}

const stopDrag = () => {
  isDragging = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
}

onMounted(() => {
  // 初始化位置
  position.value.left = window.innerWidth - 48 - props.size
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
})
</script>

<style lang="scss" scoped>
.sf-gril-drag-button {
  cursor: pointer;
  position: fixed;
  background-color: #fff;
  z-index: 8000;
  border: 3px solid #e29464;
  overflow: hidden;
  border-radius: 50%;
  user-select: none;
}
</style>
