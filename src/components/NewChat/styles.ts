import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const Container = styled.div`
  width: 35%;
  max-width: 415px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: var(--sidebar);
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
  transition: all ease 0.5s;
`;
export const Header = styled.div`
  display: flex;
  background-color: var(--newchat);
  align-items: center;
  padding: 50px 15px 15px 15px;
`;
export const BackIcon = styled(ArrowBackIcon)`
  color: var(--texth2);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const HeaderTitle = styled.div`
  color: var(--texth2);
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
    background-color: var(--chathover);
  }

  .newChat-itemavatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }

  .newChat-itemname {
    font-size: 17px;
    color: var(--chattext);
  }
`;

export const Search = styled.div`
  background-color: var(--sidebar);
  border-bottom: 1px solid var(--border);
  padding: 10px 15px;

  .search-input {
    background-color: var(--input);
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .search-input input {
    flex: 1;
    border: 0;
    outline: 0;
    background-color: transparent;
    margin-left: 5px;
    color: var(--textInput);

    &::placeholder {
      color: var(--textInput);
    }
  }
`;
