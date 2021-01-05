import React from 'react';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';

import { Container } from './styles';

const ChatIntro: React.FC = () => {
  return (
    <Container>
      <img
        src="https://web.whatsapp.com/img/intro-connection-dark_0ee01153183b5ebd9b296399cc2104b0.jpg"
        alt=""
      />
      <h1>Mantenha seu celular conectado</h1>
      <h2>
        O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.
        <br />
        Para reduzir o uso de dados, conecte seu telefone a uma rede WI-Fi.
      </h2>

      <div className="content">
        <LaptopMacIcon font-size="small" style={{ color: '#84878a' }} />
        <p>
          O WhatsApp está disponível para Mac.
          <a href="https://www.whatsapp.com/download"> Obtenha-o aqui.</a>
        </p>
      </div>
    </Container>
  );
};

export default ChatIntro;
