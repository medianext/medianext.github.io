import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "MediaNext",
  description: "MediaNext",
  head: [
    ['meta', { name: 'keywords', content: 'wangdm,study,tutorial,Rust,Golang,FFmpeg,WebRTC,Linux' }],
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?38f4d9dc6914625be466adfc38a84328";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
      })();
   `]
  ],
  srcDir: './content',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: 'https://blog.wangdm.cn' },
      {
        text: 'Project',
        items: [
          { text: 'MP4 Analyzer', link: '/MP4Analyzer/' },
          { text: 'libwdm-mp4', link: '/libwdm-mp4/' },
          { text: 'libwdm-p2p', link: '/libwdm-p2p/' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/medianext' },
      {
        icon: {
          svg: '<svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"/></svg>'
        },
        link: 'https://gitee.com/medianext'
      }
    ],

    footer: {
        message: 'Powered by <a href="https://vitepress.vuejs.org/" target="_blank">VitePress</a>',
        copyright: 'Copyright © 2020-2024 <a href="https://medianext.cn/" target="_blank">MediaNext</a>'
    }
  }
})
