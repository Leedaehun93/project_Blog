# project_Blog 리액트 기초 학습을 활용한 웹 반응형 블로그

이 프로젝트는 리액트 기초 학습을 바탕으로, 부트스트랩 템플릿을 타입스크립트 기반으로 변환하여 반응형 레이아웃을 구현한 웹 블로그입니다. 이를 통해 현대적인 웹 개발 기술과 반응형 디자인의 중요성을 이해하고, 실제 프로젝트에 적용하는 경험을 제공합니다.

## 🚀 프로젝트 학습 목표

-   부트스트랩 템플릿을 타입스크립트 기반으로 코드 변경하여 반응형 레이아웃 웹 사이트 구현해 보기
-   로그인 기능 부여하기

## 🎮 기술 스택

-   ✨ Front-End :
    -   React
    -   TypeScript

## ⚙ 의존성 요약

이 프로젝트에서는 다음과 같은 주요 의존성들을 사용하고 있습니다.

-   `React` 및 `React DOM`: 사용자 인터페이스를 구축하는 데 사용됩니다.
-   `@mui/material`: UI 디자인을 위한 Material-UI 컴포넌트를 제공합니다.
-   `Redux Toolkit`: 상태 관리를 위해 사용됩니다.
-   `Axios`: HTTP 클라이언트로서, API 요청을 처리하는 데 사용됩니다.
-   `React Router DOM`: 싱글 페이지 애플리케이션의 라우팅을 관리합니다.
-   `Formik` 및 `Yup`: 폼 관리 및 유효성 검사를 담당합니다.
-   `Sass`: 스타일링을 위한 CSS 전처리기로 사용됩니다.
-   `Typescript`: 타입 안전성을 제공하며, JavaScript 코드의 오류를 줄이는 데 도움이 됩니다.

개발 의존성(devDependencies)으로는

-   `@types/react`, `@types/react-dom` 등: React와 관련된 TypeScript 타입 정의를 제공합니다.
-   `@testing-library`: 컴포넌트 단위 테스팅을 위해 사용됩니다.

## 📸 화면구성

![화면 구성 템플릿1](https://github.com/Leedaehun93/project_Blog/assets/141594918/980a9b06-d6d4-416a-a6ca-499330dd4717)
<br/>

## 📦 패키지 구조

<details>
<summary>자세히 보기</summary>
<pre>
project_Blog
├─ .gitignore                # Git 설정 파일
├─ README.md                 # 프로젝트 설명
├─ package.json              # 노드 패키지 관리 파일
├─ 00_etc                    # 기타 파일
├─ 00_thema_down             # 원본 테마 관련 파일
│  └─ iPortfolio             # 원본 iPortfolio 테마
│     ├─ assets              # 원본 정적 자산
│     │  ├─ css              # 원본 CSS 파일
│     │  ├─ img              # 원본 이미지 파일
│     │  └─ js               # 원본 JavaScript 파일
│     └─ index.html          # 원본 HTML 진입점
├─ 01_Portfolio              # 포트폴리오 프로젝트
│  └─ frontend-react         # React 프론트엔드
│     ├─ public              # 공개 디렉토리
│     │  └─ assets           # 정적 자산
│     └─ src                 # 소스 코드
│        ├─ components       # 리액트 컴포넌트
│        ├─ pages            # 페이지 컴포넌트
│        └─ services         # 서비스 로직
└─ 기타 파일 및 폴더
</pre>
</details>

## 📄 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 아래를 참고하세요.

<details>
<summary>자세히 보기</summary>
<pre>
The MIT License

Copyright (c) 2023 Ivan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
</pre>
</details>
