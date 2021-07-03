import React from 'react';
import App from './App';
import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';
import { setContext } from "apollo-link-context";


const DEV = window.location.hostname === "localhost";

const httpLink = createUploadLink({ 
  uri: DEV ? "http://localhost:4000/graphql" : "https://magic-cv.herokuapp.com/graphql"
});

// http://localhost:4000/graphql

//Adding the header to the authorization app
const setAuthorizationLink = setContext((request, previousContext) => {

  let token = localStorage.getItem("jwtToken");
  const authorization = token? `Bearer ${token}` : '';
  return {
      headers: {authorization}
  }
});


const client = new ApolloClient({
    link : setAuthorizationLink.concat(httpLink),
    cache: new InMemoryCache({
      addTypename: false
    }),
    connectToDevTools: true
  });


export default (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
    )

