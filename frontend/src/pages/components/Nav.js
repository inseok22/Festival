import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Menu, X } from 'lucide-react';

import { Nav, NavContent, Logo, NavButtons, Button, MobileMenu, SearchCon } from '../styles/NavSt';
import SearchBar from "./Search";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleLogoClick = () => {
    navigate('/');
  };
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <Nav>
      <NavContent>
        <Logo onClick={handleLogoClick}>축제로</Logo>
        <NavButtons>
          {searchOpen && <SearchBar />}
          <SearchCon onClick={toggleSearch} />

          {/* 데스크탑 및 태블릿: 알림과 로그인 버튼은 네비게이션 바에 직접 표시 */}
          <Button ghost className="bell-icon desktop-only">
            <Bell size={20} />
          </Button>
          <Button primary className="login-button desktop-only" onClick={handleLoginClick}>
            로그인
          </Button>
          
          {/* 햄버거 메뉴 아이콘은 모든 환경에서 항상 보이게 */}
          <Button ghost onClick={toggleMenu} className="hamburger-button">
            <Menu size={24} />
          </Button>
        </NavButtons>
      </NavContent>

      {/* 모바일에서 햄버거 메뉴가 열렸을 때 나타나는 메뉴 */}
      <MobileMenu open={menuOpen}>
        <Button ghost onClick={toggleMenu} className="close-button">
          <X size={24} />
        </Button>
        <Button ghost>
          <Bell size={20} /> 알림
        </Button>
        <Button primary onClick={handleLoginClick}>로그인</Button>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;