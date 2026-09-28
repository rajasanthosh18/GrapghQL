import express from "express";
import { createHandler } from "graphql-http";
import { resolvers } from "./resolver";
import schema from "./schema";

const app = express();

app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: resolvers,
  }),
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
