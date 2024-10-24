import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { PageContainer, Main, SectionTitle, FestivalGrid, FestivalCard, FestivalImage, FestivalInfo, FestivalName, FestivalDate, MoreButton, FilterContainer, FilterSelect } from '../styles/ListSt';

const FestivalList = () => {
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('popular');

  useEffect(() => {
    const fetchFestivals = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/festivals?filter=${filter}`); // 백엔드 API 호출, 필터 기준 추가
        setFestivals(response.data);
      } catch (error) {
        console.error('Error fetching festivals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFestivals();
  }, [filter]); // filter가 변경될 때마다 데이터 재요청

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <PageContainer>
      <Main>
        <SectionTitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          축제
        </SectionTitle>
        <FilterContainer>
          <FilterSelect value={filter} onChange={handleFilterChange}>
            <option value="popular">인기순</option>
            <option value="alphabetical">가나다순</option>
            <option value="ongoing">진행중</option>
          </FilterSelect>
        </FilterContainer>
        <FestivalGrid>
          {loading ? (
            <p>Loading...</p>
          ) : (
            Array.from({ length: 15 }).map((_, index) => {
              const festival = festivals[index] || {};
              return (
                <FestivalCard href={festival.id ? `/festival/${festival.id}` : '#'} key={index}>
                  <FestivalImage
                    src={festival.imageUrl || '/placeholder.svg'}
                    alt={festival.name || '내용없음'}
                    width={200}
                    height={200}
                  />
                  <FestivalInfo>
                    <FestivalName>{festival.name || '내용없음'}</FestivalName>
                    <FestivalDate>{festival.date || '내용없음'}</FestivalDate>
                  </FestivalInfo>
                </FestivalCard>
              );
            })
          )}
        </FestivalGrid>
        <MoreButton>더 보기</MoreButton>
      </Main>
    </PageContainer>
  );
};

export default FestivalList;
