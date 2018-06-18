// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import Battlefield1 from './Battlefield1';
import VisualRegression from './VisualRegression';
import ReasonReact from './ReasonReact';
import ApolloQL from './ApolloQL';
import Home from './Home';

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: '#000000',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quartenary: '#CECECE',
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica',
    }
);

export default class Presentation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 'home',
        };
    }

    setActive = active => {
        this.setState({ active });
        window.location.hash = '#/';
    };

    renderPresentation = presentation => {
        if (presentation === 'bf1') {
            return <Battlefield1 setActive={this.setActive} />;
        } else if (presentation === 'visReg') {
            return <VisualRegression setActive={this.setActive} />;
        } else if (presentation === 'reason') {
            return <ReasonReact setActive={this.setActive} />;
        } else if (presentation === 'apollo') {
            return <ApolloQL setActive={this.setActive} />;
        } else if (presentation === 'home') {
            return <Home setActive={this.setActive} />;
        }

        return null;
    };

    render() {
        const { active } = this.state;

        return this.renderPresentation(active);
    }
}
