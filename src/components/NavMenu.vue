<template>
  <el-menu>
    <el-submenu index="1">
    <template slot="title"><i class="el-icon-menu"></i>メニュー</template>
      <router-link to="/text_reader">
        <el-menu-item index="1-1">音声読み上げ</el-menu-item>
      </router-link>
      <router-link to="/">
        <el-menu-item index="1-2">音声入力</el-menu-item>
      </router-link>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>