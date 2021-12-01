<template  v-if= "currentUser">
  <v-navigation-drawer v-if="currentUser" v-model="drawer" app>
    <v-img
      src="https://png.pngtree.com/thumb_back/fh260/background/20200604/pngtree-technology-bicolor-french-flag-around-white-background-image_337892.jpg"
      class="pa-4"
    >
      <div class="text-center mt-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img aspect-ratio="30" :src="currentUser.image" class=""> </v-img>
        </v-avatar>
        <h4 class="info--text">Employees Management</h4>
      </div>
    </v-img>

    <v-divider> </v-divider>
    <v-card class="mx-auto" width="300">
      <v-list>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-microsoft-windows</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title><router-link to="/dashboard">Dashboard</router-link></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title><router-link to="/profile">Profile</router-link></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
        </v-list>
        <v-list-group no-action group>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>System</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item>
            <router-link to="/system/country" >
              <v-list-item-title>Country</v-list-item-title></router-link
            >
          </v-list-item>
          <v-list-item>
            <router-link to="/system/state">
              <v-list-item-title>State</v-list-item-title></router-link
            >
          </v-list-item>
          <v-list-item>
            <router-link to="/system/city">
              <v-list-item-title>City</v-list-item-title></router-link
            ></v-list-item
          >
          <v-list-item>
            <router-link to="/system/department">
              <v-list-item-title>Department</v-list-item-title></router-link
            ></v-list-item
          >
        </v-list-group>

        <v-list-group no-action group>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>User</v-list-item-title>
            </v-list-item-content>
          </template>

           <v-list-item>
            <router-link to="/user">
              <v-list-item-title>User</v-list-item-title></router-link
            ></v-list-item
          >
           <v-list-item>
            <router-link to="/user/role">
              <v-list-item-title>role</v-list-item-title></router-link
            ></v-list-item
          >
           <v-list-item>
            <router-link to="/user/permission">
              <v-list-item-title>Permission</v-list-item-title></router-link
            ></v-list-item
          >
        </v-list-group>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
     
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>

<style></style>
