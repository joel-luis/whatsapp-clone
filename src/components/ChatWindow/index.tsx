/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import MessageItem from '../MessageItem';

import {
  Container,
  Header,
  HeaderInfo,
  Avatar,
  Name,
  HeaderButtons,
  Body,
  Footer,
  ChatWindownPre,
  ChatWindownInputArea,
  ChatWindownPos,
  Searchicon,
  AttachfileIcon,
  MorevertIcon,
  Closeicon,
  InsertemoticonIcon,
  Micicon,
  Sendingicon,
} from './styles';
import { User } from '../../types/users';

interface Props {
  user: User;
}
const ChatWindow: React.FC<Props> = (props: Props) => {
  const body = useRef<HTMLDivElement>(null);
  let recognition = null;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla',
    },
    {
      author: 1234,
      body: 'opa tude bem?',
    },
  ]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handlerOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handlerCloseEmoji = () => {
    setEmojiOpen(false);
  };

  const handlerMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = e => {
        setText(e.results[0][0].transcript);
      };
      recognition.start();
    }
  };

  const handlderSendClick = () => {};

  const { user } = props;
  return (
    <Container>
      <Header>
        <HeaderInfo>
          <Avatar>
            <img
              src="https://image.flaticon.com/icons/png/512/194/194938.png"
              alt=""
            />
          </Avatar>
          <Name>{user?.name}</Name>
        </HeaderInfo>

        <HeaderButtons>
          <div>
            <Searchicon />
          </div>
          <div>
            <AttachfileIcon />
          </div>
          <div>
            <MorevertIcon />
          </div>
        </HeaderButtons>
      </Header>

      <div className="emojiarea" style={{ height: emojiOpen ? '300px' : 0 }}>
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>
      <Body ref={body}>
        <div className="ChatWindowBody">
          {list?.map((item, key) => (
            <MessageItem key={key.toString()} data={item} user={user} />
          ))}
        </div>
        <Footer>
          <ChatWindownPre>
            <div>
              <Closeicon onClick={handlerCloseEmoji} />
            </div>
            <div>
              <InsertemoticonIcon
                onClick={handlerOpenEmoji}
                style={{ color: emojiOpen ? '#009688' : '#919191' }}
              />
            </div>
          </ChatWindownPre>
          <ChatWindownInputArea>
            <input
              className="input"
              type="text"
              placeholder="Digite uma mensagem"
              value={text}
              onChange={e => setText(e.target.value)}
            />
          </ChatWindownInputArea>
          <ChatWindownPos>
            {text === '' && (
              <div>
                <Micicon
                  onClick={handlerMicClick}
                  style={{ color: listening ? '#126ece' : '#919191' }}
                />
              </div>
            )}
            {text !== '' && (
              <div>
                <Sendingicon onClick={handlderSendClick} />
              </div>
            )}
          </ChatWindownPos>
        </Footer>
      </Body>
    </Container>
  );
};

export default ChatWindow;
