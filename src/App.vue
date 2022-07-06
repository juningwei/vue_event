<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { registerAPI } from '@/api'
export default {
  async created () {
    const res = await registerAPI()
    console.log(res)
  }
}
</script>

<style lang="less" scoped>

</style>
