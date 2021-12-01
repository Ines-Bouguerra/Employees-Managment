<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
       
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
         <error v-if="error" :error="error" />
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="login"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              type="text"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              type="password"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" class="mr-4" @click="login">Login</v-btn>
        </v-card-actions>
        <v-card-text>
          <v-span align-center justify-center>Forgot your password? </v-span>
          <router-link to="/forgot-password">Reset your password</router-link>
          <v-spacer></v-spacer>
          <v-span align-center justify-center>Don't have an account? </v-span>
          <router-link to="/sign-up">Sign Up</router-link>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import Error from "../../components/Error";
export default {
  name: "login",
  components: {
    Error,
  },
  data() {
    return {
      valid: true,
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) || "Password must be more than 6 characters",
      ],
      error:''
    };
  },
  methods: {
    async login() {
      try {
        this.$refs.form.validate();
        const response = await this.$http.post("login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.data.token);
        this.$store.dispatch("currentUser", response.data.data.user);
        this.$router.push("/dashboard");
      } catch (error) {
        this.error = "Credentials not match";
      }
    },
  },
};
</script>

<style></style>
