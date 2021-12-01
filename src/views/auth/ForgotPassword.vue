<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Forgot Password</v-toolbar-title>
            </v-toolbar>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="forgotPassword"
            >
              <v-card-text>
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  type="email"
                  required
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" class="mr-4" @click="forgotPassword"
                  >Submit</v-btn
                >
              </v-card-actions>
              <!-- <v-alert dense text type="success">
                I'm a dense alert with the <strong>text</strong> prop and a
                <strong>type</strong> of success
              </v-alert> -->
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
      name: "forgotPassword",
      email: "",
    };
  },
  methods: {
    forgotPassword() {
      this.$http
        .post("forgot-password", { email: this.email })
        .then((response) => {
          alert("success");
          return response;
        });
    },
  },
};
</script>

<style>
</style>