<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Sign Up</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="signup"
              >
                <v-text-field
                  v-model="username"
                  :rules="userNameRules"
                  label="Username"
                  type="text"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="first_name"
                  :rules="firstNameRules"
                  label="First Name"
                  type="text"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="last_name"
                  :rules="lastNameRules"
                  label="Last Name"
                  type="text"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  type="email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password_confirmation"
                  :rules="passwordConfirmationRules"
                  label="Password Confirm"
                  type="password"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" class="mr-4" @click="signup">Create Account</v-btn>
            </v-card-actions>
            <v-card-text >
               <v-spacer></v-spacer>
               <v-span align-center justify-center>Already have an account? </v-span>
               <router-link to='/'>Login</router-link>
            </v-card-text>
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
      name: "sign-up",
      valid: true,
      username: "",
      userNameRules: [(v) => !!v || "Username is required"],
      first_name: "",
      firstNameRules: [(v) => !!v || "First Name is required"],
      last_name: "",
      lastNameRules: [(v) => !!v || "Last Name is required"],
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

      password_confirmation: "",
      passwordConfirmationRules: [
        (v) => !!v || "Password confirmation is required",
      ],
    };
  },
  methods: {
    async signup() {
      this.$refs.form.validate();
      await this.$http.post('register', {
        username: this.username,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      });
      this.$router.push('/');
    },
  },
};
</script>

<style></style>
