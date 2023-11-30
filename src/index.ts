import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';
import { createYoga, createSchema } from 'graphql-yoga';
import { createServer } from 'http';

// Create a GraphQL Yoga server
const yoga = createYoga({ schema: createSchema({ typeDefs, resolvers }) });

// Create an HTTP server and mount the GraphQL Yoga server
const server = createServer(yoga);

// Start the server
server.listen(4000, () => console.log('Server started!'));