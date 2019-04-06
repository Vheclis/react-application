/**
 * @flow
 * @relayHash 1cbd534c24c47d4405aa9ff0c53cd763
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeAllQuestionsQueryVariables = {||};
export type HomeAllQuestionsQueryResponse = {|
  +questions: ?$ReadOnlyArray<?{|
    +_id: string,
    +description: string,
    +answers: $ReadOnlyArray<string>,
    +theme: string,
    +correctAnswer: string,
    +createdAt: string,
    +updatedAt: string,
  |}>
|};
export type HomeAllQuestionsQuery = {|
  variables: HomeAllQuestionsQueryVariables,
  response: HomeAllQuestionsQueryResponse,
|};
*/


/*
query HomeAllQuestionsQuery {
  questions {
    _id
    description
    answers
    theme
    correctAnswer
    createdAt
    updatedAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "questions",
    "storageKey": null,
    "args": null,
    "concreteType": "Question",
    "plural": true,
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
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "createdAt",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "updatedAt",
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
    "name": "HomeAllQuestionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeAllQuestionsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "HomeAllQuestionsQuery",
    "id": null,
    "text": "query HomeAllQuestionsQuery {\n  questions {\n    _id\n    description\n    answers\n    theme\n    correctAnswer\n    createdAt\n    updatedAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2e047413ab5f704475d17c3b2c0e9a62';
module.exports = node;
