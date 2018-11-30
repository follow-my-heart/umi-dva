
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'umi-dva',
      dll: {
        exclude: [],
        include: ["dva", "dva/router", "dva/saga", "dva/fetch", "antd/es"]
      },
      // hardSource: true,
    }],
  ],
  routes: [
    {
      path: '/',
      component: '../layouts/BaseLayout',
      routes: [
        {
          path: 'Option1',
          component: '../pages/Option1/Option1',
          routes: [
            {
              path: 'Page1',
              component: '../pages/myPages/Page1',
            }, {
              path: 'Page2',
              component: '../pages/myPages/Page2',
            }, {
              path: 'Page3',
              component: '../pages/myPages/Page3',
            }, {
              path: 'Page4',
              component: '../pages/myPages/Page4',
            }
          ]
        }, {
          path: 'Option2',
          component: '../pages/Option2',
        }, {
          path: 'Option3',
          component: '../pages/Option3',
        }, {
          path: 'Option4',
          component: '../pages/Option4',
        }
      ],
    },
  ],
  proxy: {
    "/dayi": {
      "target": "http://1v1-teacher-test.xueba100.com",
      // "target": "http://qa33-teacher.xuebadev.com",
      // "target": 'http://teacher.wenba.com/',
      "changeOrigin": true
      // "pathRewrite": { "^/api": "" }
    }
  },
}
