import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background-color: white;
  color: black;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background-color: #3b82f6;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  padding: 0.75rem;
  border-bottom: 3px solid #e2e8f0;
`;

export const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 3px solid #e2e8f0;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const PageButton = styled.button`
  margin: 0 0.25rem;
  padding: 0.5rem 1rem;
  border: 3px solid #e2e8f0;
  background-color: white;
  cursor: pointer;

  &: hover {
    background-color: #f7fafc;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:

  gap: 0.5rem;
  margin-top: 1rem;
`;

export const Input = styled.input`
  display: flex;
  width: 35%;
  padding: 0.5rem;
  border: 3px solid #e2e8f0;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4299e1;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #3182ce;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 3px solid #e2e8f0;
  background-color: white;
  font-size: 16px;
  outline: none;
`;


export const notices = [
  { id: 1, title: "2024년 축제 일정 업데이트", date: "2024-10-21", author: "관리자" },
  { id: 2, title: "가을 축제 안내", date: "2024-10-15", author: "축제팀" },
  { id: 3, title: "겨울 축제 준비 안내", date: "2024-10-10", author: "기획팀" },
  { id: 4, title: "축제 자원봉사자 모집", date: "2024-10-05", author: "운영팀" },
  { id: 5, title: "축제 음식 부스 신청 안내", date: "2024-10-01", author: "음식팀" },
];