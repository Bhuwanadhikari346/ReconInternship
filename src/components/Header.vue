<template>
  <nav>
    <h5>MY BANK</h5>
    <h4>->&nbsp;Logout</h4>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav > h5 {
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #42b983;
  color: #fff;
  padding: 10px 15px;
}
</style>
