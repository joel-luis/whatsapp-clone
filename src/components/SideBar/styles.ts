import styled from 'styled-components';

export const Container = styled.div`
  width: 55%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);

  .chatlist {
    flex: 1;
    background-color: var(--sidebar);
    overflow-y: auto;
    width: 100%;
  }

  .chatlist::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    z-index: 1;
  }

  .chatlist::-webkit-scrollbar-thumb {
    background: var(--scrollbar);
    z-index: 1;
  }
`;

export const Header = styled.div`
  background-color: var(--header);
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
    color: var(--icons);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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
