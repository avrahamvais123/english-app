import React, { useContext } from 'react';
import { Context } from '../App';
import styled from 'styled-components';
import { Box, Grid, Flex, Text, Badge } from './styledComponents';
import time_icon from '../images/time-icon.png';
import money_icon from '../images/money-icon.png';
import Translator from './Translator';



const StyledHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  //grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
  z-index: 100;
  //background-color: red;
  //background: rgba(255, 255, 255, .2);
`;
const Wrapper = styled(Flex)`
  width: fit-content;
  height: 100%;
  padding: 0px 10px;
  justify-content: flex-end;
  //background-color: red;
  gap: 10px;
`;
const TimeIcon = styled.img`
  position: relative;
  height: 100%;
  z-index: 10;
`;


const Header = () => {
  const { money, time } = useContext(Context);

  return (
    <StyledHeader>
      <Text justify="flex-start">פאנגלית - לומדים אנגלית בכיף</Text>

      <Wrapper>
        <Flex>
          <Translator />
        </Flex>

        <Flex w="fit-content" justify="flex-end" bg="rgba(255,255,255, .3)" radius="5px" gap="10px" p="0px 10px 0px 0px">
          <Text>{money}</Text>
          <TimeIcon src={money_icon} />
        </Flex>

        <Flex w="fit-content" justify="flex-end" bg="rgba(255,255,255, .3)" radius="5px" gap="10px" p="0px 10px 0px 0px">
          <Text>{time}</Text>
          <TimeIcon src={time_icon} />
        </Flex>
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
