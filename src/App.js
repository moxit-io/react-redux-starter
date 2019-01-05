import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
`;

const App = () => (
    <div>
        <Title>All Ready. Let&apos;s Rock-n-Roll!!</Title>
        <h3>Features:</h3>
        <ul>
            <li>
                <span role="img" aria-label="emoji">
                    ⚛
                </span>
                React — React with create-react-app
            </li>
            <li>
                <span role="img" aria-label="emoji">
                    ♻
                </span>
                Redux — State Management, with redux dev tools
            </li>
            <li>
                <span role="img" aria-label="emoji">
                    💅
                </span>
                CSS — Styled Components
            </li>
            <li>
                <span role="img" aria-label="emoji">
                    ✅
                </span>
                Tests — Jest
            </li>
            <li>
                <span role="img" aria-label="emoji">
                    💖
                </span>
                Lint — ESlint
            </li>
            <li>
                <span role="img" aria-label="emoji">
                    🐶
                </span>
                Husky — Prevent bad commits
            </li>
        </ul>
    </div>
);

export default App;
