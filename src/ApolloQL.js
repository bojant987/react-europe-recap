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

import ql1 from './ql-1.png';
import ql2 from './ql-2.png';
import ql3 from './ql-3.png';
import ql4 from './ql-4.png';
import ql5 from './ql-5.png';
import ql6 from './ql-6.png';
import query1 from './query-1.png';
import query2 from './query-2.png';
import query3 from './query-3.png';
import query4 from './query-4.png';
import serverSetup from './server-setup.png';
import res1 from './ql-res1.png';
import res2 from './ql-res2.png';
import types1 from './ql-types1.png';
import types2 from './ql-types2.png';
import microservices from './microservices.png';
// eslint-disable-next-line
import serverSetupCode from './assets/serverSetup';
import types1Code from './assets/types1';
import types2Code from './assets/types2';
import resolvers1 from './assets/resolvers1';
import resolvers2 from './assets/resolvers2';
import Back from './Back';

const theme = createTheme(
    {
        primary: '#1F0F77',
        secondary: '#14C4BC',
        tertiary: '#BC1880',
        quartenary: '#ffffff',
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica',
    }
);

export default class ApolloQL extends React.Component {
    render() {
        return (
            <div>
                <Back setActive={() => {
                    this.props.setActive("home");
                    window.location.reload();
                }} />
                <Deck
                    transition={['slide']}
                    transitionDuration={500}
                    theme={theme}
                    contentWidth={1000}
                >
                    <Slide>
                        <Heading textColor="quartenary" fit>GraphQL with Apollo</Heading>
                    </Slide>
                    <Slide>
                        <Image src={ql1} display="inline" />
                    </Slide>
                    <Slide>
                        <Image src={ql2} display="inline" />
                    </Slide>
                    <Slide>
                        <Image src={ql3} display="inline" />
                    </Slide>
                    <Slide align="center flex-start">
                        <Image src={ql4} display="inline" />
                        <Appear>
                            <Image src={query1} width={400} display="inline" />
                        </Appear>
                    </Slide>
                    <Slide align="center flex-start">
                        <Image src={ql5} display="inline" />
                        <Appear>
                            <Image src={query2} width={400} display="inline" />
                        </Appear>
                    </Slide>
                    <Slide align="center flex-start">
                        <Image src={ql6} display="inline" />
                        <Appear>
                            <Image src={query3} width={400} display="inline" />
                        </Appear>
                    </Slide>
                    <Slide align="center flex-start">
                        <Image src={query4} display="inline" />
                    </Slide>
                    <Slide>
                        <List textColor="quartenary" margin="40px 0px 0px 0px">
                            <ListItem margin="10px 0">Query language for APIs</ListItem>
                            <Appear><ListItem margin="10px 0">Abstract away details you don't need to know about</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Typically served over HTTP via a single endpoint</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">What over how</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Take what you need</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Consumer decides response data</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Get everything in a single request</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Get only what you need</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Solves under/over fetching</ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary">Apollo</Heading>
                        <List textColor="quartenary" margin="40px 0px 0px 0px">
                            <ListItem margin="10px 0">Set of libraries/tools for GraphQL server/client</ListItem>
                            <Appear><ListItem margin="10px 0">Fully compatible with GraphQL spec</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Very feature rich</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Binding for every major JS framework</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Binding for every major BE language</ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Server setup</Heading>
                        {/*<Image src={serverSetup} display="inline" />*/}
                        <CodePane lang="javascript" source={serverSetupCode} theme="external"/>
                    </Slide>
                    <Slide align="center flex-start">
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Types</Heading>
                        <CodePane lang="javascript" source={types1Code} theme="external"/>
                        <Appear>
                            <CodePane lang="javascript" source={types2Code} theme="external"/>
                        </Appear>
                        {/*<Image src={types1} display="inline" />*/}
                        {/*<Image src={types2} display="inline" />*/}
                    </Slide>
                    <Slide align="center flex-start">
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Resolvers</Heading>
                        {/*<Image src={res1} display="inline" />*/}
                        {/*<Image src={res2} display="inline" />*/}
                        <CodePane lang="javascript" source={resolvers1} theme="external"/>
                        <Appear>
                            <CodePane lang="javascript" source={resolvers2} theme="external"/>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Microservices</Heading>
                        <Image src={microservices} display="inline" />
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Client setup</Heading>
                        <CodePane lang="javascript" source="npm install apollo-boost react-apollo graphql-tag graphql --save" />
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Caching</Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Query component</Heading>
                    </Slide>
                </Deck>
            </div>
        );
    }
}