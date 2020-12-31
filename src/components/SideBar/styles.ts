import styled from 'styled-components';

export const Container = styled.div`
  width: 35%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;

  .chatlist {
    flex: 1;
    background-color: #fff;
    overflow-y: auto;
    width: 100%;
  }

  .chatlist::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .chatlist::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Header = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const Avatar = styled.div`
  cursor: pointer;

  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;

  .header-icon {
    display: flex;
    color: #919191;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const Search = styled.div`
  background-color: #f6f6f6;
  border-bottom: 1px solid #eee;
  padding: 10px 15px;

  .search-input {
    background-color: #fff;
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
    margin-left: 10px;

    &::placeholder {
      color: #4a4a4a;
    }
  }
`;
