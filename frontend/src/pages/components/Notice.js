import React from "react";
import { useNavigate } from "react-router-dom";

import { First, NoticeBanner, Second } from '../styles/NoticeSt';

const Notice = () => {
  const navigate = useNavigate();

  const handleNoticeClick = () => {
    navigate('/notice');
  };

  return (
    <NoticeBanner>
      <First>
        <p style={{ cursor: 'pointer' }}  onClick={handleNoticeClick}>공지사항</p>
      </First>
      <Second>
        <p>2024년 축제 일정이 업데이트 되었습니다. 확인해 보세요!</p>
      </Second>
    </NoticeBanner>
  );
};

export default Notice;