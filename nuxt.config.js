export default {
  ssr: false,
  head: {
    title: 'checking',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' }, ///เพิ่มข้างล่างหน้าจอจะไม่ขยายตาม
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'ant-design-vue/dist/antd.css',
    '~/style/style.css'
  ],
  plugins: [
    '@/plugins/antd-ui',
    '~/plugins/firebase'
  ],
  components: true,
  buildModules: [
  ],
  modules: [
  ],
  build: {
  }
}
