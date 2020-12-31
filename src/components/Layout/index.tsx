import React, { useState } from 'react';
import SideBar from '../SideBar';
import ChatWindow from '../ChatWindow';
import ChatIntro from '../ChatIntro';
import { Container } from './styles';

interface List {
  chatId: number;
  title: string;
  image: string;
}

const Layout: React.FC = () => {
  const [activeChat, setActiveChat] = useState<List | null>(null);
  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
    name: 'Joel 123',
  });

  const chatList = [
    {
      chatId: 1,
      title: 'Joel Luis',
      image: 'https://image.flaticon.com/icons/png/512/194/194938.png',
    },
    {
      chatId: 2,
      title: 'Yasmin Felix',
      image: 'https://image.flaticon.com/icons/png/512/194/194938.png',
    },
    {
      chatId: 3,
      title: 'Joel Trabalho',
      image: 'https://image.flaticon.com/icons/png/512/194/194938.png',
    },
    {
      chatId: 4,
      title: 'Joel Escritorio',
      image: 'https://image.flaticon.com/icons/png/512/194/194938.png',
    },
  ];

  const openChat = (key: number) => {
    setActiveChat(chatList[key]);
  };

  return (
    <Container>
      <SideBar avatar={user?.avatar} chatList={chatList} onClick={openChat} />
      <div className="contentArea">
        {activeChat?.chatId !== undefined && <ChatWindow user={user} />}
        {activeChat?.chatId === undefined && <ChatIntro />}
      </div>
    </Container>
  );
};

export default Layout;
