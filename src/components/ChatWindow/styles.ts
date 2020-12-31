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
    background: #f0f0f0;
  }

  .emoji-picker-react .emoji-group:before {
    background: #e6e6e6;
    color: #989898;
    padding-left: 15px;
    font-weight: normal;
    border-radius: 5px;
    font-size: 12px;
  }
`;

export const Header = styled.div`
  height: 60px;
  border-bottom: 1px solid #ccc;
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
  color: #000;
`;

export const Body = styled.div`
  z-index: 1;
  overflow-y: auto;
  height: 90vh;
  background-color: #e5ddd5;
  background-size: 65%;
  background-position: center;
  background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
  padding-bottom: 70px;

  .ChatWindowBody::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .ChatWindowBody::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
  }
`;
export const Footer = styled.div`
  height: 62px;
  width: 68%;
  position: fixed;
  bottom: 0;
  background-color: #f6f6f6;
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
    background: #fff;
    border-radius: 20px;
    font-size: 15px;
    color: #4a4a4a;
    padding-left: 15px;
  }
`;

export const ChatWindownPos = styled.div`
  display: flex;
`;

const iconCSS = css`
  display: flex;
  color: #919191;
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
