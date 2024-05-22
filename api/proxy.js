import { createProxyMiddleware } from 'http-proxy-middleware';

export default (req, res) => {
  const proxy = createProxyMiddleware({
    target: 'https://openapi.naver.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // /api로 시작하는 경로를 제거
    },
    onProxyReq: (proxyReq, req, res) => {
      const clientId = process.env.NAVER_CLIENT_ID;
      const clientSecret = process.env.NAVER_CLIENT_SECRET;

      proxyReq.setHeader('X-Naver-Client-Id', clientId);
      proxyReq.setHeader('X-Naver-Client-Secret', clientSecret);
    },
  });

  proxy(req, res);
};
