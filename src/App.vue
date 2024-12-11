<template>
  <v-app>
    <v-app-bar :style="appBarStyle">
      <v-container class="d-flex align-center">
        <v-app-bar-title>番茄鐘</v-app-bar-title>
        <v-btn prepend-icon="mdi-home" to="/"> 首頁 </v-btn>
        <v-btn prepend-icon="mdi-format-list-bulleted" to="/list"> 事項 </v-btn>
        <v-btn prepend-icon="mdi-cog" to="/settings"> 設定 </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <img class="picture" src="https://picsum.photos/800/600/?random=5" />
      <!--
        slot = 插槽 = 自訂元件內的某部分 HTML
        v-slot="元件插槽提供的可用變數"
        Component = 目前路由應該顯示的元件
      -->
      <router-view v-slot="{ Component }">
        <!--
          keep-alive 包住的元件不會被銷毀
          include 指定保留的元件
          component = 動態元件
          is = 要使用的元件
        -->
        <keep-alive include="index">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
const appBarStyle = {
  backgroundColor: 'skyblue', // 設定背景顏色（番茄紅）
  backgroundSize: 'cover', // 背景圖片覆蓋整個區域
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center', // 背景圖片居中顯示
}
</script>

<style>
.picture {
  position: absolute;
  right: 0;
  height: 100vh;
}
</style>
