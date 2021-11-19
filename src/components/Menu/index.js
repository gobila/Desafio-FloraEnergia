import React from 'react';
import { Link } from 'react-router-dom';
import { MenuWrapper, MenuLogo, MenuLinks } from './style';
import Logo from '../../assets/floraLogo.png';
import LogoBranco from '../../assets/floraLogo-branco.png';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuLogo>
        <img src={LogoBranco} alt="logo" width="auto" height="auto" />
      </MenuLogo>
      <MenuLinks>
        <Link to="/faq">FAQ</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/help">Help</Link>
      </MenuLinks>
    </MenuWrapper>
  );
}
