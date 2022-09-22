<template>
  <du-button @click="onClick(1)">第一个</du-button>
  <du-button @click="onClick(2)">第二个</du-button>
  <du-button @click="onClick(3)">第三个</du-button>
</template>

<script setup>

const onClick = (num) => { console.log(`我是第 ${num} 个自定义按钮`) }
</script>

<style scoped>

</style>