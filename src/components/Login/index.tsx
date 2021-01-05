import React from 'react';

import { Container } from './styles';
import Api from '../Api/api';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onReceive: (user: any) => void;
}

const Login: React.FC<Props> = (props: Props) => {
  const handleFacebookLogin = async () => {
    const result = await Api.fbPopup();

    if (result) {
      props.onReceive(result?.user);
    } else {
      // eslint-disable-next-line no-alert
      alert('Erro');
    }
  };
  return (
    <Container>
      <button type="button" onClick={handleFacebookLogin}>
        Logar com Facebook
      </button>
    </Container>
  );
};

export default Login;
