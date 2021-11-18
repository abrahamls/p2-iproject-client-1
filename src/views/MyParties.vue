<template>
  <div class="container-fluid mt-5 ms-5">
    <div class="row mt-4">
      <h1>Parties (as leader)</h1>
      <LeadPartyCard
        v-for="party in leadParties"
        :key="party.id"
        :party="party"
      />
    </div>
    <div class="row mt-4">
      <h1>Parties (as member)</h1>
    </div>
    <div class="row mt-4">
      <h1>Pending Party</h1>
    </div>
  </div>
</template>

<script>
import LeadPartyCard from "../components/LeadPartyCard.vue";
export default {
  name: "MyParties",
  components: {
    LeadPartyCard,
  },
  computed: {
    leadParties() {
      return this.$store.state.leadParties;
    },
    memberParties() {
      return this.$store.state.memberParties;
    },
    pendingParties() {
      return this.$store.state.pendingParties;
    },
  },
  created() {
    this.$store
      .dispatch("fetchLeadParty")
      .then(() => {
        console.log("fetch lead party success");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
    this.$store
      .dispatch("fetchMemberParty")
      .then(() => {
        console.log("fetch member party success");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
    this.$store
      .dispatch("fetchPendingParty")
      .then(() => {
        console.log("fetch pending party success");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  },
};
</script>

<style scoped>
h1 {
  color: #fbfbfb;
}
</style>
