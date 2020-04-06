/**
 * @flow
 * @relayHash 6878b9bc38fcc890fcbf9df5094d2249
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewTaskMutationVariables = {|
  title: string,
  description: string,
|};
export type NewTaskMutationResponse = {|
  +createTask: {|
    +id: string
  |}
|};
export type NewTaskMutation = {|
  variables: NewTaskMutationVariables,
  response: NewTaskMutationResponse,
|};
*/


/*
mutation NewTaskMutation(
  $title: String!
  $description: String!
) {
  createTask(title: $title, description: $description) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "title",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "description",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createTask",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Task",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
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
    "name": "NewTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "NewTaskMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "NewTaskMutation",
    "id": null,
    "text": "mutation NewTaskMutation(\n  $title: String!\n  $description: String!\n) {\n  createTask(title: $title, description: $description) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '909e4f1c865ce2f3d9a711f354c25e42';

module.exports = node;
