<template v-if= "currentUser">
  <v-app-bar v-if= "currentUser" app color="white" elevate-on-scroll evaluation="3">
    <v-app-bar-nav-icon @click="$emit('handleDrawer')"></v-app-bar-nav-icon>
    <v-spacer />
    <v-col lg="6" cols="12">
      <v-form>
        <v-text-field
          class="p-0 m-0 mt-6"
          full-width
          dense
          append-icon="mdi-magnify"
          outlined
          rounded
          placeholder="Search"
        />
      </v-form>
    </v-col>
    <v-spacer />

    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span
          class="mx-5 mr-10"
          style="cursor: pointer"
          v-bind="attrs"
          v-on="on"
        >
          <v-badge content="3" color="red" offset-y="10" offset-x="10">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </span>
      </template>
      <v-list three-line width="250">
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span style="cursor: pointer" v-bind="attrs" v-on="on">
          <v-chip link>
            <v-badge dot bottom color="green" offset-y="10" offset-x="10">
              <v-avatar size="40">
                <v-img
                  :src=currentUser.image
                />
              </v-avatar>
            </v-badge>
            <span class="ml-3"
              >{{ currentUser.first_name }} {{ currentUser.last_name }}</span
            >
          </v-chip>
        </span>
      </template>
      <v-list width="250" class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img
              :src=currentUser.image
              alt=""
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              >{{ currentUser.first_name }}
              {{ currentUser.last_name }}</v-list-item-title
            >
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-icon>
            <v-icon> mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <router-link to="/profile">Profile </router-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon> mdi-key</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <router-link to="/change-password">Change Password </router-link>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon> mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <a href="javascript::void(0)" @click="logout">Logout </a>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
      ],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("currentUser", null);
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>

<style scoped></style>