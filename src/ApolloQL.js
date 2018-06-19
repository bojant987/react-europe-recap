// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Appear,
    CodePane,
    Deck,
    Heading,
    Image,
    ListItem,
    List,
    Slide,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import ql1 from './assets/ql-1.png';
import ql2 from './assets/ql-2.png';
import ql3 from './assets/ql-3.png';
import ql4 from './assets/ql-4.png';
import ql5 from './assets/ql-5.png';
import ql6 from './assets/ql-6.png';
import microservices from './assets/microservices.png';
import {clientSetup1} from './assets/clientSetup';
import {clientSetup2} from './assets/clientSetup';
import queryComponent from './assets/queryComponent';
import {caching1} from './assets/caching';
import {caching2} from './assets/caching';
import {query1, query2, query3, response} from './assets/queries';
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
                }}/>
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
                        <Image src={ql1} display="inline"/>
                    </Slide>
                    <Slide>
                        <Image src={ql2} display="inline"/>
                    </Slide>
                    <Slide>
                        <Image src={ql3} display="inline"/>
                    </Slide>
                    <Slide align="flex-start center">
                        <div style={{display: "flex", width: "120%"}}>
                            <div style={{flex: "1 0 70%"}}>
                                <Image src={ql4} display="inline"/>
                            </div>
                            <div style={{flex: "1 0 30%"}}>
                                <Appear>
                                    <CodePane lang="graphql" source={query1} theme="external"/>
                                </Appear>
                            </div>
                        </div>
                    </Slide>
                    <Slide align="flex-start center">
                        <div style={{display: "flex", width: "120%"}}>
                            <div style={{flex: "1 0 70%"}}>
                                <Image src={ql5} display="inline"/>
                            </div>
                            <div style={{flex: "1 0 30%"}}>
                                <Appear>
                                    <CodePane lang="graphql" source={query2} theme="external"/>
                                </Appear>
                            </div>
                        </div>
                    </Slide>
                    <Slide align="flex-start center">
                        <div style={{display: "flex", width: "120%"}}>
                            <div style={{flex: "1 0 70%"}}>
                                <Image src={ql6} display="inline"/>
                            </div>
                            <div style={{flex: "1 0 30%"}}>
                                <Appear>
                                    <CodePane lang="graphql" source={query3} theme="external"/>
                                </Appear>
                            </div>
                        </div>
                    </Slide>
                    <Slide align="center flex-start">
                        <CodePane lang="json" source={response} theme="external"/>
                    </Slide>
                    <Slide>
                        <List textColor="quartenary" margin="40px 0px 0px 0px">
                            <ListItem margin="10px 0">Query language for APIs</ListItem>
                            <Appear><ListItem margin="10px 0">Abstract away details you don't need to know
                                about</ListItem></Appear>
                            <Appear><ListItem margin="10px 0">Typically served over HTTP via a single
                                endpoint</ListItem></Appear>
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
                        <CodePane lang="javascript" source={serverSetupCode} theme="external"/>
                    </Slide>
                    <Slide align="center flex-start">
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Types</Heading>
                        <CodePane lang="graphql" source={types1Code} theme="external"/>
                    </Slide>
                    <Slide align="center flex-start">
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Types</Heading>
                        <CodePane lang="graphql" source={types2Code} theme="external"/>
                    </Slide>
                    <Slide align="center flex-start">
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Resolvers</Heading>
                        <CodePane lang="javascript" source={resolvers1} theme="external"/>
                    </Slide>
                    <Slide align="center flex-start">
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Resolvers</Heading>
                        <CodePane lang="javascript" source={resolvers2} theme="external"/>
                    </Slide>
                    <Slide align="center flex-start">
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Microservices</Heading>
                        <Image src={microservices} display="inline"/>
                    </Slide>
                    <Slide align="center flex-start">
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Client setup</Heading>
                        <CodePane margin="0px 0px 20px 0px" lang="javascript"
                                  source="npm install apollo-boost react-apollo graphql-tag graphql --save"/>
                        <CodePane lang="javascript" source={clientSetup1} theme="external"/>
                    </Slide>
                    <Slide align="center flex-start">
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Client setup</Heading>
                        <CodePane lang="javascript" source={clientSetup2} theme="external"/>
                    </Slide>
                    <Slide align="center flex-start">
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px" fit>Query component</Heading>
                        <CodePane lang="javascript" source={queryComponent} theme="external"/>
                    </Slide>
                    <Slide align="center flex-start">
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Caching</Heading>
                        <CodePane lang="javascript" source={caching1} theme="external"/>
                    </Slide>
                    <Slide align="center flex-start">
                        <Heading textColor="quartenary" margin="0px 0px 40px 0px">Caching</Heading>
                        <CodePane lang="javascript" source={caching2} theme="external"/>
                    </Slide>
                </Deck>
            </div>
        );
    }
}