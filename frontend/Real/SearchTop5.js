import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Card, CardHeader, CardTitle, CardContent, FestivalCard, FestivalGrid, MoreCard } from '../styles/HotSt';
import Modal from '../Modal';

const Hotlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [topFestivals, setTopFestivals] = useState([]);
  const cardRefs = useRef([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        const response = await axios.get("/api/festivals?sort=searchCount&order=desc"); // 검색 수 기준으로 내림차순 정렬된 데이터 가져오기
        const sortedFestivals = response.data.slice(0, 5); // 검색 수가 가장 많은 5개의 데이터만 선택
        setTopFestivals(sortedFestivals);
      } catch (error) {
        console.error("Error fetching festivals: ", error);
      }
    };

    fetchFestivals();
  }, []);

  const handleMoreClick = () => {
    navigate('/list');
  };

  const openModal = (festival, index) => {
    const cardElement = cardRefs.current[index];
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      setInitialPosition({
        x: rect.left + rect.width / 2 - window.innerWidth / 2,
        y: rect.top + rect.height / 2 - window.innerHeight / 2,
      });
    }
    setSelectedFestival(festival);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFestival(null);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>인기 축제 Top 5</CardTitle>
        </CardHeader>
        <CardContent>
          <FestivalGrid>
            {topFestivals.length > 0 ? (
              topFestivals.map((festival, index) => (
                <FestivalCard
                  key={festival.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  onClick={() => openModal(festival, index)}
                >
                  <CardContent>
                    <img src={festival.imageUrl} style={{ width: '200px', height: '150px' }} alt={festival.name} />
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem' }}>{festival.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{festival.date}</p>
                  </CardContent>
                </FestivalCard>
              ))
            ) : (
              <p style={{ fontSize: '1rem', color: '#6b7280', textAlign: 'center' }}>내용 없음</p>
            )}
            <MoreCard onClick={handleMoreClick}>
              +더 보기
            </MoreCard>
          </FestivalGrid>
        </CardContent>
      </Card>

      <Modal isOpen={isModalOpen} onClose={closeModal} festival={selectedFestival} initialPosition={initialPosition} />
    </>
  );
};

export default Hotlist;
