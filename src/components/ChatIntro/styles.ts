import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  flex: 1;
  background: var(--primary-intro);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 6px solid #116062;

  > img {
    width: 250px;
    height: auto;
  }

  > h1 {
    font-size: 32px;
    color: var(--texth1);
    font-weight: normal;
    margin-top: 30px;
  }

  > h2 {
    font-size: 14px;
    color: var(--texth2);
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
      color: var(--p);
      font-size: 14px;
      margin-left: 7px;
    }

    a {
      text-decoration: none;
      font-weight: normal;
      color: #00af9c;
    }
  }
`;
