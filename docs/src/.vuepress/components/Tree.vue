<template>
  <p class="demo">
    🎛 Host: <a :href="link" target="_blank">{{ link }}</a> <br />
    <template v-if="loading">⚡️ Downloading the tree... </template>
    <template v-else>{{ msg }} </template>
  </p>
</template>

<script>
import axios from "axios";
export default {
  name: "Tree",
  props: {
    host: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tree: null,
      loading: false,
      link: this.host,
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
          res.data;
        })
        .catch((err) => {
          this.loading = false;
          this.tree = "⚠️ Error occurred while downloading tree map!";
        });
    },
  },
};
</script>
