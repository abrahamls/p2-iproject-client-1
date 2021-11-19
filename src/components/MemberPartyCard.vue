<template>
  <div class="card border-primary my-3 ms-2 me-5" style="max-width: 18rem">
    <div class="card-header">{{ party.MemberParties.mode }}</div>
    <div class="card-body text-primary">
      <h5 class="card-title">{{ party.MemberParties.name }}</h5>
      <p class="card-text">
        schedule:
        {{ party.MemberParties.schedule | moment("d MMMM YYYY, h:mm:ss a") }}
      </p>
      <h6><strong>members</strong></h6>
      <ul class="list-group">
        <li
          v-for="member in members"
          :key="member.id"
          class="list-group-item d-flex"
        >
          {{ member.name }}
          <img
            v-if="member.rank === 'herald'"
            width="30"
            src="../assets/herald.png"
            alt=""
          />
          <img
            v-if="member.rank === 'guardian'"
            width="30"
            src="../assets/guardian.png"
            alt=""
          />
          <img
            v-if="member.rank === 'crusader'"
            width="30"
            src="../assets/crusader.png"
            alt=""
          />
          <img
            v-if="member.rank === 'archon'"
            width="30"
            src="../assets/archon.png"
            alt=""
          />
          <img
            v-if="member.rank === 'legend'"
            width="30"
            src="../assets/legend.png"
            alt=""
          />
          <img
            v-if="member.rank === 'ancient'"
            width="30"
            src="../assets/ancient.png"
            alt=""
          />
          <img
            v-if="member.rank === 'divine'"
            width="30"
            src="../assets/divine.png"
            alt=""
          />
          <img
            v-if="member.rank === 'immortal'"
            width="30"
            src="../assets/immortal.png"
            alt=""
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberPartyCard",
  data() {
    return {
      members: [],
    };
  },
  props: ["party"],
  created() {
    this.$store
      .dispatch("fecthPartyMembers", this.party.PartyId)
      .then((data) => {
        console.log(data);
        this.members = data;
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  },
};
</script>

<style scoped>
* {
  color: #fbfbfb;
}
.card {
  background-color: #293b5f;
}
.card-body {
  background-color: #47597e;
}
.list-group-item {
  background-color: #b2ab8c;
}
li {
  color: #000000;
}
</style>
