import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, CardTitle, CardContent, FestivalCard, FestivalGrid, MoreCard } from '../styles/HotSt';
import Modal from '../Modal';

const Hotlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef([]);

  const navigate = useNavigate();
  const handleMoreClick = () => {
    navigate('/list');
  };

  const topFestivals = [
    { id: 1, name: "서울 랜턴 페스티벌", location: "서울", date: "2024-10-01" },
    { id: 2, name: "부산 불꽃 축제", location: "부산", date: "2024-10-15" },
    { id: 3, name: "전주 비빔밥 축제", location: "전주", date: "2024-09-20" },
    { id: 4, name: "진주 남강유등축제", location: "진주", date: "2024-10-01" },
    { id: 5, name: "보령 머드축제", location: "보령", date: "2024-07-15" },
  ];

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
            {topFestivals.map((festival, index) => (
              <FestivalCard
                key={festival.id}
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => openModal(festival, index)}
              >
                <CardContent>
                  <img src="./AppleFesta.jpeg" style={{ width: '200px', height: '150px' }}/>
                  <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem' }}>{festival.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{festival.date}</p>
                </CardContent>
              </FestivalCard>
            ))}
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
