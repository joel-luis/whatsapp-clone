/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Api from '../Api/api';

import {
  Container,
  Header,
  Search,
  BackIcon,
  HeaderTitle,
  NewChatList,
} from './styles';
import { User } from '../../types/users';

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  user: User;
}

const NewChat: React.FC<Props> = (props: Props) => {
  const { show, setShow, user } = props;
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      if (user?.id) {
        const results = await Api.getContactList(user?.id);
        setList(results);
      }
    };
    getList();
  }, [user?.id]);

  const addNewChat = async user2 => {
    await Api.addNewChat(user, user2);

    handleClose();
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Container style={{ left: show ? 0 : -415 }}>
      <Header>
        <BackIcon onClick={handleClose} />
        <HeaderTitle>Nova Conversa</HeaderTitle>
      </Header>

      <Search>
        <div className="search-input">
          <SearchIcon font-size="small" style={{ color: '#b0b3b8' }} />
          <input type="search" placeholder="Pesquisar contatos" />
        </div>
      </Search>
      <NewChatList>
        {list.map((item, key) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            onClick={() => addNewChat(item)}
            className="newChat-item"
            key={key.toString()}
          >
            <img className="newChat-itemavatar" src={item.avatar} alt="" />
            <div className="newChat-itemname">{item.name}</div>
          </div>
        ))}
      </NewChatList>
    </Container>
  );
};

export default NewChat;
