import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  base: '/ZCabin',
  lastUpdated: true,
  title: "ZCabin",
  srcDir: '../src/',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/'
    }
  },
  themeConfig: {
    outline: {
      label: 'NavigationBar',
      level: [1, 10]
    },
    logo: '/favicon.ico',
    nav: [
      { text: 'Article', link: '/Article/' },
      { text: 'Document', link: '/Document/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZZHENJIE' },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    }
  },
})
