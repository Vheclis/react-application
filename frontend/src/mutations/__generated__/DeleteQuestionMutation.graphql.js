/**
 * @flow
 * @relayHash 5cd82f7511238afdd4a7add999ec5058
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteQuestionMutationVariables = {|
  id: string
|};
export type DeleteQuestionMutationResponse = {|
  +deleteQuestion: ?{|
    +_id: ?string
  |}
|};
export type DeleteQuestionMutation = {|
  variables: DeleteQuestionMutationVariables,
  response: DeleteQuestionMutationResponse,
|};
*/


/*
mutation DeleteQuestionMutation(
  $id: ID!
) {
  deleteQuestion(_id: $id) {
    _id
  }
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
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "id",
        "type": "ID!"
      }
    ],
    "concreteType": "DeletionInformation",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
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
    "name": "DeleteQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteQuestionMutation",
    "id": null,
    "text": "mutation DeleteQuestionMutation(\n  $id: ID!\n) {\n  deleteQuestion(_id: $id) {\n    _id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '06be40fc993aaabde1bd266b621e4e54';
module.exports = node;
