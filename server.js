const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const {querySchema} = require('./src/schemas/query-schema');
const {rootResolver} = require('./src/resolvers/root-resolver')
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  ${querySchema}
`);



var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: rootResolver,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');