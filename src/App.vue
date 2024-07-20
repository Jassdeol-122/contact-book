<template>
  <router-view class="main-content"></router-view>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* General Styles */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  color: #333;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.main-content {
  padding: 20px;
}
</style>
