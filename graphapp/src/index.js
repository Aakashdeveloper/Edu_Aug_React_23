import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import Component from './component';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
root.render(
    <ApolloProvider client={client}>
        <Component/>
    </ApolloProvider>
)

