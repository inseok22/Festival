import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/components/Main";
import Navbar from './pages/components/Nav';
import LoginPage from "./pages/components/Login";
import SignUp from "./pages/components/Signup";
import NoticeBoard from "./pages/components/NoticeBoard";
import NoticeDetail from "./pages/components/NoticeDetail";
import FestivalList from './pages/components/List';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/notice' element={<NoticeBoard />} />
        <Route path='/notice-detail' element={<NoticeDetail />} />
        <Route path="/list" element={<FestivalList />} />
      </Routes>
    </Router>
  );
}

export default App;