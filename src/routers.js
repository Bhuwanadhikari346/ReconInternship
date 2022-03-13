import Dashboard from "./components/Dashboard.vue";
import LoginUser from "./components/LoginUser.vue";
import TableDetails from "./components/TableDetails.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "LoginUser",
    component: LoginUser,
    path: "/",
  },
  {
    name: "Dashboard",
    component: Dashboard,
    path: "/dashboard",
  },
  {
    name: "TableDetails",
    component: TableDetails,
    path: "/details",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
