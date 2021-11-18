<template>
  <div id="app">
    <router-view />
    <HFooter />
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "App",
  components: {
    HFooter,
  },
  created() {
    if (!localStorage) {
      this.$store.commit("SET_IS_LOGGED", false);
    } else {
      this.$store.commit("SET_IS_LOGGED", true);
    }
  },
};
</script>

<style></style>
