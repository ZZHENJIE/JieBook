import type { DefaultTheme } from "vitepress";
import { defineConfig } from "vitepress";

const themeConfig: DefaultTheme.Config = {
  logo: "/Image/Author.png",
  outline: { label: "NavigationBar", level: [1, 10] },
  socialLinks: [
    { icon: "github", link: "https://github.com/ZZHENJIE" },
    { icon: "bilibili", link: "https://space.bilibili.com/1362205077" },
  ],
};

export default defineConfig({
  title: "JieBook",
  head: [["link", { rel: "icon", href: "/JieBook/favicon.png" }]],
  lastUpdated: true,
  base: "/JieBook/",
  themeConfig: {
    search: { provider: "local" },
  },

  locales: {
    root: {
      label: "简体中文",
      lang: "zh",
      themeConfig: {
        ...themeConfig,
        nav: [
          { text: "文章", link: "/Article/" },
          { text: "文档", link: "/Document/" },
          { text: "笔记", link: "/Notes/" },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      themeConfig: {
        ...themeConfig,
        nav: [
          { text: "Article", link: "/en/Article/" },
          { text: "Document", link: "/en/Document/" },
          { text: "Notes", link: "/en/Notes/" },
        ],
      },
    },
  },
});
