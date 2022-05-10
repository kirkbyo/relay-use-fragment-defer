/**
 * @generated SignedSource<<4a50569a02e1b1ade5e444867171474c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserInfo$data = {
  readonly id: string;
  readonly username: string | null;
  readonly fullName: string | null;
  readonly avatarUrl: any | null;
  readonly " $fragmentType": "UserInfo";
};
export type UserInfo$key = {
  readonly " $data"?: UserInfo$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserInfo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserInfo",
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
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "92ef4c4233e96a2deb7e2a5a61058a11";

export default node;
