export const clientSetup1 =
`import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: 'https://nx9zvp49q7.lp.gql.zone/graphql'
});

const ApolloApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

render(ApolloApp, document.getElementById('root'));`;

export const clientSetup2 =
    `import gql from "graphql-tag";

const userConnectionsQuery = gql\`
    query UserConnectionsQuery($id: ID!) {
        user(id: $id) {
            connections {
                first_name
                last_name
                company {
                    name
                }
            }
        }
    }
\`;

client.query({query: userQuery}, variables: { id: userId })
    .then(result => console.log(result))
    .catch(error => console.log(error));`;