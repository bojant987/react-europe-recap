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
    Link,
    GoToAction
} from 'spectacle';
import Back from './Back';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme(
    {
        primary: '#a5d3a6',
        secondary: '#a09378',
        tertiary: '#03A9FC',
        quartenary: '#ffffff',
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica',
    }
);

export default class VisualRegression extends React.Component {
    render() {
        return (
            <div>
                <Back setActive={() => {
                    this.props.setActive("home");
                    window.location.reload();
                }} />
                <Deck
                    transition={['fade', 'spin']}
                    transitionDuration={500}
                    theme={theme}
                >
                    <Slide>
                        <Heading textColor="quartenary" fit>Visual regression</Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary">Why do it?</Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary" fit>Okay, but how?</Heading>
                    </Slide>
                    <Slide align="center">
                        <List textColor="quartenary">
                            <ListItem margin="10px 0">
                                Storybook -
                                &nbsp;<Link href="https://storybook.js.org/">https://storybook.js.org/</Link>
                            </ListItem>
                            <Appear>
                                <ListItem margin="10px 0">
                                    Loki -
                                    &nbsp;<Link href="https://loki.js.org/">https://loki.js.org/</Link>
                                </ListItem>
                            </Appear>
                        </List>
                        <Appear><Text textColor="quartenary">Or</Text></Appear>
                        <List textColor="quartenary">
                            <Appear>
                                <ListItem margin="10px 0">
                                    Storybook -
                                    &nbsp;<Link href="https://storybook.js.org/">
                                    https://storybook.js.org/
                                </Link>
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="10px 0">
                                    storybook-chrome-screenshot -
                                    &nbsp;<Link href="https://github.com/tsuyoshiwada/storybook-chrome-screenshot">
                                    https://github.com/tsuyoshiwada/storybook-chrome-screenshot
                                </Link>
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="10px 0">
                                    reg-suit -
                                    &nbsp;<Link href="https://reg-viz.github.io/reg-suit/">
                                    https://reg-viz.github.io/reg-suit/
                                </Link>
                                </ListItem>
                            </Appear>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary">Demo time</Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary">PROS:</Heading>
                        <List textColor="quartenary">
                            <ListItem margin="10px 0">
                                Won't fail on adding new features (probably)
                            </ListItem>
                            <Appear>
                                <ListItem margin="10px 0">
                                    Screenshot of every state of component
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="10px 0">
                                    Similar to unit tests
                                </ListItem>
                            </Appear>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary">CONS:</Heading>
                        <List textColor="quartenary">
                            <ListItem margin="10px 0">
                                Needs storybook for every component
                            </ListItem>
                            <Appear>
                                <ListItem margin="10px 0">
                                    Gifs and animation not possible to test
                                </ListItem>
                            </Appear>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary" fit margin="0px 0px 30px 0px">Repo with code</Heading>
                        <Link href="https://github.com/bojant987/screenshots-poc">
                            https://github.com/bojant987/screenshots-poc
                        </Link>
                    </Slide>
                </Deck>
            </div>
        );
    }
}