/**
 * @generated SignedSource<<746ad4e674246ddc2bcc74beaef401c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturedTweetFragment$data = {
  readonly tweetById: {
    readonly id: string;
    readonly body: string | null;
    readonly date: any | null;
    readonly stats: {
      readonly views: number | null;
    } | null;
    readonly author: {
      readonly username: string | null;
    } | null;
  } | null;
  readonly " $fragmentType": "FeaturedTweetFragment";
};
export type FeaturedTweetFragment$key = {
  readonly " $data"?: FeaturedTweetFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturedTweetFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "tweetId"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedTweetFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "tweetId"
        }
      ],
      "concreteType": "Tweet",
      "kind": "LinkedField",
      "name": "tweetById",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "body",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "date",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Stat",
          "kind": "LinkedField",
          "name": "stats",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "views",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "author",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "username",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "44305166f19afa5c0f44ba729388f9d2";

export default node;
