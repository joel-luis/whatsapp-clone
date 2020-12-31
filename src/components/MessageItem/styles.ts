import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  padding: 0px 30px;
`;

export const MessageLines = styled.div`
  display: flex;
`;

export const MessagesItem = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 80%;
`;
export const MessageText = styled.div`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
`;
export const MessageDate = styled.div`
  font-size: 11px;
  color: #999;
  margin-right: 5px;
  text-align: right;
  height: 15px;
  margin-top: -15px;
`;
