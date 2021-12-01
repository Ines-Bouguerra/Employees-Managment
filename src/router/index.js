import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Profile from "../views/Profile.vue";
import SignUp from "../views/auth/SignUp.vue";
import Login from "../views/auth/Login.vue";
import ForgotPassword from "../views/auth/ForgotPassword.vue";
import ResetPassword from "../views/auth/ResetPassword.vue";
import Country from "../views/system/Country.vue";
import State from "../views/system/State.vue";
import City from "../views/system/City.vue";
import Department from "../views/system/Department.vue";
import User from "../views/user/User.vue";
import Role from "../views/user/Role.vue";
import Permission from "../views/user/Permission.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUp,
    meta: {
      guest: true,
    },
  },
  {
    path: "/",
    name: "login",
    component: Login,
    meta: {
      guest: true,
    },
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/reset-password/:token",
    name: "resetPassword",
    component: ResetPassword,
  },
  {
    path: "/system/country",
    name: "country",
    component: Country,
  },
  {
    path: "/system/state",
    name: "state",
    component: State,
  },
  {
    path: "/system/city",
    name: "city",
    component: City,
  },
  {
    path: "/system/department",
    name: "department",
    component: Department,
  },
  {
    path: "/user",
    name: "user",
    component: User,
  },
  {
    path: "/user/role",
    name: "role",
    component: Role,
  },
  {
    path: "/user/permission",
    name: "permission",
    component: Permission,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
