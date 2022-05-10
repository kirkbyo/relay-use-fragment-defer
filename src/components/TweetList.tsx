import React from "react";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { TweetListFragment$key } from "./__generated__/TweetListFragment.graphql";

type TweetListProps = {
  queryRef: TweetListFragment$key;
};

function TweetList({ queryRef }: TweetListProps) {
  const { tweetsByUserId } = useFragment<TweetListFragment$key>(
    graphql`
      fragment TweetListFragment on Query {
        tweetsByUserId(userId: $userId) {
          edges {
            id
            body
            date
            stats {
              views
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `,
    queryRef
  );

  if (!tweetsByUserId?.edges?.length) {
    return null;
  }

  return (
    <>
      <h2>Latest Tweets</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#BFD7EA",
        }}
      >
        {tweetsByUserId.edges.map((tweet) => (
          <div
            key={tweet?.id}
            style={{ borderBottom: "1px solid white", width: "100%" }}
          >
            <div style={{ textAlign: "center" }}>
              <h3>{tweet?.body}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TweetList;
