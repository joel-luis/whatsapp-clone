/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import MessageItem from '../MessageItem';
import Api from '../Api/api';

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
import { List, User } from '../../types/users';

interface Props {
  user: User;
  data: List;
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
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setList([]);
    const unsub = Api.onChatContent(data.chatId, setList, setUsers);
    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  const hanldeInputKeyUp = e => {
    if (e.keyCode === 13) {
      handlderSendClick();
    }
  };
  const handlderSendClick = () => {
    if (text !== '') {
      Api.sendMessage(data, user.id, 'text', text, users);
      setText('');
      setEmojiOpen(false);
    }
  };

  const { user, data } = props;
  return (
    <Container>
      <Header>
        <HeaderInfo>
          <Avatar>
            <img src={data?.image} alt="" />
          </Avatar>
          <Name>{data?.title}</Name>
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
        <div className="Chatbody">
          {list?.map((item, key) => (
            <MessageItem
              key={key.toString()}
              data={item}
              user={user}
              item={item}
            />
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
              onKeyUp={hanldeInputKeyUp}
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
