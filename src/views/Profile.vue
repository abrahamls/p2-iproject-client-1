<template>
  <div class="d-flex ms-5 flex-column page-title">
    <div class="text-uppercase text-center">
      <h1 class="slogan">
        find the best team <br />
        <span>maximize you performance</span>
      </h1>
    </div>
    <div class="mt-5 mb-3">
      <label for="">select your role</label>
    </div>
    <div class="d-flex justify-content-around role-container">
      <div class="role-card me-2">
        <a href="" @click.prevent="addRole(1)"
          ><img src="../assets/midlaner.png" alt="" />Midlaner</a
        >
      </div>
      <div class="role-card me-2">
        <a @click.prevent="addRole(2)" href=""
          ><img src="../assets/carry.png" alt="" />Carry</a
        >
      </div>
      <div class="role-card me-2">
        <a @click.prevent="addRole(3)" href=""
          ><img src="../assets/offlaner.png" alt="" />Offlaner</a
        >
      </div>
      <div class="role-card me-2">
        <a @click.prevent="addRole(4)" href=""
          ><img src="../assets/support.png" alt="" />Support</a
        >
      </div>
      <div class="role-card me-2">
        <a @click.prevent="addRole(5)" href=""
          ><img src="../assets/hard-support.png" alt="" />Hard Support</a
        >
      </div>
    </div>
    <div class="mt-5 mb-3">
      <label for="">select your rank</label>
    </div>
    <div class="d-flex justify-content-around rank-container">
      <div class="d-flex flex-column">
        <a @click.prevent="updateRank('herald')" href=""
          ><img src="../assets/herald.png" alt=""
        /></a>
        <p class="ms-5">Herald</p>
      </div>
      <div class="d-flex flex-column">
        <a @click.prevent="updateRank('guardian')" href=""
          ><img src="../assets/guardian.png" alt=""
        /></a>
        <p class="ms-5">Guardian</p>
      </div>
      <div class="d-flex flex-column">
        <a @click.prevent="updateRank('crusader')" href=""
          ><img src="../assets/crusader.png" alt=""
        /></a>
        <p class="ms-5">Crusader</p>
      </div>
      <div class="d-flex flex-column">
        <a @click.prevent="updateRank('archon')" href=""
          ><img src="../assets/archon.png" alt=""
        /></a>
        <p class="ms-5">Archon</p>
      </div>
      <div class="d-flex flex-column">
        <a @click.prevent="updateRank('legend')" href=""
          ><img src="../assets/legend.png" alt=""
        /></a>
        <p class="ms-5">Legend</p>
      </div>
      <div class="d-flex flex-column">
        <a @click.prevent="updateRank('ancient')" href=""
          ><img src="../assets/ancient.png" alt=""
        /></a>
        <p class="ms-5">Ancient</p>
      </div>
      <div class="d-flex flex-column">
        <a @click.prevent="updateRank('divine')" href=""
          ><img src="../assets/divine.png" alt=""
        /></a>
        <p class="ms-5">Divine</p>
      </div>
      <div class="d-flex flex-column">
        <a @click.prevent="updateRank('immortal')" href=""
          ><img src="../assets/immortal.png" alt=""
        /></a>
        <p class="ms-5">Immortal</p>
      </div>
    </div>
    <div class="container-fluid">My Profile</div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Profile",
  methods: {
    addRole(num) {
      this.$store
        .dispatch("addRole", num)
        .then((data) => {
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Role added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },
    updateRank(rank) {
      this.$store
        .dispatch("updateRank", rank)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Rank has been updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Lobster&display=swap");
div {
  color: #fbfbfb;
  font-family: "Anton", sans-serif;
}
.slogan {
  font-size: 60px;
}
.slogan span {
  color: #a2181a;
}
.page-title {
  margin-top: 90px;
}
.role-card {
  width: auto;
  height: 170px;
  background-color: #121212;
}
.role-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
a {
  text-decoration: none;
  color: #a2181a;
}
.role-container {
  width: 80%;
}
.rank-container {
  width: 80%;
}
</style>
