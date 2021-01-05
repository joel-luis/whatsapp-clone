import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar';
import ChatWindow from '../ChatWindow';
import ChatIntro from '../ChatIntro';
import { Container } from './styles';
import Login from '../Login';
import Api from '../Api/api';
import { List } from '../../types/users';

const Layout: React.FC = () => {
  const [chatList, setChatList] = useState([]);
  const [activeChat, setActiveChat] = useState<List | null>(null);
  const [user, setUser] = useState(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (user !== null) {
      const unsub = Api.onChatList(user.id, setChatList);
      return unsub;
    }
  }, [user]);

  const handleLoginData = async u => {
    const newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    };
    await Api.addUser(newUser);
    setUser(newUser);
  };

  if (user === null) {
    return <Login onReceive={handleLoginData} />;
  }

  const openChat = (key: number) => {
    setActiveChat(chatList[key]);
  };

  return (
    <Container>
      <SideBar user={user} chatList={chatList} onClick={openChat} />
      <div className="contentArea">
        {activeChat?.chatId !== undefined && (
          <ChatWindow user={user} data={activeChat} />
        )}
        {activeChat?.chatId === undefined && <ChatIntro />}
      </div>
    </Container>
  );
};

export default Layout;
