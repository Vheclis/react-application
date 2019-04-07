/**
 * @flow
 * @relayHash fc96881bdb6283d4b88b79ea45045424
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateQuestionMutationVariables = {|
  description: string,
  answers: $ReadOnlyArray<string>,
  theme: string,
  correctAnswer: string,
|};
export type CreateQuestionMutationResponse = {|
  +createQuestion: ?{|
    +_id: string,
    +description: string,
    +answers: $ReadOnlyArray<string>,
    +theme: string,
    +correctAnswer: string,
  |}
|};
export type CreateQuestionMutation = {|
  variables: CreateQuestionMutationVariables,
  response: CreateQuestionMutationResponse,
|};
*/


/*
mutation CreateQuestionMutation(
  $description: String!
  $answers: [String!]!
  $theme: String!
  $correctAnswer: String!
) {
  createQuestion(description: $description, answers: $answers, theme: $theme, correctAnswer: $correctAnswer) {
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
    "name": "createQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "answers",
        "variableName": "answers",
        "type": "[String!]!"
      },
      {
        "kind": "Variable",
        "name": "correctAnswer",
        "variableName": "correctAnswer",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "theme",
        "variableName": "theme",
        "type": "String!"
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
    "name": "CreateQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateQuestionMutation",
    "id": null,
    "text": "mutation CreateQuestionMutation(\n  $description: String!\n  $answers: [String!]!\n  $theme: String!\n  $correctAnswer: String!\n) {\n  createQuestion(description: $description, answers: $answers, theme: $theme, correctAnswer: $correctAnswer) {\n    _id\n    description\n    answers\n    theme\n    correctAnswer\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8f909a16ddbca3562803097580375c5';
module.exports = node;
