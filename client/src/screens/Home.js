import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Box, Grid, Flex, Text } from '../components/styledComponents';


const Title = styled(Flex)`
  font-size: 100px;
  width: fit-content;
  height: fit-content;
`;
const Subtitle = styled(Flex)`
  font-size: 50px;
  width: fit-content;
  height: fit-content;
  margin-bottom: 30px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  background-color: red;
`;
const Button = styled(Flex)`
  font-size: 30px;
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: red;
`;

const Home = () => {


    return (
        <Flex dir='column'>
            <Title>
                ברוכים הבאים
            </Title>
            <Title>
                לפאנגלית
            </Title>
            <Subtitle>
                ללמוד אנגלית בכיף
            </Subtitle>
            <StyledLink to="/Options">
                התחל כאן
            </StyledLink>
        </Flex>
    );
}

export default Home;
