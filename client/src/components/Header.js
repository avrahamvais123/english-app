import React, { useContext } from 'react';
import { Context } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Grid, Flex, Text, Modal } from './styledComponents';
import money_icon from '../GUI Kit/money-icon.png';
import time_icon from '../GUI Kit/stopwatch.png';
import Translator from './Translator';
import Breadcrumbs from './Breadcrumbs';



const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
  //border-bottom: 1px solid white;
  z-index: 100;
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
const ContainerModal = styled(Modal)`
  top: 200%;
  left: 90%;
  width: fit-content;
  gap: 10px;
  background-color: red;
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
