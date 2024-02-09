import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Navbar from './components/Navbar';
import Main from './components/Main';
import ToastNotifications from './components/ToastNotifications';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (!users.length) {
            axios
                .get('https://api.mixcloud.com/spartacus/following?limit=18')
                .then((res) => {
                    setUsers(res.data.data);
                });
        }
    }, [users]);

    const interaciveUsers = users.slice(10, 18);
    const liveUsers = users.slice(0, 10);

    return (
        <Container>
            <Navbar />
            <Main users={interaciveUsers} />
            <ToastNotifications liveUsers={liveUsers} />
        </Container>
    );
};

export default App;
