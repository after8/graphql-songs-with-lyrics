# GraphQL Queries and Mutations

This project shows a lists of songs with multiple lyrics per song.

You can add and delete songs. And for each song you can add lyrics and like them.

The example projects shows some of the cases you need when writing GraphQL queries and mutations.

On the backend-side the project uses a mongodb database hosted on https://cloud.mongodb.com/, an Express Server, GraphQL Server and Webpack Server. 
On the frontend-side it uses React, Apollo Provider (react-apollo) and Apollo Store (apollo-client) to work with the GraphQL Server.

## Dependencies
[Node.js](https://nodejs.org/en/)

## How to use

### Clone this repo

`git clone https://github.com/after8/graphql-songs-with-lyrics.git`

### Install packages
1. `npm install`

### Run express server
3. `npm run dev`

### GraphiQL

GraphiQL is an in-browser tool for writing, validating, and testing GraphQL queries.   
`http://localhost:4000/graphql`