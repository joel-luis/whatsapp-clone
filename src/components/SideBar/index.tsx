import React, { useState } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from '../ChatListItem';
import NewChat from '../NewChat';
import { User, List } from '../../types/users';
import { Container, Header, Search, Avatar, HeaderButtons } from './styles';

interface Props {
  chatList: List[];
  onClick: Function;
  user: User;
}

const SideBar: React.FC<Props> = (props: Props) => {
  const { chatList, onClick, user } = props;

  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  };

  return (
    <Container>
      <NewChat user={user} show={showNewChat} setShow={setShowNewChat} />
      <Header>
        <Avatar>
          <img src={user?.avatar} alt="" />
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
          <SearchIcon font-size="small" style={{ color: '#b0b3b8' }} />
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
