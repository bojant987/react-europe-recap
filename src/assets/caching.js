export const caching1 =
`import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: new HttpLink({ 
        uri: 'https://someapi/graphql'
    }),
    cache
});`;

export const caching2 =
    `const Connections = ({ userId, something }) => (
    <Query
        query={userConnectionsQuery}
        variables={{ id: userId }}
        fetchPolicy="no-cache"
    >
        {({ loading, error, data, refetch }) => {
            if (loading) return <LoadingIndicator/>;
            if (error) return <Error error={error} />;

            if (something) refetch();

            return data.connections
                .map(connection => <Connection connection={connection}  />);
        }}
    </Query>
);`;