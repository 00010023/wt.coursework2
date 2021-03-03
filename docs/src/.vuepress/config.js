const { title, description, repository } = require("../../package");

module.exports = {
  theme: "yuu",
  title: title,
  description: description,

  head: [
    ["meta", { name: "theme-color", content: "#000000" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  port: 3002,
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
      disableThemeIgnore: true,
    },
    logo: "https://genemator.me/favicon.png",
    searchPlaceholder: "Search...",
    smoothScroll: true,
    repo: repository,
    repoLabel: "Contribute!",
    editLinks: true,
    docsDir: "src",
    docsRepo: "genestatic/genedocs",
    editLinkText: "Contribute it!",
    lastUpdated: true,
    nav: [
      {
        text: "Home",
        link: "https://genemator.me",
      },
      {
        text: "Assistant",
        link: "https://t.me/genemator_bot",
      },
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Config",
        link: "/config/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "using-vue"],
        },
      ],
    },
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
