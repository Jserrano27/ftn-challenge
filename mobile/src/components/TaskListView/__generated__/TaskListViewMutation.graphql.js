/**
 * @flow
 * @relayHash 44961ffdfea7e0ce8b9e1e648e80d9ac
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TaskListViewMutationVariables = {|
  id: string
|};
export type TaskListViewMutationResponse = {|
  +deleteTask: string
|};
export type TaskListViewMutation = {|
  variables: TaskListViewMutationVariables,
  response: TaskListViewMutationResponse,
|};
*/


/*
mutation TaskListViewMutation(
  $id: ID!
) {
  deleteTask(id: $id)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "deleteTask",
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TaskListViewMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TaskListViewMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TaskListViewMutation",
    "id": null,
    "text": "mutation TaskListViewMutation(\n  $id: ID!\n) {\n  deleteTask(id: $id)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd1837fb8c61cddb3cc439a72c551acb2';

module.exports = node;
