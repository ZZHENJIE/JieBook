import { DefaultTheme, defineConfig, UserConfig } from "vitepress";

const defaultConfig: UserConfig = {
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  title: "JieBook",
};

const defaultThemeConfig: DefaultTheme.Config = {
  outline: {
    label: "NavigationBar",
    level: [1, 10],
  },
  socialLinks: [
    { icon: "github", link: "https://github.com/ZZHENJIE" },
    { icon: "bilibili", link: "https://space.bilibili.com/1362205077" },
  ],
  search: { provider: "local" },
};

export default defineConfig({
  lastUpdated: true,
  locales: {
    root: {
      label: "简体中文",
      lang: "zh",
      ...defaultConfig,
      themeConfig: {
        nav: [
          { text: "文章", link: "/Article/" },
          { text: "文档", link: "/Document/" },
          { text: "笔记", link: "/Notes/" },
        ],
        ...defaultThemeConfig,
      },
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      ...defaultConfig,
      themeConfig: {
        nav: [
          { text: "Article", link: "/en/Article/" },
          { text: "Document", link: "/en/Document/" },
          { text: "Notes", link: "/en/Notes/" },
        ],
        ...defaultThemeConfig,
      },
    },
  },
});
