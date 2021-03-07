<template>
  <p class="demo">
    <template v-if="isLocal">
      <p>
        We detected that this app is running on localhost, so we will be showing
        you status of localhost apps.
      </p>
      <h3>Client side</h3>
      <Health host="http://localhost:3000"></Health>
      <h3>Server side</h3>
      <Health host="http://localhost:3001/api/v1/posts"></Health>
    </template>
    <template v-else>
      <p>
        {{ domainName }} <br />
        We detected that this app is running on localhost, so we will be showing
        you status of localhost apps.
      </p>
      <h3>Client side</h3>
      <Health host="https://wt.genemator.me"></Health>
      <h3>Server side</h3>
      <Health host="https://srv.genemator.me/api/v1/posts"></Health>
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
      domainName: "",
    };
  },
  mounted() {
    this.getURL(window.location.host);
    this.domainName = window.location.host;
  },

  methods: {
    getURL(link) {
      this.isLocal = !!link.includes("localhost");
      this.domainName = location.host;
    },
  },
};
</script>

<style scoped></style>
