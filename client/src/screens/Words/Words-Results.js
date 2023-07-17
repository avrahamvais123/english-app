import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Results from './Results';
import Countdown from '../../components/Countdown';
import { Box, Grid, Flex, Text, Modal } from '../../components/styledComponents';
import { colors, lightColor, primary, sconedColor } from '../../components/colors';
import { useLocation } from 'react-router-dom';


const Headers = styled(Modal)`
  top: 7%;
  width: fit-content;
  height: fit-content;
  color: ${primary};
  gap: 200px;
  z-index: 20;
`;


const WordsResults = ({ resultProps, resultProps: { step, count, setCount } }) => {
    const { state: { words } } = useLocation();


    return (
        <>
            <Results words={words} props={resultProps} />
            <Headers>
                <Text fs="18px" h="fit-content">
                    {`${step + 1}/${words.length}`}
                </Text>
                <Text fs="18px" h="fit-content">
                    <Countdown color={primary} count={count} onCountChange={setCount} />
                </Text>
            </Headers>
        </>
    );
}

export default WordsResults;
