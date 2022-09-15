import {defaultTheme, defineUserConfig} from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {text: '首页', link: '/'},
            {text: '关于', link: 'https://u1s1.vip/about'},
            {text: '友链', link: 'https://u1s1.vip'},
        ],
        sidebar: [
            // SidebarItem
            {
                text: 'Foo',
                link: '/foo/',
                children: [
                    // SidebarItem
                    {
                        text: 'github',
                        link: 'https://github.com',
                        children: [],
                    },
                    // 字符串 - 页面文件路径
                    '/foo/bar.md',
                ],
            },
            // 字符串 - 页面文件路径
            '/bar/README.md',
        ],
    }),
})
