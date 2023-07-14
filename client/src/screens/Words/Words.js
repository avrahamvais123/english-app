import React, { useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { Context } from '../../App';
import { Outlet, useOutletContext, useRoutes } from "react-router-dom";
import styled from 'styled-components';
import { Box, Grid, Flex, Text, Modal } from '../../components/styledComponents';
import _ from 'lodash';
import * as allWords from '../../words/allWords'
import { speakText } from '../../components/Speech';
import panel from '../../GUI Kit/panel.png'
import WordsOptions from './Words-Options';
import WordsStart from './Words-Start';
import WordsResults from './Words-Results';
import WordsTotal from './Words-Total';


const PanelContainer = styled(Flex)`
  position: relative;
  width: clamp(200px, 50%, 430px);
  height: 75%;
  //background-color: rgba(0, 255, 0, .5);
`;
const Panel = styled.img`
  width: 100%;
  //width: clamp(200px, 40%, 400px);
`;
const Container = styled(Modal)`
  width: clamp(200px, 85%, 430px);
  display: grid;
  height: 100%;
  //background-color: rgba(255, 0, 0, .5);
`;


const Words = () => {
    const { setMoney } = useContext(Context);
    const [corrects, setCorrects] = useState([]);
    const [count, setCount] = useState(15);
    const [step, setStep] = useState(0);
    const [startSpeak, setStartSpeak] = useState(false);
    const [choice, setChoice] = useState('');
    const [wordsArray, setWordsArray] = useState([]);
    const initialCount = 15;


    const getAllWords = () => {
        let obj = {};
        for (let key in allWords) {
            obj = { ...obj, [key]: allWords[key] }
        }
        setWordsArray(obj);
    };
    const addSeconds = (secondsToAdd) => {
        setCount((currentCount) => {
            const newCount = currentCount + secondsToAdd;
            return newCount > initialCount ? initialCount : newCount;
        });
    };

    const resultProps = {
        count, setMoney,
        initialCount, addSeconds,
        setCorrects, setCount,
        choice, setChoice,
        step, setStep, corrects,
        startSpeak, setStartSpeak
    };

    useEffect(() => { getAllWords() }, []);


    let element = useRoutes([
        { path: "/", element: <WordsOptions wordsArray={wordsArray} /> },
        { path: "Start", element: <WordsStart /> },
        { path: "Results", element: <WordsResults resultProps={resultProps} step={step} count={count} setCount={setCount} /> },
        { path: "Total", element: <WordsTotal resultProps={resultProps} /> },
    ]);


    return (
        <PanelContainer>
            <Panel src={panel} />
            <Container>{element}</Container>
        </PanelContainer>
    );
}

export default Words;


{/*
 <Outlet context={resultProps}>{element}</Outlet> 
*/ }

/* {
    show === 'options' ?
    <Flex>
        options
    </Flex>
    :
    show === 'start' ?
        <Flex>
            <Title>פירות</Title>
            <ButtonStart
                $hoverColor={lightColor('yellowgreen')}
                onClick={() => onStart()}
            >התחל
            </ButtonStart>
        </Flex>
        :
        show === 'results' ?
            <>
                <Results props={resultProps} />
                <Headers>
                    <Text fs="18px" h="fit-content">
                        {`${step + 1}/${words.length}`}
                    </Text>
                    <Text fs="18px" h="fit-content">
                        <Countdown color={primaryColor} count={count} onCountChange={setCount} />
                    </Text>
                </Headers>
            </>
            :
            show === 'total' ?
                <Flex>
                    <Text fs="25px" weight="500">{`יש לך ${corrects.length} תשובות נכונות`}</Text>
                    <StyledButton onClick={() => onDone()}
                    >התחלה מחדש
                    </StyledButton>

                    <Flex dir="column">
                        {words.map((item, i) => {
                            return (
                                <TotalResult key={i} color={corrects.includes(item.he) ? colors['lime-9'] : colors['red-9']}
                                >{`${item.he} - ${item.en}`}
                                </TotalResult>
                            )
                        })}
                    </Flex>
                </Flex>
                : null
} */