<template>
  <v-app id="inspire">
    <Sidebar :drawer="drawer"  />
    <Header @handleDrawer="drawer = !drawer"  />

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view ></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
export default {
  name: "App",
  components: { Header, Sidebar },
  data: () => ({
    drawer: true,
  }),
  async created() {
    const response = await this.$http.get("currentUser", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    this.$store.dispatch('currentUser',response.data.data);
  },
};
</script>
