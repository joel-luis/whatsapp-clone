import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 72px;

  &:hover {
    background-color: var(--chathover);
  }
`;
export const Avatar = styled.div`
  cursor: pointer;
  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 15px;
  }
`;
export const ChatListLines = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid var(--border);
  padding: 15px;
  margin-left: 15px;

  flex-wrap: wrap;
  min-width: 0;
`;
export const ChatListLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Name = styled.div`
  font-size: 16px;
  color: var(--chattext);
  margin-bottom: 2px;
`;
export const HourMsg = styled.div`
  font-size: 12px;
  color: var(--p);
`;
export const LastMsg = styled.div`
  font-size: 14px;
  color: var(--chattext);
  display: flex;
  width: 100%;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
    font-weight: lighter;
    margin-top: 5px;
  }
`;
