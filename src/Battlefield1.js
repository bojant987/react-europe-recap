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

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import image1 from './btf1-ui-1.png';
import image2 from './btf1-ui-2.jpg';
import Back from './Back';

const theme = createTheme(
    {
        primary: '#000000',
        secondary: '#032133',
        tertiary: '#03A9FC',
        quartenary: '#CECECE',
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica',
    }
);

export default class Battlefield1 extends React.Component {
    render() {
        return (
            <div>
                <Back setActive={() => {
                    this.props.setActive("home");
                    window.location.reload();
                }} />
                <Deck
                    transition={['zoom', 'slide']}
                    transitionDuration={500}
                    theme={theme}
                >
                    <Slide>
                        <Heading textColor="quartenary" fit>Battlefield 1 + React</Heading>
                    </Slide>
                    <Slide>
                        <Image src={image1} />
                    </Slide>
                    <Slide>
                        <Image src={image2} />
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary">Why?</Heading>
                    </Slide>
                    <Slide align="center">
                        <List textColor="quartenary">
                            <ListItem margin="10px 0">Update on the fly</ListItem>
                            <Appear><ListItem margin="10px 0">Support for multiple games</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Gradual rollouts</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">A/B testing</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Share code with web app(s)</ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary">How?</Heading>
                    </Slide>
                    <Slide align="center">
                        <List textColor="quartenary">
                            <ListItem margin="10px 0">Tried webkit browser in game, fail</ListItem>
                            <Appear><ListItem margin="10px 0">Built custom React renderer</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">C++ JS runtime</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Layout system (Yoga)</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Animation system</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Dynamic asset loading over HTTP</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Offline support</ListItem></Appear>
                        </List>
                    </Slide>
                </Deck>
            </div>
        );
    }
}