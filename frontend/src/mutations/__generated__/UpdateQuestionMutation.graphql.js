/**
 * @flow
 * @relayHash 7d13b65d8545b8a8f648f5cbb701bec7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateQuestionMutationVariables = {|
  id: string,
  description: string,
  answers: $ReadOnlyArray<string>,
  theme: string,
  correctAnswer: string,
|};
export type UpdateQuestionMutationResponse = {|
  +updateQuestion: ?{|
    +_id: string,
    +description: string,
    +answers: $ReadOnlyArray<string>,
    +theme: string,
    +correctAnswer: string,
  |}
|};
export type UpdateQuestionMutation = {|
  variables: UpdateQuestionMutationVariables,
  response: UpdateQuestionMutationResponse,
|};
*/


/*
mutation UpdateQuestionMutation(
  $id: ID!
  $description: String!
  $answers: [String!]!
  $theme: String!
  $correctAnswer: String!
) {
  updateQuestion(_id: $id, description: $description, answers: $answers, theme: $theme, correctAnswer: $correctAnswer) {
    _id
    description
    answers
    theme
    correctAnswer
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
  },
  {
    "kind": "LocalArgument",
    "name": "description",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "answers",
    "type": "[String!]!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "theme",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "correctAnswer",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "id",
        "type": "ID!"
      },
      {
        "kind": "Variable",
        "name": "answers",
        "variableName": "answers",
        "type": "[String]"
      },
      {
        "kind": "Variable",
        "name": "correctAnswer",
        "variableName": "correctAnswer",
        "type": "String"
      },
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description",
        "type": "String"
      },
      {
        "kind": "Variable",
        "name": "theme",
        "variableName": "theme",
        "type": "String"
      }
    ],
    "concreteType": "Question",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "answers",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "theme",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "correctAnswer",
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
    "name": "UpdateQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateQuestionMutation",
    "id": null,
    "text": "mutation UpdateQuestionMutation(\n  $id: ID!\n  $description: String!\n  $answers: [String!]!\n  $theme: String!\n  $correctAnswer: String!\n) {\n  updateQuestion(_id: $id, description: $description, answers: $answers, theme: $theme, correctAnswer: $correctAnswer) {\n    _id\n    description\n    answers\n    theme\n    correctAnswer\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '151ff3c02882a71f268c9e9bd2895b81';
module.exports = node;
