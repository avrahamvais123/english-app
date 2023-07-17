import React from 'react';
import { Route, Routes } from "react-router-dom"
import Layout from './Layout';
import Home from './screens/Home';
import Options from './screens/Options';
import Words from './screens/Words/Words';
import ErrorPage from './ErrorPage';


const GameRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="Options" element={<Options />} />
                <Route path="Options/Words/*" element={<Words />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}

export default GameRoutes;
