<template>
  <div class="card" style="width: 18rem">
    <img
      v-if="!isChill"
      height="300px"
      src="../assets/competitive.jpg"
      class="card-img-top"
      alt=""
    />
    <img
      v-if="isChill"
      height="300px"
      src="../assets/relax.jpg"
      class="card-img-top"
      alt=""
    />
    <div class="card-body">
      <h5 class="card-title">{{ party.name }}</h5>
      <p>members: {{ membersTotal }}/5</p>
      <p>schedule: {{ formatedDate }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <MemberList
        v-for="member in party.members"
        :key="member.id"
        :member="member"
      />
    </ul>
    <div class="card-body">
      <a @click.prevent="joinParty" href="" class="card-link"
        >request to join party</a
      >
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import moment from "moment";
import MemberList from "./Member.vue";
export default {
  name: "PartyCard",
  data() {
    return {
      isChill: false,
    };
  },
  components: {
    MemberList,
  },
  props: ["party"],
  computed: {
    membersTotal() {
      return this.party.members.length;
    },
    formatedDate() {
      return moment(String(this.party.schedule)).format("YYYY-MM-DD");
    },
  },
  methods: {
    joinParty() {
      this.$store
        .dispatch("requestParty", this.party.id)
        .then((data) => {
          console.log(data);
          Swal.fire({
            icon: "success",
            title:
              "Your request has been made, lets wait until party leader approve your request",
            showConfirmButton: false,
            timer: 3000,
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
  created() {
    if (this.party.mode === "chill") {
      this.isChill = true;
    } else {
      this.isChill = false;
    }
  },
};
</script>

<style scoped></style>
