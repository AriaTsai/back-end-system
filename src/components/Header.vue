<template>
  <section>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true">
      <el-menu-item index="home"><img src="@/assets/img/panda.png" alt="" width="50"></el-menu-item>
      <el-menu-item index="home">HOME</el-menu-item>
      <el-menu-item index="orders">ORDERS</el-menu-item>
      <el-menu-item index="product">PRODUCT</el-menu-item>
      <el-menu-item index="space">space</el-menu-item>
      <el-menu-item index="admin"><a href="javascript:;" target="_blank">ADMIN</a></el-menu-item>
    </el-menu>
  </section>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>

</style>
