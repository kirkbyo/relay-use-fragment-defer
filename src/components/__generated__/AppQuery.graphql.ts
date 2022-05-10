/**
 * @generated SignedSource<<1253a30d0d17d3ca7ac1045d4258530c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppQuery$variables = {
  userId: string;
};
export type AppQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"TweetListFragment">;
};
export type AppQuery = {
  variables: AppQuery$variables;
  response: AppQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "kind": "Defer",
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TweetListFragment"
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "if": null,
        "kind": "Defer",
        "label": "AppQuery$defer$TweetListFragment",
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
        ]
      }
    ]
  },
  "params": {
    "cacheID": "3096a811ae259f721bde3e63e03eb9d7",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $userId: ID!\n) {\n  ...TweetListFragment @defer(label: \"AppQuery$defer$TweetListFragment\")\n}\n\nfragment TweetListFragment on Query {\n  tweetsByUserId(userId: $userId) {\n    edges {\n      id\n      body\n      date\n      stats {\n        views\n      }\n    }\n    pageInfo {\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "15d4aab8382c65c159c1dc359365a32c";

export default node;
