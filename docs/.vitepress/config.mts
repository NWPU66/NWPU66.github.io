import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // site-level options
  title: "NWPU66",
  description: "Welcome to my personal blog.",

  base: "", //NOTE - 如果要部署在https://nwpu66.github.io/something/，则base为something/

  markdown: {
    math: true,
  },

  // theme-level options
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    //LOGO
    logo: "/pic/muzimi.jpg",

    //上方导航栏
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Blogs",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
      {
        text: "Projects",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],

    //侧边栏
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          {
            collapsed: true,
            text: "TGapi文档",
            items: [
              { text: "TGapi登陆注册", link: "/item-a" },
              { text: "Item B", link: "/item-b" },
            ],
          },
          {
            text: "TGapi文档",
            items: [
              { text: "TGapi登陆注册", link: "/item-a" },
              { text: "Item B", link: "/item-b" },
            ],
          },
        ],
      },
    ],

    //社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/NWPU66" },
      { icon: "twitter", link: "..." },
    ],

    //页尾的版权信息
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present NWPU66",
    },

    //添加“最后更新”信息
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    //搜索功能
    search: {
      provider: "local",
      options: {
        /**
         * @param {string} src
         * @param {import('vitepress').MarkdownEnv} env
         * @param {import('markdown-it')} md
         */
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.search === false) return "";
          if (env.relativePath.startsWith("some/path")) return "";
          return html;
        },
      },
    },
  },
});
