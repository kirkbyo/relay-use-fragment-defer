/**
 * @generated SignedSource<<787160cd8ef8e3404818b80e1b97ae41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserInfoFragment$data = {
  readonly user: {
    readonly id: string;
    readonly username: string | null;
    readonly fullName: string | null;
    readonly avatarUrl: any | null;
  } | null;
  readonly " $fragmentType": "UserInfoFragment";
};
export type UserInfoFragment$key = {
  readonly " $data"?: UserInfoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserInfoFragment">;
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
  "name": "UserInfoFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "userId"
        }
      ],
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
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
          "name": "username",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fullName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "avatarUrl",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "d87ec10f09a3c5e1ee379385de2289fc";

export default node;
