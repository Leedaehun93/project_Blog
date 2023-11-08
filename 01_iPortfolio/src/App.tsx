/* C:\Work\100_project_Blog\01_iPortfolio\frontend-typescript\src\App.tsx */

// TODO: 외부 lib import
// 개발자 css import
import "./assets/css/style.css";
// aos css import
import "aos/dist/aos.css";
// swiper css import
// (참고) xxx.css -> (압축) xxx-min.css
//        xxx.js ->(압축) xxx-min.js (압축파일)
import "swiper/swiper-bundle.css";



// TODO: 리액트 import
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/common/NotFound";

export default function App() {
  return (
    <div className="App">
      <Routes>
        {/* TODO: 공통 */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        {/* TODO: 본문 */}
      </Routes>
    </div>
  );
} // end of App
