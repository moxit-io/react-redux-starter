# Installation

First, install the following dev dependencies:

```console
yarn add --dev eslint eslint-config-airbnb eslint-config-prettier eslint-loader eslint-plugin-babel eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react redux-logger husky lint-staged pretty-quick
```

Then, in our root folder, create a file called `.eslintrc` and put the following code there:

```json
{
    "parser": "babel-eslint",
    "extends": ["airbnb", "prettier", "prettier/react"],
    "plugins": ["prettier"],
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "es6": true,
        "jest": true
    },
    "rules": {
        "indent": ["error", 4],
        "space-before-function-paren": "off",
        "react/prefer-stateless-function": "warn",
        "react/jsx-one-expression-per-line": "off",
        "import/no-extraneous-dependencies": [
            "error",
            { "devDependencies": true }
        ],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "linebreak-style": "off",
        "global-require": "off",
        "semi": "warn",
        "arrow-body-style": "off",
        "no-multiple-empty-lines": ["warn", { "max": 1 }],
        "no-unused-expressions": [
            "error",
            {
                "allowTaggedTemplates": true
            }
        ],
        "no-underscore-dangle": [
            2,
            { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }
        ]
    }
}
```

## Prettier

Prettier is basically a code formatter. It parses your code and re-prints it with its own rules that take the maximum line length into account, wrapping code when necessary.

You just need to install it:

```console
yarn add --dev prettier
```

And in our root folder, create a file called `.prettierrc` and put the following code there:

```json
{
    "printWidth": 80,
    "tabWidth": 4,
    "semi": true,
    "singleQuote": true,
    "bracketSpacing": true
}
```

## Redux

Redux makes it easy to manage the state of your application.

First, we’re going to install some dependencies:

```console
yarn add redux react-redux redux-thunk
```

Then, we’re going to create our Redux store, and put some state there. In our `src/redux/store` folder, create an index.js file and put that following code there:

```js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers';

const middleware = applyMiddleware(thunk, logger);

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    compose(
        middleware,
        reduxDevTools
    )
);

export default store;
```

Last, we’re gonna to our index.js in our src folder, and wrap the code with the `<Provider />` and pass our store as props to make it available to our application.

It’s going to be like this:

```js
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
```

## React Router

React Router is the standard routing library for React. Basically, it keeps your UI in sync with the URL. We’re gonna use it in our boilerplate, so install it:

```console
yarn add react-router-dom
```

After that, go to our `index.js` in our `src` folder and wrap all the code there with the `<BrowserRouter>`.

Our index.js in our src folder it’s going to end up like this:

```js
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
```

## Styled Components

Styled Components makes CSS easy for everyone, as it helps you organize your React project. Its objective is to write more small and reusable components. We’re gonna use it, and if you want to learn more about it, read up [here.](https://www.styled-components.com)

First, install it:

```console
yarn add styled-components
```

Then, in our App.js file inside our components folder, we’re going to create a simple title using Styled Components. Our title is going to be like this:

```js
const Title = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-weight: 700;
`;
```
