<template>
  <div class="container-fluid login-page">
    <div class="login-box position-absolute top-50 start-50 translate-middle">
      <h1 class="text-center mb-5">LOGIN</h1>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Password</label
          >
          <input
            type="password"
            class="form-control"
            placeholder="e.g*****"
            v-model="password"
          />
        </div>
        <div class="d-grid gap-2 mt-5">
          <button class="btn submit-login" type="submit">Sign In</button>
        </div>
      </form>
      <div class="mt-4">
        <p>
          Dont have an account?
          <a href="" @click.prevent="toRegistration" class="link-primary"
            >sign up here</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("login", payload)
        .then(({ access_token }) => {
          Swal.fire({
            icon: "success",
            title: "login successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem("access_token", access_token);
          this.$router.push({ name: "Lobby" });
        })
        .catch((err) => {
          console.log(err.response.data.message);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },
    toRegistration() {
      this.$router.push("registration");
    },
  },
};
</script>

<style scoped>
.login-page {
  height: 100vh;
  background: rgba(0, 0, 0, 0.7) url("../assets/login-background.jpg");
  background-size: cover;
  background-blend-mode: darken;
}
.login-box {
  width: 500px;
  height: 700px;
  padding: 50px;
  color: #fbfbfb;
  background-color: rgba(139, 138, 169, 0.3);
}
.submit-login {
  background-color: #5f59f8;
  color: #fbfbfb;
}
</style>
