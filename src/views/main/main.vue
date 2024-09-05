<template>
  <div>main</div>
</template>
<script lang="ts" setup>
import axios from 'axios'
axios.post('/api/users/login/').then((res) => {
  console.log(res)
})
</script>
<style lang="scss" scoped></style>
