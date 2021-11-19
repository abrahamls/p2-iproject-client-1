<template>
  <div class="form-box position-absolute top-50 start-50 translate-middle">
    <h1 class="text-center mb-5">Create Party</h1>
    <form @submit.prevent="createParty">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="enter your party name"
          v-model="name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Mode</label>
        <select
          v-model="mode"
          class="form-select"
          aria-label="Default select example"
        >
          <option value="" disabled selected>Select Mode</option>
          <option value="chill">Normal</option>
          <option value="ranked">Ranked</option>
        </select>
        <div class="mt-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Schedule</label
          >
          <input
            type="datetime-local"
            class="form-control"
            v-model="schedule"
          />
        </div>
      </div>
      <div class="d-grid gap-2 mt-5">
        <button class="btn submit-party" type="submit">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "PartyForm",
  data() {
    return {
      name: "",
      mode: "",
      schedule: "",
    };
  },
  methods: {
    createParty() {
      // const gapi = window.gapi;
      // const CLIENT_ID =
      //   "110800290100-b7mvrvl086knl4b99qh65lqq6i2qj81n.apps.googleusercontent.com";
      // const API_KEY = "AIzaSyCNFOCJMOlSogxHsvCqK2eGyqtQh0kpAac";
      // const DISCOVERY_DOCS = [
      //   "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
      // ];
      // const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
      const payload = {
        name: this.name,
        mode: this.mode,
        schedule: this.schedule,
      };
      this.$store
        .dispatch("createParty", payload)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Your new party has been made",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$router.push("/");
          return this.$store.dispatch("fetchParties");
        })
        .then(() => {
          console.log("fetch parties after create party success");
          // gapi.load("client:auth2", () => {
          //   console.log("loaded client");
          //   gapi.client.init({
          //     apiKey: API_KEY,
          //     clientId: CLIENT_ID,
          //     discoveryDocs: DISCOVERY_DOCS,
          //     scope: SCOPES,
          //   });
          //   gapi.client.load("calendar", "v3", () => console.log("bam!"));
          //   gapi.auth.getAuthInstance().signIn();
          // });
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
  },
};
</script>

<style scoped>
.form-box {
  width: 500px;
  /* height: 700px; */
  padding: 50px;
  color: #fbfbfb;
  background-color: rgba(139, 138, 169, 0.3);
}
.submit-party {
  background-color: #5f59f8;
  color: #fbfbfb;
}
</style>
