import React, { useState, useEffect, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import { Box, Grid, Flex, Text, Modal, BoxStyles } from '../../components/styledComponents';
import voice_icon from '../../images/voice-button.png'
import { Tooltip } from '@mantine/core';
import { Howl } from 'howler';
import * as color from '../../components/colors';
import Button_green from '../../GUI Kit/Button-green.png';
import square_yellow from '../../GUI Kit/button-square-yellow.png';
import square_green from '../../GUI Kit/button-square-green.png';
import square_red from '../../GUI Kit/button-square-red.png';
import board_long from '../../GUI Kit/long-board.png';
import ConfettiExplosion from 'react-confetti-explosion';
import { AnimatedSquareNum, AnimatedWord } from './Results-Animations';
import { useNavigate, useLocation } from 'react-router';


const strokeResults = color.secondary;
const sizeResults = 2;


const Container = styled(Modal)`
  top: 53%;
  width: clamp(180px, 70%, 280px);
  height: 100%;
  display: grid;
  grid-template-rows: .1fr .1fr .6fr 2.2fr;
  padding: 20px;
  //border: 1px solid blue;
  //background-color: red;
`;
const Translate = styled(Flex)`
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${color.primary};
`;
const StyledTooltip = styled(Tooltip)`
  &&&.mantine-Tooltip-tooltip {
    background-color: red;
  }
`;
const ButtonGreen = styled(Flex)`
  width: fit-content;
  height: fit-content;
  padding: 11px 18px;
  font-size: 20px;
  //font-family: 'Parmesan';
  background: transparent url(${Button_green}) center center/ 100% 100% no-repeat;
`;
const Result = styled(Grid)`
  position: relative;
  grid-template-columns: 20% 80%;
  font-size: 25px;
  transform: translate(3%, 0%);
  
  &:active {
    scale: .9;
    transition: .1;
  }
`;
const TextResult = styled(Text)`
  //color: ${prop => prop.color};
  color: white;
  font-size: 26px;
  /* text-shadow: 
  -${sizeResults}px -${sizeResults}px ${strokeResults}, 
    -${sizeResults}px 0px ${strokeResults}, 
    -${sizeResults}px ${sizeResults}px ${strokeResults}, 
    0px -${sizeResults}px ${strokeResults}, 
    0px ${sizeResults}px ${strokeResults}, 
    ${sizeResults}px -${sizeResults}px ${strokeResults}, 
    ${sizeResults}px 0px ${strokeResults}, 
    ${sizeResults}px ${sizeResults}px ${strokeResults}; */
    font-family:'Matador-Medium';
    transform: translate(5%, 0%);
    z-index: 20;
`;
const Board = styled(Flex)`
  background: transparent url(${board_long}) center center / 100% 100% no-repeat;
`;
const NumResult = styled(Text)`
  font-family: 'Matador-Bold';
  font-size: 30px;
`;
const Confetti = styled(ConfettiExplosion)`
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 100%;
  //background-color: red;
`;



const Results = ({ title, words, props }) => {

  const { setMoney, count, setCount,
    choice, setChoice, step, setStep, addSeconds, initialCount,
    setCorrects, setShow, startSpeak, setStartSpeak,
  } = props;
  const [isExploding, setIsExploding] = useState(false);
  const animatedWordRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const newPath = location.pathname.split("/").slice(0, -1).join("/");


  useEffect(() => {
    if (count == 0 && !choice) {
      const wrong_sound = new Howl({ src: ['/sounds/Soft-Fail.mp3'] });
      wrong_sound.play();
    }
  }, [count]);


  const onResult = (result) => {
    const correct_sound = new Howl({ src: ['/sounds/Collect-Item.mp3'] });
    const wrong_sound = new Howl({ src: ['/sounds/Soft-Fail.mp3'] });

    if (count > 0) {
      // אם התשובה נכונה
      if (result == words[step].he) {
        console.log(`יפה מאד ${words[step].he} היא התשובה הנכונה`);
        setCorrects(prev => [...prev, words[step].he]);
        setMoney(prev => prev + 100);
        correct_sound.play();
      }
      else {
        console.log(`זו לא התשובה הנכונה`)
        setCorrects(prev => ([...prev]));
        wrong_sound.play();
      }

      if (step == step.length && !startSpeak) {
        setStartSpeak(true);
      }

      setChoice(result);
      setCount(0);
    }
  };
  const isCorrect = (i) => {
    if (words[step].other[i] == words[step].he) { return true }
    else { return false }
  };
  const isChoiceCorrect = () => {
    if (choice == words[step].he) { return true }
    else { return false }
  };
  const addTime = () => {
    addSeconds(5);
    setMoney(prev => prev - 50);
  };
  const next = () => {
    if (step < words.length - 1) {
      setStep(prev => prev + 1);
      addSeconds(15);
    }
    else {
      navigate(`${newPath}/Total`, { state: { words: location.state.words } });
    }
    setIsExploding(false);
    setChoice('');
  };


  return (
    <Container>
      <Flex $gridRow="1/2">
        <StyledTooltip
          width="fit-content"
          withArrow
          offset={-10}
          transitionProps={{ transition: 'slide-up', duration: 300 }}
          label={words[step].pronunciation}
        >
          <AnimatedWord>{words[step].en}</AnimatedWord>
        </StyledTooltip>
      </Flex>

      <ButtonGreen
        $gridRow="3/4"
        onClick={() => count > 0 ? addTime() : next()}
      >
        {count > 0 ? "הוספת זמן" : "לשאלה הבאה"}
      </ButtonGreen>

      <Flex dir='column' gap="5px" $gridRow="4/5">
        {words[step].other.map((_, i) => {
          return (
            <Result key={i} onClick={() => onResult(words[step].other[i])}>
              {isExploding && isCorrect(i) &&
                <Confetti
                /* force={1}
                duration={3000}
                particleCount={150}
                width={1000} */
                />}
              <AnimatedSquareNum
                setIsExploding={setIsExploding}
                count={count}
                isChoice={isChoiceCorrect()}
                isCorrect={choice ? isCorrect(i) : false}
                url={count > 0 ? square_yellow : isCorrect(i) ? square_green : square_red}
                color={count > 0 ? '#BC6320' : 'white'}
              >
                <NumResult>{i + 1}</NumResult>
              </AnimatedSquareNum>

              <Board>
                <TextResult color={count > 0 ? "white" : isCorrect(i) ? color.green : color.red}>
                  {words[step].other[i]}
                </TextResult>
              </Board>
            </Result>
          )
        })}
      </Flex>
    </Container >
  );
}

export default Results;


