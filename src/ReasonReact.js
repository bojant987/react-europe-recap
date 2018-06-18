// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Code,
    Deck,
    Fill,
    Fit,
    Heading,
    Image,
    Layout,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    GoToAction
} from 'spectacle';
import Back from './Back';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme(
    {
        primary: '#3F9FD7',
        secondary: '#D64337',
        tertiary: '#03A9FC',
        quartenary: '#000000',
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica',
    }
);

export default class ReasonReact extends React.Component {
    render() {
        return (
            <div>
                <Back setActive={() => {
                    this.props.setActive("home");
                    window.location.reload();
                }} />
                <Deck
                    transition={['spin', 'slide']}
                    transitionDuration={500}
                    theme={theme}
                >
                    <Slide>
                        <Heading textColor="quartenary" fit>Reason</Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary" fit>~ReasonML=?OCAML</Heading>
                    </Slide>
                    <Slide align="center">
                        <List textColor="quartenary">
                            <ListItem margin="10px 0">Type system with type inference</ListItem>
                            <Appear><ListItem margin="10px 0">Familiar syntax</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Functional, fancy stuff</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Controlled mutability</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Extensive data structures</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Pattern matching</ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary">Too good to be true?</Heading>
                    </Slide>
                    <Slide align="center">
                        <List textColor="quartenary">
                            <ListItem margin="10px 0">&#60;UNKNOWN SYNTAX ERROR&#62;</ListItem>
                            <Appear><ListItem margin="10px 0">For JS stuff we need to use interop</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">And interop is ugly</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Promises only through interop</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Dom manipulation beyond ugly</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Neither OCAML nor JS</ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary" fit>Reason + React</Heading>
                    </Slide>
                    <Slide align="center">
                        <List textColor="quartenary">
                            <ListItem margin="10px 0">ReasonML wrapper for React​</ListItem>
                            <Appear><ListItem margin="10px 0">Comes with redux like state management, for local and global state​</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Comes with lightweight router</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Controlled action mutations</ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide align="center">
                        <Heading textColor="quartenary" textSize={50}>CONS:</Heading>
                        <List textColor="quartenary">
                            <ListItem margin="10px 0">DOM and JSX handling – OCAML isn't meant to handle web UI​​</ListItem>
                            <Appear><ListItem margin="10px 0">Children, events, refs very counter intuitive​​</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Out of the box router lacks a lot of features of ReactJS counterparts​​</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Very few libraries​</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Bucklescript compiler not perfected​​​</ListItem></Appear>
                        </List>
                    </Slide>
                </Deck>
            </div>
        );
    }
}