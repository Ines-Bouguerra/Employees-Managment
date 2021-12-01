<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Reset Password</v-toolbar-title>
            </v-toolbar>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="resetPassword"
            >
              <v-card-text>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password_confirmation"
                  label="Password Confirm"
                  type="password"
                  required
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" class="mr-4" @click="resetPassword">Reset Password</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      name: "resetPassword",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    async resetPassword() {
      const response = await this.$http.post("reset-password", {
        password: this.password,
        password_confirmation: this.password_confirmation,
        token: this.$route.params.token
      });
      console.log("Reset Password", response);
      this.$route.push('/')
    },
  },
};
</script>

<style>
</style>