import React, { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import TweetList from "./TweetList";

function App() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery($userId: ID!) {
        ...TweetListFragment @defer(label: "TweetListFragment") # removing the directive fixes the issue
      }
    `,
    {
      userId: "dfbcf98c-3e30-4d49-b923-5b456234d0f7",
    }
  );

  return (
    <div>
      <p>Tweet List</p>
      <Suspense fallback={<div>Tweet List Loading...</div>}>
        <TweetList queryRef={data} />
      </Suspense>
    </div>
  );
}

export default App;
