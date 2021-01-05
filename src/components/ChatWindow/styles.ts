import styled, { css } from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .emojiarea {
    height: 300px;
    overflow-y: hidden;
    transition: all ease 0.3s;
    bottom: 0;
    margin-bottom: 65px;
    position: fixed;
  }

  aside.emoji-picker-react {
    width: 100%;
    background: var(--header);
    border: none;
    outline: 0;
  }

  .emoji-picker-react .emoji-categories {
    color: var(--textInput);
  }

  .emoji-picker-react .emoji-group:before {
    background: var(--input);
    color: var(--textInput);
    padding-left: 15px;
    font-weight: normal;
    font-size: 12px;
  }
`;

export const Header = styled.div`
  background-color: var(--header);
  height: 60px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Avatar = styled.div`
  cursor: pointer;

  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 15px;
    margin-right: 15px;
  }
`;
export const Name = styled.div`
  font-size: 17px;
  color: var(--chattext);
`;

export const Body = styled.div`
  overflow-y: auto;
  height: 90vh;
  background-color: var(--bodybg);
  background-position: center;
  padding-bottom: 70px;
  background-image: url('https://wallpaperaccess.com/full/2224368.png');
  background-size: 50%;

  .Chatbody::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .Chatbody::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar);
  }
`;
export const Footer = styled.div`
  height: 62px;
  width: 68%;
  position: fixed;
  bottom: 0;
  background-color: var(--header);
  display: flex;
  align-items: center;
`;

export const ChatWindownPre = styled.div`
  display: flex;
  margin: 0 12px;
`;

export const ChatWindownInputArea = styled.div`
  flex: 1;

  .input {
    width: 100%;
    height: 40px;
    border: 0;
    outline: 0;
    background: var(--input);
    border-radius: 20px;
    font-size: 15px;
    color: var(--textInput);
    padding-left: 15px;

    &::placeholder {
      color: var(--textInput);
    }
  }
`;

export const ChatWindownPos = styled.div`
  display: flex;
`;

const iconCSS = css`
  display: flex;
  color: var(--icons);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
`;
export const HeaderButtons = styled.div`
  display: flex;
`;

export const AttachfileIcon = styled(AttachFileIcon)`
  ${iconCSS}
`;

export const Searchicon = styled(SearchIcon)`
  ${iconCSS}
`;

export const MorevertIcon = styled(MoreVertIcon)`
  ${iconCSS}
`;

export const InsertemoticonIcon = styled(InsertEmoticonIcon)`
  ${iconCSS}
`;

export const Closeicon = styled(CloseIcon)`
  ${iconCSS}
`;

export const Sendingicon = styled(SendIcon)`
  ${iconCSS}
  margin-right: 30px;
`;

export const Micicon = styled(MicIcon)`
  ${iconCSS}
  margin-right: 30px;
`;
