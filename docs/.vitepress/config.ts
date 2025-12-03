import { withMermaid } from "vitepress-plugin-mermaid";
import type { DefaultTheme } from "vitepress";

const themeConfig: DefaultTheme.Config = {
  logo: "/Image/Author.png",
  outline: { label: "NavigationBar", level: [1, 10] },
  socialLinks: [
    { icon: "github", link: "https://github.com/ZZHENJIE" },
    { icon: "bilibili", link: "https://space.bilibili.com/1362205077" },
  ],
  search: { provider: "local" },
};

export default withMermaid({
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  title: "JieBook",
  lastUpdated: true,
  base: "/JieBook/",

  mermaid: {
    theme: "default",
  },
  mermaidPlugin: {},

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
