/**
 * @flow
 * @relayHash 55d1694c4aa9443fba779e7d43716ff8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TaskListQueryVariables = {||};
export type TaskListQueryResponse = {|
  +tasks: $ReadOnlyArray<{|
    +id: string,
    +title: string,
    +description: string,
  |}>
|};
export type TaskListQuery = {|
  variables: TaskListQueryVariables,
  response: TaskListQueryResponse,
|};
*/


/*
query TaskListQuery {
  tasks {
    id
    title
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "tasks",
    "storageKey": null,
    "args": null,
    "concreteType": "Task",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TaskListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TaskListQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "TaskListQuery",
    "id": null,
    "text": "query TaskListQuery {\n  tasks {\n    id\n    title\n    description\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd82e91dc290668389e26e991c46a2611';

module.exports = node;
