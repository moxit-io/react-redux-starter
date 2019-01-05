import React from 'react';
import styled from 'styled-components';

import stackImage from './assets/images/stack.jpeg';

const Title = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
`;

const StackImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 560px;
`;

const App = () => (
    <div>
        <StackImage src={stackImage} alt="Stack" />
        <Title>All Ready. Rock-n-Roll!!</Title>
    </div>
);

export default App;
