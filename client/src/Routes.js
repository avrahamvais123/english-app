import React from 'react';
import { Route, Routes } from "react-router-dom"
import Layout from './Layout';
import Options from './screens/Options';
import Words from './screens/Words/Words';
import Sample from './screens/Words/Sample';
import ErrorPage from './ErrorPage';


const GameRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="Options" element={<Options />} />
                <Route path="Options/Words/*" element={<Words />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}

export default GameRoutes;
