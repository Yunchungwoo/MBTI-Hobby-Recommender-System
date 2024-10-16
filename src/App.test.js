import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import HomePage from './components/main/HomePage'; // 로그인 성공 후 이동할 메인 페이지

function App() {
  return (
    <Router>
      <Routes>
        {/* 루트 경로에서 로그인 페이지를 렌더링 */}
        <Route path="/" element={<LoginPage />} />

        {/* 로그인 성공 후 이동할 메인 페이지 경로 */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
