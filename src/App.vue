<script>
import Header from "./components/Header.vue";
import Model from "./components/Model.vue";
import TotalBalance from "./components/TotalBalance.vue";

export default {
  components: {
    Header,
    Model,
    TotalBalance,
  },
};
</script>

<template>
  <Header />
  <!-- <Model /> -->
  <TotalBalance />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #fafafa;
  /* font-family: sans-serif; */
}
</style>
