import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { Howl } from 'howler';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Grid, Flex, Text, Modal } from '../../components/styledComponents';
import { colors, lightColor, primaryColor, sconedColor } from '../../components/colors';
import Button_green from '../../GUI Kit/Button-green.png'


const ButtonStart = styled(Flex)`
  width: 100px;
  height: 50px;
  background-color: #08BF76;
  border-radius: 5px;
  font-size: 20px;
  background: transparent url(${Button_green}) center center / 100% 100% no-repeat;
  z-index: 10;

  &:hover {
    background-color: ${prop => prop.$hoverColor};
  }

`;
const Title = styled(Flex)`
  font-size: 50px;
  z-index: 20;
`;


const WordsStart = () => {
    const [words, setWords] = useState({});

    const location = useLocation();
    const { option } = location.state;
    
    const navigate = useNavigate();
    const newPath = location.pathname.split("/").slice(0, -1).join("/");


    const generateWords = (selectedWord, remainingWords) => {
        // Shuffle the array and choose three different words
        let otherWords = _.sampleSize(remainingWords, 3).map(word => word.he);

        // Add the translated word to the other words
        otherWords.push(selectedWord.he);

        return ({
            en: selectedWord.en,
            he: selectedWord.he,
            pronunciation: selectedWord.pronunciation,
            other: _.shuffle(otherWords)
        })
    };
    const generate_10_words = () => {
        let words = [];

        let wordsForRound = _.cloneDeep(option.words); // Make a copy to avoid modifying original array

        for (let i = 0; i < 10; i++) {
            let selectedWord = _.sample(wordsForRound);
            wordsForRound = _.without(wordsForRound, selectedWord); // Remove selected word from options

            let gameData = generateWords(selectedWord, wordsForRound); // Generate game data for this word
            words.push(gameData);
        }

        setWords(words); // Update the state variable
        return words;
    };
    const onStart = () => {
        const start_sound = new Howl({ src: ['/sounds/Win-Game-Coin.mp3'] });
        start_sound.play();
        
        const wordsForRound = generate_10_words();
        console.log("wordsForRound: ", wordsForRound);
        console.log("item: ", option);
        navigate(`${newPath}/Results`, { state: { title: option.title, words: wordsForRound } });
    }


    return (
        <Flex dir="column" justify="space-between" p="25%">
            <Title w="fit-content" h="fit-content" color="#08BF76"
            >{option.title}
            </Title>
            <ButtonStart onClick={() => onStart()}
            >התחל
            </ButtonStart>
        </Flex>
    );
}

export default WordsStart;
