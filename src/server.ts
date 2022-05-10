import express from "express";
import bodyParser from "body-parser";

const APP_PORT = 4000;

const tweetListResponse = {
  tweetsByUserId: {
    edges: [
      {
        __typename: "Tweet",
        id: "959d4903-a021-4b48-8db3-969afc0bdc7b",
        body: "Lorizzle ipsum dolor ass amizzle, boofron sure. Yo rizzle velizzle, dang volutpizzle, suscipizzle quizzle, bow wow wow vel, fo shizzle. Pellentesque shut the shizzle up tortizzle. Sizzle eros.",
        date: "Wed, 09 Mar 2022 16:18:48 GMT",
        stats: {
          views: 352,
        },
      },
      {
        __typename: "Tweet",
        id: "e850e487-42e7-4bda-9e69-35dfd9504261",
        body: "Aliquizzle daahng dawg, sizzle yo mamma blandizzle pot, nibh quam tempizzle dizzle, sizzle that's the shizzle mammasay mammasa mamma oo sa justo pellentesque brizzle. Cool funky fresh",
        date: "Tue, 01 Mar 2022 15:33:54 GMT",
        stats: {
          views: 21,
        },
      },
    ],
    pageInfo: {
      hasNextPage: true,
      nextCursor: "e850e487-42e7-4bda-9e69-35dfd9504261",
    },
  },
};

const app = express();

app.use(bodyParser.json());

/**
 * Respond to query with hardcoded multipart messages sent at various intervals
 */
const handleDeferQuery = (res: express.Response) => {
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "application/json",
    "Transfer-Encoding": "chunked",
  });

  res.write(
    JSON.stringify({
      data: {
        ...tweetListResponse,
      },
      extensions: {},
    })
  );

  res.end();
};

app.use("/graphql", (req, res) => {
  if (req.body.query.startsWith("mutation")) {
    res.end();
    return;
  }
  handleDeferQuery(res);
});

app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);
});