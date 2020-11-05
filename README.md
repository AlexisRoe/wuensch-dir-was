# Building Wish List

The week-5-project of the "Neue Fische" Bootcamp. Learning React Routing, styled Components, API Usage

- [React Routing](https://reactrouter.com/) (Route, Switch, Link)

        import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

        export default function App() {
        return (
            <Router>
            <div>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/users">Users</Link>
                    </li>
                </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                </Switch>
            </div>
            </Router>
        );
        }

        function Home() {
        return <h2>Home</h2>;
        }

        function About() {
        return <h2>About</h2>;
        }

        function Users() {
        return <h2>Users</h2>;
        }

- styled components
- [Composition vs. Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

        import PropTypes from 'prop-types';

        class Greeting extends React.Component {
        render() {
            return (
            <h1>Hello, {this.props.name}</h1>
            );
        }
        }

        Greeting.propTypes = {
        name: PropTypes.string
        };

- ...

## Adding GlobalStyles to Storybook (all pages & components)

.storybook > preview.js

        import React from 'react';
        import { BrowserRouter as Router } from 'react-router-dom';
        import GlobalStyle from '../src/GlobalStyle';

        export const decorators = [
        (Story) => (
            <Router>
            <GlobalStyle />
            <Story />
            </Router>
        ),
        ];

        export const parameters = {
        actions: { argTypesRegex: '^on[A-Z].*' },
        };

## Un-used Variables

Eslint warnings through development and committing AND errors when pushing it

.eslintrc.js

        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'no-unused-vars': 'warn',
        'import/order': 'warn',
        'import/newline-after-import': 'warn',
    },
    };

package.json

    "build:storybook": "build-storybook -s public --no-dll -o build/storybook",
        "build": "npm run build:app && npm run build:storybook",
        "stylelint": "stylelint \"**/*.{js,jsx,css}\"",
        "eslint": "eslint \"**/*.{js,jsx}\" --max-warnings=0",
        "prettier": "prettier --check \"**/*.{js,jsx,ts,tsx,md,mdx,html,css,json}\"",
        "test:watch": "react-scripts test",
        "test": "react-scripts test --watchAll=false && npm run stylelint && npm run eslint && npm run prettier",

## Json Server

[Learning to use Json Server](https://github.com/typicode/json-server)

        const [lists, setLists] = useState(null);

        useEffect(async () => {
            const newLists = await getLists();
            setLists(newLists);
        }, []);

        return (
            <>
            <ListContainer>
                {lists?.map((list) => (
                <Wishlistitem key={list.id} id={list.id} title={list.title} />
                ))}
            </ListContainer>
