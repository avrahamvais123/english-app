import React, { useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { Context } from '../App';
import styled, { css } from 'styled-components';
import { Box, Grid, Flex, Text, Modal } from '../components/styledComponents';
import sign_4 from '../images/sign-4.png'
import inner_sign from '../images/inner-sign.png'
import star from '../images/star.png'
import voice_icon from '../images/voice-button.png'
import { fruitWords } from '../words/words'
import Countdown from '../components/Countdown';
import _ from 'lodash';
import { speakText } from '../components/Speech';
import { ReactComponent as addTime } from '../images/add-time-1.svg';
import { redirect } from 'react-router';
import { lightColor } from '../components/styles';
import { animated, useSpring, config } from '@react-spring/web';
//import { Button } from 'antd';
import { Button } from '@mantine/core';
import { colors } from '../components/colors';
import { Howl } from 'howler';



const Sign = styled.img`
  width: 100%;
  height: 100%;
`;
const ContainerResults = styled(Grid)`
  position: absolute;
  top: 61%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 50%;
  gap: 7px;
`;
const SignContainer = styled.div`
  position: relative;
`;
const NumberContainer = styled(animated.div)`
  
`;
const Word = styled(Modal)`
  top: 23%;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: bold;
`;
const Result = styled(Flex)`
  position: relative;
  font-size: 25px;
  font-weight: bold;
  color: #BC6320;
  background: transparent url(${inner_sign}) center center/100% 100% no-repeat;
`;
const Star = styled.img`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;
const NumResult = styled(Flex)`
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: 0%;
  left: 50%;
  transform: translate(-55%, -60%);
  color: ${prop => prop.color || '#EE8A17'};
  font-size: ${prop => prop.fs || '20px'};
  font-weight: bold;
  filter: drop-shadow(0px 0px 3px white);
  z-index: 11;
`;
const Headers = styled(Word)`
  top: 10%;
  left: 50%;
  display: flex;
  height: fit-content;
  //border: 1px solid red;
  z-index: 10;
`;
const ButtonStart = styled(Modal)`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellowgreen;
  border-radius: 5px;
  font-size: 20px;
  z-index: 10;

  &:hover {
    background-color: ${prop => prop.$hoverColor};
  }

`;
const AddTime = styled(Flex)`
  width: 100%;
  height: 100%;
  background-color: red;
  border-radius: 5px;
  font-size: 20px;
  font-family: 'Malkush';
  &:hover {
    background-color: ${prop => prop.$hoverColor};
  }
`;
const NextWord = styled(Flex)`
  width: 100%;
  height: 100%;
  background-color: orange;
  border-radius: 5px;
  font-size: 20px;
  font-family: 'Malkush';
  &:hover {
    background-color: ${prop => prop.$hoverColor};
  }
`;
const VoiceButton = styled(Modal)`
  top: 25%;
  left: 75%;
  width: 30px;
  height: 30px;
  z-index: 20;
  background: transparent url(${voice_icon}) center center/cover no-repeat;
`;
const TextResult = styled(Text)`
  color: ${prop => prop.$color};
`;
const ContainerTotal = styled(Grid)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  //grid-template-rows: 10% 80% 10%;
  gap: 5px;
`;
const StyledButton = styled(Button)`
  background-color: ${colors['teal-9']};
  color: ${colors['teal-0']};
  transition: .5s;

  &:hover {
    background-color: ${colors['teal-7']};
  }
`;



const Words = () => {
    const { setMoney } = useContext(Context);
    const [steps, setSteps] = useState(0);
    const [words, setWords] = useState({});
    const [corrects, setcorrects] = useState([]);
    const [startSpeak, setStartSpeak] = useState(false);
    const [show, setShow] = useState('start');
    const [count, setCount] = useState(15);
    const initialCount = 15;

    useEffect(() => {
        console.log("steps: ", steps);
        console.log("words: ", words);
    }, [words, steps]);


    const generateGameData = (selectedWord) => {
        let remainingWords = _.without(fruitWords, selectedWord);
    
        // First, shuffle the array and choose three different words
        let otherWords = _.shuffle(remainingWords).slice(0, 3).map(word => word.he);
    
        // Add the translated word to the other words
        otherWords.push(selectedWord.he); 
    
        return ({
            en: selectedWord.en,
            he: selectedWord.he,
            other: otherWords
        })
    };
    
    const generateWords = () => {
        let words = [];
    
        let wordsForRound = _.cloneDeep(fruitWords); // Make a copy to avoid modifying original array
    
        for (let i = 0; i < 10; i++) {
            let selectedWord = _.sample(wordsForRound);
            wordsForRound = _.without(wordsForRound, selectedWord); // Remove selected word from options
    
            let gameData = generateGameData(selectedWord); // Generate game data for this word
            words.push(gameData);
        }
    
        setWords(words); // Update the state variable
    };
    

    useEffect(() => {
        console.log("corrects: ", corrects.join(','));

        if (startSpeak) {
            const text = `יש לך ${corrects.length} תשובות נכונות ואלו הן: ${corrects.join(',')}`;
            console.log(text);
            //speakText(text);
            setMoney(corrects.length * 100);
        }
    }, [corrects]);


    // <--- functions ---> //
    const addSeconds = (secondsToAdd) => {
        setCount((currentCount) => {
            const newCount = currentCount + secondsToAdd;
            return newCount > initialCount ? initialCount : newCount;
        });
    };
    const onStart = () => {
        const start_sound = new Howl({ src: ['/sounds/Win-Game-Coin.mp3'] });

        generateWords();
        start_sound.play();
        setShow('results');
        setSteps(0);
        addSeconds(15);
        setcorrects([]);
        setStartSpeak(false);
    }
    const onResult = (result) => {
        const correct_sound = new Howl({ src: ['/sounds/Collect-Item.mp3'] });
        const wrong_sound = new Howl({ src: ['/sounds/Soft-Fail.mp3'] });

        if (count > 0) {
            // אם התשובה נכונה
            if (result == words[steps].he) {
                console.log(`יפה מאד ${words[steps].he} היא התשובה הנכונה`);
                setcorrects(prev => [...prev, words[steps].he]);
                setMoney(prev => prev + 100);
                correct_sound.play();
            }
            else {
                console.log(`זו לא התשובה הנכונה`)
                setcorrects(prev => ([...prev]));
                wrong_sound.play();
            }

            if (steps == steps.length && !startSpeak) {
                setStartSpeak(true);
            }

            setCount(0);
        }
    };
    const onDone = () => {
        setShow('start');
        setSteps(prev => prev + 1);
    }
    const changeColor = (i) => {
        if (count == 0) {
            if (words[steps].other[i] == words[steps].he) return "yellowgreen";
            else return 'red';
        }
    };
    const iscorrect = (i) => {
        if (words[steps].other[i] == words[steps].he) { return true }
        else { return false }
    };

    // <--- animation ---> //
    const spring_correct = useSpring({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        to: {
            position: 'absolute',
            top: '50%',
            left: '100%',
            transform: count > 0 ?
                'translate(-50%, -50%) rotate(0deg)' :
                'translate(0%, 0%) rotate(360deg)',
        },
        config: config.stiff
    })
    const spring_Others = useSpring({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        to: {
            scale: count > 0 ? 1 : 0,
            position: 'absolute',
            top: '50%',
            left: '100%',
            transform: count > 0 ? 'translate(-50%, -50%)' : 'translate(0%, 0%)',
        },
        config: config.stiff
    })


    return (
        <Flex dir="column" position="relative">
            <SignContainer>
                <Sign src={sign_4} />
                {show === 'start' ?
                    <ButtonStart
                        $hoverColor={lightColor('yellowgreen')}
                        onClick={() => onStart()}
                    >התחל
                    </ButtonStart>
                    :
                    show === 'results' ?
                        <>
                            <Headers>
                                <Text fs="18px" h="fit-content">
                                    {`${steps}/${words.length}`}
                                </Text>
                                <Text fs="18px" h="fit-content">
                                    <Countdown count={count} onCountChange={setCount} />
                                </Text>
                            </Headers>

                            <Word>{words[steps].en}</Word>
                            {/* <VoiceButton onClick={() => speakText(words.en} /> */}

                            <ContainerResults>
                                {count > 0
                                    ?
                                    <AddTime // הוספת זמן
                                        $hoverColor={lightColor('red')}
                                        onClick={() => {
                                            addSeconds(5);
                                            setMoney(prev => prev - 50);
                                        }}
                                    >הוספת זמן
                                    </AddTime>
                                    :
                                    <NextWord // העברת לשאלה הבאה
                                        $hoverColor={lightColor('orange')}
                                        onClick={() => {
                                            if (steps < words.length - 1) {
                                                setSteps(prev => prev + 1);
                                                addSeconds(15);
                                            }
                                            else {
                                                setShow('total');
                                            }
                                        }}
                                    >לשאלה הבאה
                                    </NextWord>}

                                {words[steps].other.map((_, i) => {
                                    return (
                                        <Result key={i} onClick={() => {
                                            onResult(words[steps].other[i])
                                        }}>
                                            <TextResult
                                                $color={() => count > 0 ? '#BC6320' : changeColor(i)}>
                                                {words[steps].other[i]}
                                            </TextResult>

                                            <NumberContainer style={iscorrect(i) ? spring_correct : spring_Others}>
                                                <NumResult>{i + 1}</NumResult>
                                                <Star src={star} />
                                            </NumberContainer>
                                        </Result>
                                    )
                                })}
                            </ContainerResults>
                        </>
                        :
                        show === 'total' ?
                            <ContainerTotal>
                                <Text fs="25px" weight="500">כל התשובות</Text>
                                <StyledButton onClick={() => onDone()}
                                >התחלה מחדש
                                </StyledButton>

                                <Flex dir="column">
                                    {words.map((item, i) => {
                                        return <Text
                                            key={i}
                                            w="80%"
                                            weight="500"
                                            radius="5px"
                                            color={corrects.includes(item.he) ? colors['teal-9'] : colors['red-9']}
                                        >
                                            {`${item.he} - ${item.en}`}
                                        </Text>
                                    })}
                                </Flex>
                            </ContainerTotal>
                            : null
                }
            </SignContainer>
        </Flex >
    );
}

export default Words;

