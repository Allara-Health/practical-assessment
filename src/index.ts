import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import resolvers from './graphql/resolvers';
import type { GraphQLContext } from './types';
import { dataStore } from './database/index';
import { GraphQLError } from 'graphql';
import typeDefs from './graphql/typeDefs';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<GraphQLContext>({
    typeDefs,
    resolvers,
    introspection: true,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
// NOTE: We use top-level await here because we're in a Node.js module.

const startServer = async () => {
    const { url } = await startStandaloneServer(server, {

        // GraphQL Context is a place to store data that is shared across all resolvers, or perform operations like authentication
        context: async ({ req }) => {
            const token = req.headers['X-Api-Key'] || '';
            if (token !== '12345') {
                throw new GraphQLError('Invalid API Key', {
                    extensions: {
                        code: 'UNAUTHENTICATED',
                        http: { status: 401}
                    }
                });
            }
            // Here we return an object that will be available to all resolvers
            return {
                dataStore
            }
        },
        listen: { port: 4000 } 

    });
    console.log(`🚀 Server listening at: ${url}`);
}

startServer().then(() => console.log('Server started!')).catch(err => console.log(err));

