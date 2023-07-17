import React, { useState } from "react";
import { useTransition, animated, config } from "@react-spring/web";
import styled from 'styled-components';
import axios from 'axios';
import { Box, Grid, Flex, Modal } from '../components/styledComponents';
import translate_icon from '../images/translate-icon-1.png';
import _ from 'lodash';



const Wrraper = styled(Flex)`
  min-width: 300px;
  align-items: flex-end;
  justify-content: flex-end;
`;
const Button = styled(Flex)`
  font-size: 90%;

  &:active {
    background-color: white;
    color: #2196F3;
  }
`;
const Container = styled(animated.div)`
  position: relative;
  width: fit-content;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  //gap: 10px;
  border: 1px solid #ECEFF1;
  border-radius: 0px 5px 5px 0px;
  color: white;
  transform-origin: left;
  //background-color: #ECEFF1;
  background-color: transparent;

  &:hover {
    transition: .5s;
    border: 1px solid #2196F3;
  }
`;
const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 18px;
  width: 100%;
  height: 100%;
  padding: 10px;

`;
const Translation_Button = styled(Flex)`
  width: fit-content;
`;
const Translate_Icon = styled.img`
  height: 100%;
`;
const Text = styled(Modal)`
  top: 150%;
  left: 0%;
`;


const App = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [openInput, setOpenInput] = useState(false);
  const [language, setLanguage] = useState(['he', 'en']);


  const transition = useTransition(openInput, {
    from: { scaleX: 0 },
    enter: { scaleX: 1 },
    leave: { scaleX: 0 },
    config: { tension: 4000, friction: openInput ? 200 : 400, mass: 7, velocity: .05, }
  });

  const translateText = async () => {
    try {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=AIzaSyD1BoPHMrmSDxC3dlqrJNHhO2xHKGgvvjs`,
        {
          q: text,
          target: language[0], // השפה אליה אתה רוצה לתרגם
        }
      );

      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };


  return (
    <Wrraper>
      {transition((style, toggle) =>
        toggle &&
        <Container style={style}>
          <Button // תרגום
            radius="5px"
            bg="#2196F3"
            onClick={() => translateText()}
          >תרגם
          </Button>

          <Button // בחירת שפה לתרגום
            w="fit-content"
            p="0px 7px"
            bg="white"
            radius="2px"
            color="#2196F3"
            onClick={() => { setLanguage(_.reverse([...language])) }}
          >
            {language[0] == 'he' ? 'א' : 'A'}
          </Button>

          <Input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />

          <Text>{translatedText}</Text>
        </Container>
      )}

      <Translation_Button
        onClick={() => {
          setText('');
          setTranslatedText('');
          setOpenInput(prev => !prev);
        }}>
        <Translate_Icon src={translate_icon} />
      </Translation_Button>

    </Wrraper>
  );
};

export default App;
