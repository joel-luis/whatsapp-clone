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

const ChatListItem: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <img
          src="https://image.flaticon.com/icons/png/512/194/194938.png"
          alt=""
        />
      </Avatar>
      <ChatListLines>
        <ChatListLine>
          <Name>Joel Luis</Name>
          <HourMsg>19:00</HourMsg>
        </ChatListLine>

        <ChatListLine>
          <LastMsg>
            <p>Clone WhatsApp com ReactJs e Typescript.</p>
          </LastMsg>
        </ChatListLine>
      </ChatListLines>
    </Container>
  );
};

export default ChatListItem;
