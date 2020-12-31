import React, { useState } from 'react';

import {
  Container,
  Header,
  BackIcon,
  HeaderTitle,
  NewChatList,
} from './styles';

interface Props {
  show: any;
  setShow: any;
}

const NewChat: React.FC<Props> = (props: Props) => {
  const { show, setShow } = props;
  const [list, setList] = useState([
    {
      id: 123,
      avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
      name: 'Joel Luis',
    },
    {
      id: 123,
      avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
      name: 'Joel Luis',
    },
    {
      id: 123,
      avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
      name: 'Joel Luis',
    },
    {
      id: 123,
      avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
      name: 'Joel Luis',
    },
    {
      id: 123,
      avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
      name: 'Joel Luis',
    },
  ]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Container style={{ left: show ? 0 : -415 }}>
      <Header>
        <BackIcon onClick={handleClose} />
        <HeaderTitle>Nova Conversa</HeaderTitle>
      </Header>
      <NewChatList>
        {list.map((item, key) => (
          <div className="newChat-item" key={key.toString()}>
            <img className="newChat-itemavatar" src={item.avatar} alt="" />
            <div className="newChat-itemname">{item.name}</div>
          </div>
        ))}
      </NewChatList>
    </Container>
  );
};

export default NewChat;
