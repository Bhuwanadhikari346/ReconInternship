<template>
  <Header :name="loggedInUser" />
  <Breadcrumb />
  <div class="btn-btn">
    <Button
      @model-show="showModelHandlerCredit"
      text="Add Credit"
      color="green"
      type="credit"
    />
    <Button
      @model-show="showModelHandlerDebit"
      text="Add Debit"
      color="red"
      type="debit"
    />
  </div>
  <Modal
    @model-toggle="showModelHandlerDebit"
    @model-toggle-credit="showModelHandlerCredit"
    :status="showModel"
    :handle="type"
    @form-added="updateTableData"
  />
  <TableData :key="componentKey" :name="loggedInUser" />
</template>

<script>
import Header from "./Header.vue";
import Breadcrumb from "./Breadcrumb.vue";
import Button from "./Button.vue";
import Modal from "./Modal.vue";
import TableData from "./TableData.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      loggedInUser: "",
      showModel: false,
      componentKey: 0,
      type: "",
    };
  },

  methods: {
    showModelHandlerDebit() {
      this.type = "debit";
      this.showModel = !this.showModel;
    },
    showModelHandlerCredit() {
      this.type = "credit";
      this.showModel = !this.showModel;
    },
    updateTableData() {
      this.componentKey += 1;
    },
  },
  components: {
    Header,
    Breadcrumb,
    Button,
    TableData,
    Modal,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    this.loggedInUser = JSON.parse(user).username;
    if (!user) {
      this.$router.push({ name: "LoginUser" });
    }
  },
};
</script>

<style scoped>
.btn-btn {
  display: flex;
  justify-content: center;
}
</style>
