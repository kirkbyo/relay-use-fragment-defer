/**
 * @generated SignedSource<<2774a133ca6cb02c2ddb6edf725dd8b6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TweetListFragment$data = {
  readonly tweetsByUserId: {
    readonly edges: ReadonlyArray<{
      readonly id: string;
      readonly body: string | null;
      readonly date: any | null;
      readonly stats: {
        readonly views: number | null;
      } | null;
    } | null> | null;
    readonly pageInfo: {
      readonly hasNextPage: boolean;
    } | null;
  } | null;
  readonly " $fragmentType": "TweetListFragment";
};
export type TweetListFragment$key = {
  readonly " $data"?: TweetListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TweetListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "userId"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "TweetListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "userId",
          "variableName": "userId"
        }
      ],
      "concreteType": "TweetConnection",
      "kind": "LinkedField",
      "name": "tweetsByUserId",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Tweet",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
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
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
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

(node as any).hash = "54b017b8e0c27868af3c7f7e5c583d51";

export default node;
