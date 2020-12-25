import React from 'react';
import SideBar from '../SideBar';
import ChatIntro from '../ChatIntro';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <ChatIntro />
    </Container>
  );
};

export default Layout;
