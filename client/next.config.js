module.exports = {
  async redirects() {
    return [
      {
        source: "/add",
        destination: "/new",
        permanent: false,
      },
      {
        source: "/edit",
        destination: "/posts",
        permanent: false,
      },
    ];
  },
};
