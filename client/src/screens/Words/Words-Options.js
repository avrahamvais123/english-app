import React from 'react';
import { styled } from 'styled-components';
import { Flex, Grid } from '../../components/styledComponents';
import { useNavigate } from 'react-router-dom';
import square_yellow from '../../GUI Kit/button-square-yellow.png';
import square_green from '../../GUI Kit/button-square-green.png';
import { ScrollArea } from '@mantine/core';


const Container = styled(Grid)`
  //grid-template-columns: repeat(3, 1fr);
  //grid-template-rows: auto;
  padding: 20px;
  gap: 5px;
`;
const StyledScroll = styled(Grid)`
  width: 300px;
  height: 250px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  padding: 15px;
  gap: 5px;
  //overflow-y: auto;
`;
const Option = styled(Flex)`
  //width: 100%;
  aspect-ratio: 2/1;
  font-size: 20px;
  border-radius: 5px;
  color: #8A5142;
  transition: .5s;
  background: transparent url(${square_yellow}) center center / 100% 100% no-repeat;

  &:hover {
    color: white;
    background: transparent url(${square_green}) center center / 100% 100% no-repeat;
  }
`;
const Title = styled(Flex)`
  font-size: 40px;
  font-family: 'Matador-Bold';
  color: #3F1C18;
`;


const WordsOptions = ({ wordsArray }) => {
  const navigate = useNavigate();

  const onOption = (option, i) => {
    console.log("item: ", option);
    navigate('Start', { state: { wordsArray, index: i, option } });
  }

  return (
    <Container>
      <Title>בחר אפשרות</Title>
      <StyledScroll>
        {Object.values(wordsArray)
          .map((option, i) =>
            <Option key={i} onClick={e => onOption(option, i)}>
              {option.title}
            </Option>
          )}
      </StyledScroll>
    </Container>
  );
}

export default WordsOptions;
