// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Appear,
    Deck,
    Heading,
    Image,
    ListItem,
    List,
    Slide,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import image1 from './assets/btf1-ui-1.png';
import image2 from './assets/btf1-ui-2.jpg';
import bf1 from './assets/battlefield1.jpg';
import reactLogo from './assets/react.png';
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
                    <Slide bgImage={bf1} bgSize="contain" bgRepeat="no-repeat" align="center flex-start">
                        <Image src={reactLogo} width={360} />
                    </Slide>
                    <Slide>
                        <Image src={image1} />
                    </Slide>
                    <Slide>
                        <Image src={image2} />
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary">100% React</Heading>
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