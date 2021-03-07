<template>
  <p class="demo">
    <template v-if="loading">⚡️ Downloading tree map... </template>
    <template v-else>
      <pre>{{ tree }}</pre>
    </template>
  </p>
</template>

<script>
import axios from "axios";
export default {
  name: "Tree",
  data() {
    return {
      tree: null,
      loading: false,
      link: "/tree.txt",
    };
  },
  created() {
    this.getStatus(this.link);
  },
  methods: {
    getStatus(link) {
      this.loading = true;
      axios
        .get(link, {
          timeout: 3000,
        })
        .then((res) => {
          this.loading = false;
          this.tree = res.data;
        })
        .catch((err) => {
          this.loading = false;
          this.tree = "⚠️ Error occurred while downloading tree map!";
        });
    },
  },
};
</script>
