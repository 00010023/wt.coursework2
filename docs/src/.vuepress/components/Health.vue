<template>
  <p class="demo">
    🎛 Host: {{ link }} <br />
    <template v-if="loading"> Loading... </template>
    <template v-else>{{ msg }} </template>
  </p>
</template>

<script>
import axios from "axios";
export default {
  props: {
    host: {
      type: String,
    },
  },
  data() {
    return {
      msg: null,
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
          if (res.status === 200) {
            this.loading = false;
            this.msg =
              "🟢 Status: All services are responsible and working // " +
              res.status;
          } else {
            this.loading = false;
            if (this.link.includes("localhost")) {
              this.msg =
                "🔴 Status: Not responding, did you start your server? // " +
                res.status;
            } else {
              this.msg =
                "🔴 Status: Error occurred while handling response, might be broken // " +
                res.status;
            }
          }
        })
        .catch((err) => {
          this.loading = false;
          if (this.link.includes("localhost")) {
            this.msg =
              "🔴 Status: Not responding, did you start local session? // " +
              err;
          } else {
            this.msg =
              "🔴 Status: Error occurred while handling response, might be broken // " +
              err;
          }
        });
    },
  },
};
</script>
