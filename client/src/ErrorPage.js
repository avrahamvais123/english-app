import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Box, Grid, Flex, Text } from '../components/styledComponents';



const ErrorPage = () => {
    return (
        <Grid>
            <Text fs="50px" weight="bold"
            >אופס ...
            </Text>
            <Text fs="20px">הדף לא נמצא</Text>
        </Grid>
    );
}

export default ErrorPage;
