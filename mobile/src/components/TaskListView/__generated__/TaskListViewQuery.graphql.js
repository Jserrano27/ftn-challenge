/**
 * @flow
 * @relayHash d8cc5c5906381316e88650a35d83ce64
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TaskListViewQueryVariables = {||};
export type TaskListViewQueryResponse = {|
  +tasks: $ReadOnlyArray<{|
    +id: string,
    +title: string,
    +description: string,
  |}>
|};
export type TaskListViewQuery = {|
  variables: TaskListViewQueryVariables,
  response: TaskListViewQueryResponse,
|};
*/


/*
query TaskListViewQuery {
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
    "name": "TaskListViewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TaskListViewQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "TaskListViewQuery",
    "id": null,
    "text": "query TaskListViewQuery {\n  tasks {\n    id\n    title\n    description\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cea1c467dfcc03476ac82028533df843';

module.exports = node;
