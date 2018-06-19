export default
`import React from 'react';
import { Query } from "react-apollo";
import { userConnectionsQuery } from '../queries';

const Connections = ({ userId, something }) => (
    <Query
        query={userConnectionsQuery}
        variables={{ id: userId }}
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