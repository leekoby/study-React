import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // 이 구문을 넣어주세요

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
            </li>
            <li>
              <Link to="/mypage">MyPage</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* 경로는 path로 컴포넌트는 element로 연결해 줍니다. */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function MyPage() {
  return <h1>MyPage</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

export default App;