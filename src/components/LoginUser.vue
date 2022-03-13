<template>
  <div class="main">
    <img src="../assets/bank_logo.png" alt="" />
    <h1>Login</h1>
    <form @submit="submitHandler">
      <input
        v-model="username"
        type="text"
        placeholder="Enter Username"
        autofocus
      />
      <input v-model="password" type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginUser",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();

      let formData = {
        username: this.username,
        password: this.password,
      };
      if (formData.password.length >= 6 && formData.username.length > 0) {
        let serializedData = JSON.stringify(formData);
        localStorage.setItem("user-info", serializedData);
        this.$router.push({ name: "Dashboard" });
      } else {
        alert(
          "username cannot be blank and password must be equal or more than 6"
        );
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Dashboard" });
    }
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
}

img {
  width: 100px;
}

form input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
  outline: none;
}

button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}
</style>
