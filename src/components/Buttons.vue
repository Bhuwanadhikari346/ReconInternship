<template>
  <div class="container">
    <div>
      <button :style="{ background: color }" class="btn">
        <b>{{ text }}</b>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  props: {
    text: String,
    color: String,
  },
};
</script>

<style scoped>
.btn {
  width: 200px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: green;
  color: #fff;
  padding: 10px 15px;
  cursor: pointer;
  outline: none;
}
</style>
