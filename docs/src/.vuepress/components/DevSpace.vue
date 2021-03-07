<template>
  <p class="demo">
    <template v-if="loading">Loading...</template>
    <template v-else>
      <template v-if="isLocal">
        <p>
          We detected that this app is running on localhost, so we will be
          showing you status of localhost apps.
        </p>
        <h3>Client side</h3>
        <Health host="http://localhost:3000"></Health>
        <h3>Server side</h3>
        <Health host="http://localhost:3001/api/v1/posts"></Health>
      </template>
      <template v-else>
        <p>
          We detected that this app is running on localhost, so we will be
          showing you status of localhost apps.
        </p>
        <h3>Client side</h3>
        <Health host="https://wt.genemator.me"></Health>
        <h3>Server side</h3>
        <Health host="https://srv.genemator.me/api/v1/posts"></Health>
      </template>
    </template>
  </p>
</template>

<script>
import Health from "./Health";
export default {
  name: "DevSpace",
  components: {
    Health,
  },
  data() {
    return {
      isLocal: null,
      loading: false,
    };
  },
  created() {
    this.getURL(location.host);
  },
  methods: {
    getURL(link) {
      this.loading = true;
      this.isLocal = !!link.includes("localhost");
      this.loading = false;
    },
  },
};
</script>

<style scoped></style>
