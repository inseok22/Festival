import React, { useState } from 'react';
import { PageWrapper, Button, MainContent, ChatbotButton, ChatbotWindow, ChatbotMessages, SearchInput, HalfBox, SendWindow, ChatBubble } from '../styles/MainSt';
import { MessageCircle, X } from 'lucide-react';
import Notice from './Notice';
import Hotlist from './Hot';
import MapContainer from './Map';

export default function MainPage() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <PageWrapper>
      <MainContent>
        <Notice />
        <HalfBox>
          <Hotlist />
          <Hotlist />
        </HalfBox>
        <MapContainer />
      </MainContent>
      <ChatbotButton onClick={() => setIsChatbotOpen(!isChatbotOpen)}>
        {isChatbotOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </ChatbotButton>
      {isChatbotOpen && (
        <ChatbotWindow>
          <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem' }}>챗봇</h3>
          <ChatbotMessages>
            <ChatBubble>안녕하세요! 무엇을 도와드릴까요?</ChatBubble>
          </ChatbotMessages>
          <SendWindow>
            <SearchInput type="text" placeholder="메시지를 입력하세요..." />
            <Button primary style={{ width: '20%' }}>전송</Button>
          </SendWindow>
        </ChatbotWindow>
      )}
    </PageWrapper>
  );
}