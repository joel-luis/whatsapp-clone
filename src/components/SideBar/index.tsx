import React, { useState } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from '../ChatListItem';

import { Container, Header, Search, Avatar, HeaderButtons } from './styles';

const SideBar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chatlist, setChatlist] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

  return (
    <Container>
      <Header>
        <Avatar>
          <img
            src="https://image.flaticon.com/icons/png/512/194/194938.png"
            alt=""
          />
        </Avatar>
        <HeaderButtons>
          <div className="header-icon">
            <DonutLargeIcon />
          </div>
          <div className="header-icon">
            <ChatIcon />
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
        {chatlist.map((item, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <ChatListItem key={key} />
        ))}
      </div>
    </Container>
  );
};

export default SideBar;
