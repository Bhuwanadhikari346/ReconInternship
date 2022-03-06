<script>
import Buttons from "./Buttons.vue";
export default {
  name: "TotalBalance",
  components: {
    Buttons,
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div>
        <div class="balance">
          <span><b>Balance</b></span>
          <p>0 NPR</p>
        </div>
      </div>
      <div class="btn-container">
        <div>
          <Buttons text="Add Debit" color="red" />
        </div>
        <div>
          <Buttons text="Add Credit" color="green" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 800px;
  margin: 70px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
}
.balance {
  background: #ffff;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 4px solid orange;
}
.balance span {
  position: absolute;
  top: 0;
  left: 0;
  background: orange;
  color: #fff;
  font-size: 12px;
  padding: 5px;
}

p {
  font-size: 20px;
}
.btn-container {
  display: inline;
}
</style>
