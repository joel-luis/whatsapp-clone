import React from 'react';

import {
  Container,
  Avatar,
  ChatListLines,
  ChatListLine,
  Name,
  HourMsg,
  LastMsg,
} from './styles';

interface List {
  chatId: number;
  title: string;
  image: string;
}
interface Props {
  onClick: Function;
  id: string | number;
  item: List;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ChatListItem(props: Props) {
  const { item, onClick, id } = props;
  return (
    <Container onClick={() => onClick(id)}>
      <Avatar>
        <img src={item?.image} alt="" />
      </Avatar>
      <ChatListLines>
        <ChatListLine>
          <Name>{item?.title}</Name>
          <HourMsg>19:00</HourMsg>
        </ChatListLine>

        <ChatListLine>
          <LastMsg>
            <p>Clone WhatsApp por Joel com ReactJs e Typescript.</p>
          </LastMsg>
        </ChatListLine>
      </ChatListLines>
    </Container>
  );
}

export default ChatListItem;
