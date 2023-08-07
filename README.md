# React-shop-app

## Install

```bash
npm init vite (./ + React + JS)
npm install
npm i axios @reduxjs/toolkit react-icons react-loading-skeleton sass react-router-dom
npm i react-hook-form
```

## Firebase 연결하기

https://console.firebase.google.com/?hl=ko  

- 프로젝트 만들기
- 프로젝트 이름
  - react-shop-app
- 애널리스틱 사용 설정 해제
- 웹(</>) click!
  - 닉네임 : react-shop-app
  - 앱 등록
  - `npm install firebase`
- src/firbase.js 파일 생성
- build/authentication/시작하기
  - 이메일/비밀번호/사용설정 click

## Redux Install

```bash
npm i react-redux
```

## Typescript로 전환

```bash
npm i -D typescript @types/react @types/react-dom
```

- vite.config.js => vite.config.ts
- ts-test 폴더 만들기
  - npm init vite
    - ./ -> react -> Typescript 
    - tsconfig.json & tsconfig.node.json 파일 복사/붙여넣기
    - vite-env.d.ts : src 폴더 안으로 복붙
- main.jsx => main.tsx
  ```js
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
  )
  ```
  tsconfig.json
  ```js
  "allowJs": true
  ```
  index.html
  ```html
  <script type="module" src="/src/main.tsx"></script>
  ```