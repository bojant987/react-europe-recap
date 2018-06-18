export default
`// imports
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = fs.readFileSync('./schema.graphql', {encoding: 'utf-8'}); // types
const resolvers = require('./resolvers'); // resolvers

const schema = makeExecutableSchema({typeDefs, resolvers}); // make schema

app.use('/graphql', graphqlExpress(req => ({ // serve graphql endpoint
    schema,
    context: {user: db.users.findByToken(req.headers['x-auth'])}
})));

app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'})); // serve GUI endpoint`