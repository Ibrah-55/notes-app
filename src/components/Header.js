import React, {useState} from 'react';
import styled from 'styled-components';

import keepLogo from '../assets/keep-logo.png';
import reactLogo from '../logo.svg';
import fireLogo from '../assets/firebase-logo.png';


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 25px;
  border-bottom: 1px solid rgba(60, 64, 67, 0.2);
`;

const ImgWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img `
width;40px`
const Header = () => {
    return (

      <Nav>
        <p>Notes App</p>
        <ImgWrap>
          <Img src={keepLogo} alt="Google keep logo" />
          <p>+</p>
          <Img src={reactLogo} alt="React logo"/>
          <p>+</p>
          <Img src={firebaseLogo} alt="firebase logo"/>
        </ImgWrap>
      </Nav>
    );
  };

export default Header;