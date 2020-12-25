import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin-top: -50px;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 6px solid #4adf83;

  > img {
    width: 250px;
    height: auto;
  }

  > h1 {
    font-size: 32px;
    color: #525252;
    font-weight: normal;
    margin-top: 30px;
  }

  > h2 {
    font-size: 14px;
    color: #777;
    font-weight: normal;
    margin-top: 20px;
    line-height: 20px;
    text-align: center;
  }
  .content {
    display: flex;
    align-items: center;
    margin-top: 55px;

    p {
      color: #919191;
      font-size: 14px;
      margin-left: 10px;
    }

    a {
      text-decoration: none;
      font-weight: normal;
      color: #07bc4c;
    }
  }
`;
