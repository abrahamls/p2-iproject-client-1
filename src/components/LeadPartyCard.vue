<template>
  <div class="card border-primary my-3 ms-2 me-5" style="max-width: 18rem">
    <div class="card-header">{{ party.mode }}</div>
    <div class="card-body text-primary">
      <h5 class="card-title">{{ party.name }}</h5>
      <p class="card-text">
        schedule: {{ party.schedule | moment("d MMMM YYYY, h:mm:ss a") }}
      </p>
      <h6><strong>pending members:</strong></h6>
      <ul class="list-group">
        <PendingMemberList
          @reFetchMember="fetchMember"
          v-for="member in pendingMembers"
          :key="member.id"
          :member="member"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import PendingMemberList from "./PendingMemberList.vue";
export default {
  name: "LeadPartyCard",
  data() {
    return {
      pendingMembers: [],
    };
  },
  components: {
    PendingMemberList,
  },
  props: ["party"],
  methods: {
    fetchMember() {
      this.$store
        .dispatch("fetchPendingMembers", this.party.id)
        .then((data) => {
          this.pendingMembers = data;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },
  created() {
    this.fetchMember();
  },
};
</script>

<style scoped>
* {
  color: #fbfbfb;
}
a {
  text-decoration: none;
}
.card-body {
  background-color: #3e2c41;
}
.card {
  background-color: #5c527f;
}
</style>
