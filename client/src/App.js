import React, { createContext, useState, useEffect, useRef } from 'react';
import styled, { StyleSheetManager, createGlobalStyle, css } from 'styled-components';
import { Grid, Flex, Text } from './components/styledComponents';
import Header from './components/Header';
import background1 from './images/game-background-1.jpg';
import cursor_click from './images/cursor-click.png';
import cursor from './images/cursor.png';
import Cursor from './components/Cursor';
import { MantineProvider } from '@mantine/core';
import Routes from './Routes';
import Breadcrumbs from './components/Breadcrumbs';


export const Context = createContext();


const fonts = css`
  @font-face {
  font-family: 'Nectarina';
  src: url('/fonts/._Nectarina-Regular.otf') format('otf');
  }
  @font-face {
    font-family: 'Malkush';
    src: url('/fonts/MalkushRegular.otf') format('otf');
  }
  @font-face {
    font-family: 'Parmesan';
    src: url('/fonts/FbParmesan-Regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Matador-Light';
    src: url('/fonts/FbMatador-Light.woff') format('woff');
  }
  @font-face {
    font-family: 'Matador-Regular';
    src: url('/fonts/FbMatador-Regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Matador-Medium';
    src: url('/fonts/FbMatador-Medium.woff') format('woff');
  }
  @font-face {
    font-family: 'Matador-Bold';
    src: url('/fonts/FbMatador-Bold.woff') format('woff');
  }
  @font-face {
    font-family: 'Matador-Black';
    src: url('/fonts/FbMatador-Black.woff') format('woff');
  }
  @font-face {
    font-family: 'Oleo-Regular';
    src: url('/fonts/OleoScript-Regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Pragmati-Light';
    src: url('/fonts/FbPragmati-Light.woff') format('woff');
  }
  @font-face {
    font-family: 'Pragmati-Regular';
    src: url('/fonts/FbPragmati-Regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Pragmati-Bold';
    src: url('/fonts/FbPragmati-Bold.woff') format('woff');
  }
  @font-face {
    font-family: 'Pragmati-Black';
    src: url('/fonts/FbPragmati-Black.woff') format('woff');
  }
  @font-face {
    font-family: 'Byaliq-Light';
    src: url('/fonts/FbByaliq-Light.woff') format('woff');
  }
  @font-face {
    font-family: 'Byaliq-Regular';
    src: url('/fonts/FbByaliq-Regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Byaliq-Medium';
    src: url('/fonts/FbByaliq-Medium.woff') format('woff');
  }
  @font-face {
    font-family: 'Byaliq-Bold';
    src: url('/fonts/FbByaliq-Bold.woff') format('woff');
  }
  @font-face {
    font-family: 'Byaliq-Black';
    src: url('/fonts/FbByaliq-Black.woff') format('woff');
  }

  // <--- english fonts ---> //
  @font-face {
    font-family: 'Oleo-Bold';
    src: url('/fonts/OleoScript-Bold.woff') format('woff');
  }
  @font-face {
    font-family: 'Adorable';
    src: url('/fonts/Adorable-Font-6.woff') format('woff');
  }
  @font-face {
    font-family: 'grumbear';
    src: url('/fonts/grumbear-grumbear-400.woff') format('woff');
  }
  @font-face {
    font-family: 'nora-notes';
    src: url('/fonts/nora-notes-nora-notes-400.woff') format('woff');
  }
  @font-face {
    font-family: 'aquatic';
    src: url('/fonts/aquatic-aquatic-400.woff') format('woff');
  }
  @font-face {
    font-family: 'gamking';
    src: url('/fonts/gamking-400.woff') format('woff');
  }
  @font-face {
    font-family: 'MEOOW';
    src: url('/fonts/MEOOW.woff') format('woff');
  }
  @font-face {
    font-family: 'MatadorEn-Light';
    src: url('/fonts/FbMatadorEn-Light.woff') format('woff');
  }
  @font-face {
    font-family: 'MatadorEn-Regular';
    src: url('/fonts/FbMatadorEn-Regular.woff') format('woff');
  }
  @font-face {
    font-family: 'MatadorEn-Medium';
    src: url('/fonts/FbMatadorEn-Medium.woff') format('woff');
  }
  @font-face {
    font-family: 'MatadorEn-Bold';
    src: url('/fonts/FbMatadorEn-Bold.woff') format('woff');
  }
  @font-face {
    font-family: 'MatadorEn-Black';
    src: url('/fonts/FbMatadorEn-Black.woff') format('woff');
  }
`;

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    //cursor: none;
  }
  html, body{
    margin: auto 0;
    padding: 0;
    font-family: "Matador-Medium";
  }
  ::selection {
    background: red;
    color: white;
  }
  ${fonts}
`;
const ContainerAll = styled.div`
  direction: rtl;
  //user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  color: white;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 7% 88% 5%;
  background: transparent url(${background1}) center center/cover no-repeat;
  //background: red;
`;
const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  place-items: center;
  padding: 30px;
`;
const Footer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;


function App() {
  const [money, setMoney] = useState(0);
  const [time, setTime] = useState(0);
  const [click, setClick] = useState(cursor);
  const [position, setPosition] = useState({ x: 0, y: 0 });


  const handleMouseMove = e => {
    setPosition({ x: e.clientX - 10, y: e.clientY });
  };

  const context = {
    money, setMoney,
    time, setTime,
  };


  return (
    <Context.Provider value={context}>
      <MantineProvider
        theme={{
          colors: {
            'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
            'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
          },
        }}
      >
        <StyleSheetManager shouldForwardProp={prop => prop !== 'theme'}>

          <ContainerAll
            onMouseMove={handleMouseMove}
            onMouseDown={() => { setClick(cursor_click) }}
            onMouseUp={() => { setClick(cursor) }}
          >

            <Cursor
              top={position.y}
              left={position.x}
              src={click}
            />

            <Header />
            <Breadcrumbs />

            <Contents>
              <Routes />
            </Contents>

            <Footer>כל הזכויות שמורות לזוהר בע''מ</Footer>

            <GlobalStyle />
          </ContainerAll>
        </StyleSheetManager>
      </MantineProvider>
    </Context.Provider>
  );
}

export default App;



/* const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Options />} />
    </Routes>
  );
}
 */