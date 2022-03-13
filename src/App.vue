<template>
  <router-view />
</template>

<script>
import LoginUser from "./components/LoginUser.vue";
export default {
  name: "App",
  components: {
    LoginUser,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #fafafa;
}
</style>
