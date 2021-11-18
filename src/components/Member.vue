<template>
  <li class="list-group-item">
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
</template>

<script>
export default {
  name: "MemberList",
  data() {
    return {
      rankUrl: "../assets/guardian.png",
    };
  },
  props: ["member"],
  // created() {
  //   this.rankUrl = `../assets/${this.member.rank}/png`;
  // },
};
</script>

<style></style>
