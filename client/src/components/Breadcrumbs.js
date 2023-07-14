import React, { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Grid, Flex, Text, Modal } from './styledComponents';
import { styled } from "styled-components";
import { colors, fadeColor, whiteColor } from "./colors";
import longBoard from '../GUI Kit/long-board.png';
import plank from '../GUI Kit/plank5.png';


const Container = styled(Modal)`
  top: 10%;
  left: 100%;
  transform: translate(-120%, 0%);
  width: fit-content;
  height: fit-content;
  gap: 7px;
  padding: 10px 20px;
  border-radius: 7px;
  background: transparent url(${plank}) center center / 100% 100% no-repeat;
`;
const First = styled(Flex)`
  color: white;
`;
const Other = styled(Flex)`
  color: white;
`;
const Last = styled(Flex)`
  color: #08BF76;
`;
const Separator = styled(Flex)`
  width: 5px;
  height: 12px;
  background-color: ${prop => prop.bg || "white"};
  transform: rotate(25deg);
`;



const TranslateNavigate = ({ value }) => {
    if (value === "Options") {
        return "אפשרויות";
    }
    else if (value === "Words") {
        return "מילים";
    }
    else if (value === "Start") {
        return "התחלה";
    }
    else if (value === "Results") {
        return "שאלות";
    }
    return value;
};


function Breadcrumbs() {
    const navigate = useNavigate();
    const location = useLocation();

    const pathnames = location.pathname.split("/").filter((x) => x);


    return (
        <Container>
            <First onClick={() => navigate('/')}>בית</First>
            {pathnames.map((value, index) => {
                const isLast = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                return isLast ? (
                    <Fragment key={to}>
                        <Separator bg="#08BF76" />
                        <Last>
                            <TranslateNavigate value={value} />
                        </Last>
                    </Fragment>
                ) : (
                    <Fragment key={to}>
                        <Separator />
                        <Other onClick={() => navigate(to)}>
                            <TranslateNavigate value={value} />
                        </Other>
                    </Fragment>
                );
            })}
        </Container>
    );
}

export default Breadcrumbs;
