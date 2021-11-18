<template>
  <li class="list-group-item d-flex justify-content-between">
    <p>
      {{ member.Users.name }}
    </p>
    <a href="" @click.prevent="acceptMember"
      ><span class="badge rounded-pill bg-primary">accept</span></a
    >
  </li>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "PendingMemberList",
  props: ["member"],
  methods: {
    acceptMember() {
      const payload = {
        UserId: this.member.UserId,
        PartyId: this.member.PartyId,
      };
      this.$store
        .dispatch("acceptMember", payload)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: `${this.member.Users.name} has been accepted!`,
            showConfirmButton: false,
            timer: 1500,
          });
          this.$emit("reFetchMember");
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },
};
</script>

<style scoped>
* {
  background-color: #261c2c;
}
</style>
