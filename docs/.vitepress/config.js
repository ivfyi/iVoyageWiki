import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

function makeLinksAbsolute(items, prefix) {
  return items.map(item => {
    if (item.link && !item.link.startsWith('/')) {
      item.link = prefix + item.link
    }
    if (item.items) {
      item.items = makeLinksAbsolute(item.items, prefix)
    }
    return item
  })
}

const baseOptions = {
  documentRootPath: 'docs',
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: false,
  useFolderLinkFromIndexFile: false,
  useFolderTitleFromIndexFile: true,
  includeFolderIndexFile: true,
  hyphenToSpace: true,
  capitalizeFirst: true,
  collapsed: true,
  collapseDepth: 2,
  sortFolderTo: 'top',
  includeDotFiles: false,
  includeEmptyFolder: false,
}

export default defineConfig({
  title: 'iVoyageWiki',
  description: '出游旅行一站式指南 - 新手出行必备攻略',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '目的地', link: '/destinations/' },
      { text: '知识库', link: '/knowledge/' },
      { text: '工具包', link: '/tools/' },
      { text: '新手入门', link: '/beginners/' },
    ],

    sidebar: {
      '/destinations/': makeLinksAbsolute(generateSidebar({
        ...baseOptions,
        scanStartPath: 'destinations',
        resolvePath: '/destinations/',
      }), '/destinations/'),
      '/knowledge/': makeLinksAbsolute(generateSidebar({
        ...baseOptions,
        scanStartPath: 'knowledge',
        resolvePath: '/knowledge/',
      }), '/knowledge/'),
      '/tools/': makeLinksAbsolute(generateSidebar({
        ...baseOptions,
        scanStartPath: 'tools',
        resolvePath: '/tools/',
      }), '/tools/'),
      '/beginners/': makeLinksAbsolute(generateSidebar({
        ...baseOptions,
        scanStartPath: 'beginners',
        resolvePath: '/beginners/',
      }), '/beginners/'),
    },

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anomalyco/iVoyageWiki' },
    ],
  },
})
