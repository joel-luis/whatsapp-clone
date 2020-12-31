import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const Container = styled.div`
  width: 35%;
  max-width: 415px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  transition: all ease 0.5s;
`;
export const Header = styled.div`
  display: flex;
  background-color: #00bfa5;
  align-items: center;
  padding: 60px 15px 15px 15px;
`;
export const BackIcon = styled(ArrowBackIcon)`
  color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const HeaderTitle = styled.div`
  color: #fff;
  font-size: 19px;
  line-height: 40px;
  flex: 1;
  font-weight: normal;
  margin-left: 20px;
`;
export const NewChatList = styled.div`
  flex: 1;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
  }
  .newChat-item {
    display: flex;
    align-items: center;
    padding: 15px;
    cursor: pointer;
  }

  .newChat-item:hover {
    background-color: #f5f5f5;
  }

  .newChat-itemavatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }

  .newChat-itemname {
    font-size: 17px;
    color: #000;
  }
`;
