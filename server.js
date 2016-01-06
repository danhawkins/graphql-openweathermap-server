import express from 'express';
import path from 'path';
import GraphQLHTTP from 'express-graphql';
import schema from './data/schema';

const app = express();
const PORT = 8888;

app.use("/GraphQL", GraphQLHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Node/Express server for GraphQL server for youtube and weather searches.  listening on port", PORT);
});
