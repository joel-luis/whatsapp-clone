import React from 'react';

import {
  Container,
  MessageLines,
  MessagesItem,
  MessageText,
  MessageDate,
} from './styles';
import { User, Messages } from '../../types/users';

interface Props {
  data: Messages;
  user: User;
}

const MessageItem: React.FC<Props> = (props: Props) => {
  const { data, user } = props;
  return (
    <Container>
      <MessageLines
        style={{
          justifyContent: user.id === data.author ? 'flex-end' : 'flex-start',
        }}
      >
        <MessagesItem
          style={{ background: user.id === data.author ? '#dcf8c6' : '#fff' }}
        >
          <MessageText>{data.body}</MessageText>
          <MessageDate>19:00</MessageDate>
        </MessagesItem>
      </MessageLines>
    </Container>
  );
};

export default MessageItem;
