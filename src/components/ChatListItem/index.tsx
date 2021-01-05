import React, { useState, useEffect } from 'react';

import {
  Container,
  Avatar,
  ChatListLines,
  ChatListLine,
  Name,
  HourMsg,
  LastMsg,
} from './styles';
import { List } from '../../types/users';

interface Props {
  onClick: Function;
  id: string | number;
  item: List;
}

const ChatListItem: React.FC<Props> = (props: Props) => {
  const { item, onClick, id } = props;
  const [time, setTime] = useState('');

  useEffect(() => {
    if (item?.lastMessageDate?.seconds > 0) {
      const d = new Date(item?.lastMessageDate?.seconds * 1000);
      let hours = d.getHours();
      let minutes = d.getMinutes();
      hours = Number(hours < 10 ? `0${hours}` : hours);
      minutes = Number(minutes < 10 ? `0${minutes}` : minutes);
      setTime(`${hours}:${minutes}`);
    }
  }, [item]);

  return (
    <Container onClick={() => onClick(id)}>
      <Avatar>
        <img src={item?.image} alt="" />
      </Avatar>
      <ChatListLines>
        <ChatListLine>
          <Name>{item?.title}</Name>
          <HourMsg>{time}</HourMsg>
        </ChatListLine>

        <ChatListLine>
          <LastMsg>
            <p>{item?.lastMessage}</p>
          </LastMsg>
        </ChatListLine>
      </ChatListLines>
    </Container>
  );
};

export default ChatListItem;
