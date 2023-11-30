import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://gg87j3tcgz.us-east-1.awsapprunner.com/graphql',
  cache: new InMemoryCache()
});