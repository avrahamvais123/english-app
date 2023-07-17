import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, Link, Outlet } from "react-router-dom"
import styled from 'styled-components';
import { Box, Grid, Flex, Text } from '../components/styledComponents';
import sign from '../images/sign.png'



const StyledCard = styled(Flex)`
  direction: rtl;
  border-radius: 0;
  position: relative;
  background: transparent url(${sign}) center center/100% 100% no-repeat;
`
const Title = styled(Text)`
  font-size: ${prop => prop.fs || '55px'};
  font-weight: bold;
  line-height: ${prop => prop.line_h || '30px'};
  //font-family: 'Nectarina';
  letter-spacing: 2px;
`
const Description = styled(Text)`
  font-size: 20px;
  line-height: 22px;
  //font-family: 'Malkush';
  width: 100%;
  height: 100%;
`
const StyledText = styled(Text)`
  position: relative;
  transform: translate(0%, -20%);
  font-size: 70px;
  font-weight: 500;
  //font-family: 'Nectarina';
  color: #ffc388;

  &::before {
    content: 'בחירת אפשרות';
    width: 100%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    //color: #C8493A;
    color: #C56F32;
    font-weight: 500;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, .1);
  }
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  width: 80%;
  height: 80%;
  display: grid;
  place-items: center;
  grid-template-rows: 40% 60%;
`



const Cards = ({ i }) => {

    if (i == 1) {
        return (
            <StyledLink to="/Options/Words">
                <Title>מילים</Title>
                <Description>
                    הרחבת <br />
                    אוצר המילים <br />
                    באנגלית
                </Description>
            </StyledLink>
        )
    }
    else if (i == 2) {
        return (
            <StyledLink to="/Options/Sentences-Options">
                <Title>משפטים</Title>
                <Description>
                    השלמת <br />
                    משפטים חסרים <br />
                    באנגלית
                </Description>
            </StyledLink>
        )
    }
    else if (i == 3) {
        return (
            <StyledLink to="/Options/ByHear-Options">
                <Title line_h="45px">לפי שמיעה</Title>
                <Description>
                    הרחבת <br />
                </Description>
            </StyledLink>
        )
    }
    else if (i == 4) {
        return (
            <StyledLink to="/Options">
                <Title>{i}</Title>
            </StyledLink>
        )
    }
    else if (i == 5) {
        return (
            <StyledLink to="/Options">
                <Title>{i}</Title>
            </StyledLink>
        )
    }
    else if (i == 6) {
        return (
            <StyledLink to="/Options">
                <Title>{i}</Title>
            </StyledLink>
        )
    }
}

const Options = () => {

    return (
        <>
            <Grid direction="rtl" max_w="800px" rows="10% 90%">
                <StyledText>בחירת אפשרות</StyledText>

                <Grid columns="repeat(3, 1fr)" rows="repeat(2, 1fr)" gap="15px" p="30px">
                    {[...Array(6)].map((card, i) =>
                        <StyledCard key={i}>
                            <Cards i={i + 1} />
                        </StyledCard>
                    )}
                </Grid>
            </Grid>
        </>
    );
}

export default Options;
