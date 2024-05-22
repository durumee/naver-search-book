const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const proxy = createProxyMiddleware({
    target: 'https://openapi.naver.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // /api로 시작하는 경로를 제거
    },
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('X-Naver-Client-Id', process.env.VITE_NAVER_CLIENT_ID);
      proxyReq.setHeader('X-Naver-Client-Secret', process.env.VITE_NAVER_CLIENT_SECRET);
    },
  });

  proxy(req, res);
};
