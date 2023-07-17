import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import { Box, Grid, Flex, Text } from './components/styledComponents';
import { motion, LayoutGroup } from "framer-motion";
import _ from 'lodash';



const List = styled(motion.li)`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: red;
  color: white;
  list-style: none;
`;


export default function Test() {
    const [items, setItems] = useState([
        { value: 1 },
        { value: 2 },
        { value: 3 }
    ]);

    const onClick = (i) => {
        setItems(_.without(items, items[i]))
        console.log("_.without(items, i: ", _.without(items, items[i]))
    }

    return (
        <LayoutGroup>
            <motion.ul layout>
                {items.map((item, i) => (
                    <List
                        layout
                        key={i}
                        onClick={() => onClick(i)}
                    >
                        {item.value}
                    </List>
                ))}
            </motion.ul>
        </LayoutGroup>
    );
}
