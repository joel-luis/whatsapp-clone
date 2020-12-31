import React, { useState } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from '../ChatListItem';
import NewChat from '../NewChat';

import { Container, Header, Search, Avatar, HeaderButtons } from './styles';

interface List {
  chatId: number;
  title: string;
  image: string;
}
interface Props {
  chatList: List[];
  onClick: Function;
  avatar: string;
}

const SideBar: React.FC<Props> = (props: Props) => {
  const { chatList, onClick, avatar } = props;

  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  };

  return (
    <Container>
      <NewChat show={showNewChat} setShow={setShowNewChat} />
      <Header>
        <Avatar>
          <img src={avatar} alt="" />
        </Avatar>
        <HeaderButtons>
          <div className="header-icon">
            <DonutLargeIcon />
          </div>
          <div className="header-icon">
            <ChatIcon onClick={handleNewChat} />
          </div>
          <div className="header-icon">
            <MoreVertIcon />
          </div>
        </HeaderButtons>
      </Header>

      <Search>
        <div className="search-input">
          <SearchIcon font-size="small" style={{ color: '#919191' }} />
          <input
            type="search"
            placeholder="Procurar ou começar uma nova conversa"
          />
        </div>
      </Search>

      <div className="chatlist">
        {chatList?.map((item, key) => (
          <ChatListItem id={key} onClick={onClick} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default SideBar;
