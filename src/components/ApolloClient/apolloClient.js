import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
    uri: "https://api.thegraph.com/subgraphs/name/kartikjain-sudo/ez-pay"
})

const client = new ApolloClient({
    uri: httpLink,
    cache: new InMemoryCache(),
  });

  export default client;