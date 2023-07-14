import React from 'react';
import { styled } from 'styled-components';
import { Button } from '@mantine/core';
import { Box, Grid, Flex, Text, Modal } from '../../components/styledComponents';
import { useLocation, useNavigate } from 'react-router-dom';
import Sparkle from 'react-sparkle';
import square_green from '../../GUI Kit/button-square-green.png';
import square_red from '../../GUI Kit/button-square-red.png';
import button_yellow from '../../GUI Kit/Button-yellow.png';
import button_red from '../../GUI Kit/Button-red.png';


const Container = styled(Grid)`
  grid-template-rows: 15% 10% 75%;
  gap: 5px;
`;
const GridResults = styled(Grid)`
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  padding: 20px;
`;
const TotalResult = styled(Flex)`
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  padding: 10px;
  background: transparent url(${prop => prop.url}) center center / 100% 100% no-repeat;
`;
const StyledButton = styled(Flex)`
  position: relative;
  width: fit-content;
  height: fit-content;
  font-size: 20px;
  padding: 10px 20px;
  background-color: #5C940D;
  color: #8A5142;
  font-family: 'Matador-Bold';
  transition: .5s;
  background: transparent url(${button_yellow}) center center / 100% 100% no-repeat;

  &:hover {
    color: white;
    background: transparent url(${button_red}) center center / 100% 100% no-repeat;
  }
`;

const Title = styled(Text)`
  width: fit-content;
  height: fit-content;
  color: red;
  font-size: 25px;
  font-weight: 500;
`;


const WordsTotal = ({
    resultProps: {
        corrects, setStep,
        addSeconds, setCorrects,
        setStartSpeak
    } }) => {

    const { pathname, state: { words } } = useLocation();
    const navigate = useNavigate();
    const newPath = pathname.split("/").slice(0, -1).join("/");


    const onDone = () => {
        setStep(0);
        addSeconds(15);
        setCorrects([]);
        setStartSpeak(false);
        navigate(`${newPath}/`);
    };


    return (
        <Container dir="column" p="10px" gap="5px">
            <Title>{`יש לך ${corrects.length} תשובות נכונות`}</Title>
            <StyledButton onClick={() => onDone()}
            >
                {/* <Sparkle
                    color={'#5C940D'}
                    count={50}
                /> */}
                התחלה מחדש
            </StyledButton>

            <GridResults dir="column">
                {words.map((item, i) => {
                    return (
                        <TotalResult
                            key={i}
                            url={corrects.includes(item.he) ? square_green : square_red}
                        >
                            {item.he}
                            <br />
                            {item.en}
                        </TotalResult>
                    )
                })}
            </GridResults>
        </Container>
    );
}

export default WordsTotal;
