# 이 예제를 실행하려면

- 네이버 개발자센터에서 검색 API 신청하여 인증키를 받아야 함

- NaverBook.jsx 내에 Client ID, Secret 문자열 추가 필요

- localhost 에서 구동할때 CORS 문제가 생기는 경우에 대비

- vite.config.js 파일에 server.proxy 설정이 되어 있으므로 참고바람

# 깃허브(Github)에서 버셀(Vercel) 연동을 통한 자동 배포를 하기 위해서는...

- Configure Project: Framework Preset (Vite) 선택하고

- Environment Variables 에 각각 3가지 환경 값을 추가해야 NaverBook.jsx 컴포넌트가 정상 동작함

- VITE_NAVER_API_CLIENT_ID: 발급받은 클라이언트 ID
- VITE_NAVER_API_CLIENT_SECRET: 발급받은 클라이언트 시크릿
- VITE_NAVER_API_URL=https://openapi.naver.com

- VITE_NAVER_API_URL의 경우 로컬에서는 CORS 문제 해결을 위해 Proxy Server 설정이 되어 있어서 그러함