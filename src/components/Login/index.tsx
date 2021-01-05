import React from 'react';

import { Container } from './styles';
import Api from '../Api/api';

interface Props {
  onReceive: (user: any) => void;
}

const Login: React.FC<Props> = (props: Props) => {
  const handleFacebookLogin = async () => {
    const result = await Api.fbPopup();

    if (result) {
      props.onReceive(result?.user);
    } else {
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
