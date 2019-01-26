import ApolloClient from "apollo-boost";

import { CLIENT_URL as uri } from '../../constants/graphql';

const client = new ApolloClient({ uri });

export default client;
