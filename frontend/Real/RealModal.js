import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: absolute;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  transform: ${(props) =>
    props.initialPosition ? `translate(${props.initialPosition.x}px, ${props.initialPosition.y}px) scale(0)` : 'scale(0)'};
  transition: transform 0.5s ease-in-out;
  transform-origin: center center;

  &.open {
    transform: translate(0, 0) scale(1);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Modal = ({ isOpen, onClose, festival, initialPosition }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(false); // 애니메이션 초기화
      setTimeout(() => {
        setIsAnimating(true); // 짧은 딜레이 후 애니메이션 시작
      }, 50); // 50ms 딜레이로 확실하게 비동기적으로 처리
    } else {
      setIsAnimating(false); // 모달이 닫힐 때 상태 초기화
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent
        className={isAnimating ? 'open' : ''}
        initialPosition={initialPosition}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{festival.name}</h2>
        <p>위치: {festival.location}</p>
        <p>날짜: {festival.date}</p>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;