const { title, description, homepage } = require("../../package");

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
    repo: homepage,
    repoLabel: "Repo!",
    editLinks: false,
    docsDir: "src",
    docsRepo: "00010023/wt.coursework2",
    editLinkText: "Contribute it!",
    lastUpdated: true,
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "About",
        link: "/about/",
      },
      {
        text: "Setup",
        link: "/setup/",
      },
      {
        text: "Health",
        items: [
          {
            text: "Cloud",
            link: "/health/cloud",
          },
          {
            text: "Local",
            link: "/health/local",
          },
          {
            text: "Structure",
            link: "/health/struct",
          },
        ],
      },
      {
        text: "Links",
        items: [
          {
            text: "Cloud",
            items: [
              {
                text: "Client",
                link: "https://wt.genemator.me",
                target: "_blank",
              },
              {
                text: "Server",
                link: "https://srv.genemator.me" + "/api/v1/posts",
                target: "_blank",
              },
            ],
          },
          {
            text: "Local",
            items: [
              {
                text: "Client",
                link: "http://localhost:3000",
                target: "_blank",
              },
              {
                text: "Server",
                link: "http://localhost:3001" + "/api/v1/posts",
                target: "_blank",
              },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/about/": [
        {
          title: "The Coursework",
          collapsable: false,
          children: ["", "docs", "tree"],
        },
      ],
      "/setup/": [
        {
          title: "Setup",
          collapsable: false,
          children: ["", "client", "server"],
        },
      ],
    },
  },
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    [
      "one-click-copy",
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ],
        copyMessage:
          "Congrats Mr.Noob... You have successfully copied the command!",
        duration: 3000,
        showInMobile: false,
      },
    ],
  ],
  evergreen: true,
};
