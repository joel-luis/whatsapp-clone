/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';

import {
  Container,
  MessageLines,
  MessagesItem,
  MessageText,
  MessageDate,
} from './styles';
import { User, Messages, List } from '../../types/users';

interface Props {
  data: Messages;
  user: User;
  item: List;
}

const MessageItem: React.FC<Props> = (props: Props) => {
  const { data, user, item } = props;

  const [time, setTime] = useState('');

  useEffect(() => {
    if (item?.date?.seconds > 0) {
      const d = new Date(item?.date?.seconds * 1000);

      let seconds = d.getSeconds();
      let hours = d.getHours();
      let minutes = d.getMinutes();

      seconds = Number(seconds < 10 ? `0${seconds}` : seconds);
      hours = Number(hours < 10 ? `0${hours}` : hours);
      minutes = Number(minutes < 10 ? `0${minutes}` : minutes);
      setTime(`${hours}:${minutes}`);
    }
  }, [item]);

  return (
    <Container>
      <MessageLines
        style={{
          justifyContent: user.id === data.author ? 'flex-end' : 'flex-start',
        }}
      >
        <MessagesItem
          style={{
            background: user.id === data.author ? '#116062' : 'var(--header)',
          }}
        >
          <MessageText>{data.body}</MessageText>
          <MessageDate>{time}</MessageDate>
        </MessagesItem>
      </MessageLines>
    </Container>
  );
};

export default MessageItem;
