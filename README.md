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
  ```js
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAD9352RwKJJkyQ0VvKgsFJfFpjl6a1i3s",
    authDomain: "react-shop-app-5318b.firebaseapp.com",
    projectId: "react-shop-app-5318b",
    storageBucket: "react-shop-app-5318b.appspot.com",
    messagingSenderId: "1054544992651",
    appId: "1:1054544992651:web:930a7e9f61326ed34e378e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;
  ```