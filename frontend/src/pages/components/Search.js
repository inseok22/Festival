import React, { useState } from "react";
import axios from 'axios';
import { SearchWrapper, SearchInput, SearchIcon, Button } from "../styles/SearchSt";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    // 검색어 유효성 검사
    if (searchQuery.trim() === "") {
      setError("검색어를 입력해주세요.");
      return;
    }

    if (searchQuery.trim().length < 2) {
      setError("검색어는 두 글자 이상 입력해주세요.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 백엔드 API 호출
      const response = await axios.get(`/api/festivals?query=${searchQuery}`);
      setSearchResults(response.data);
    } catch (err) {
      console.error(err);
      setError("검색 결과를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder="축제 검색..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <SearchIcon size={20} />
      <Button onClick={handleSearch}>검색</Button>
    </SearchWrapper>
  );
};

export default SearchBar;