import React, { createContext, useState, useEffect, useRef } from 'react';
import { Route, Routes, Link } from "react-router-dom"
import styled, { StyleSheetManager, createGlobalStyle } from 'styled-components';
import { Grid, Flex, Text } from './components/styledComponents';
import Options from './screens/Options';
import Words from './screens/Words';
import Header from './components/Header';
import background1 from './images/game-background-1.jpg';
import cursor from './images/cursor.png';
import cursor_click from './images/cursor-click.png';
import { MantineProvider } from '@mantine/core';


export const Context = createContext();


const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    //cursor: none;
    //font-family: "Malkush";
  }
  html, body{
    margin: auto 0;
    padding: 0;
  }

  ::selection {
    background: red;
    color: white;
  }

  @font-face {
  font-family: 'Nectarina';
  src: url('./fonts/._Nectarina-Regular.otf') format('otf');
  }
  @font-face {
    font-family: 'Malkush';
    src: url('./fonts/MalkushRegular.otf') format('otf');
  }
  @font-face {
    font-family: 'Parmesan';
    src: url('./fonts/FbParmesan-Regular.otf') format('otf');
  }
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
`
const Footer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`
const Cursor = styled.img.attrs(props => ({
  style: {
    top: `${props.top}px`,
    left: `${props.left}px`,
  },
}))`
  position: absolute;
  pointer-events: none; 
  width: 30px;
  height: 60px;
  z-index: 1000;
  filter: drop-shadow(-1px 1px 2px rgba(0, 0, 0, 0.3));
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

  const FetchData = async (text) => {
    const url = 'https://open-ai21.p.rapidapi.com/texttospeech';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '3a3f8aa681msh73981c40e80504ap11b6bfjsne64c6bde1e03',
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
      },
      body: new URLSearchParams({
        text: text
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // use json() instead of text()
      const mp3Link = result.url; // depending on the structure of your response
      let audio = new Audio(mp3Link);
      audio.play();

    } catch (error) {
      console.error(error);
    }
  }


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
              src={click} alt="cursor"
            />

            <Header />

            <Contents>
              <Routes>
                <Route path="/" element={<Options />} />
                <Route path="/Words" element={<Words />} />
              </Routes>
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