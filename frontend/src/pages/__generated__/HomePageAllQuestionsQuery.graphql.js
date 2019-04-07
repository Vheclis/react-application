/**
 * @flow
 * @relayHash d3887065c1b6bce3ce828bc9c463e3ff
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomePageAllQuestionsQueryVariables = {||};
export type HomePageAllQuestionsQueryResponse = {|
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
export type HomePageAllQuestionsQuery = {|
  variables: HomePageAllQuestionsQueryVariables,
  response: HomePageAllQuestionsQueryResponse,
|};
*/


/*
query HomePageAllQuestionsQuery {
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
    "name": "HomePageAllQuestionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "HomePageAllQuestionsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "HomePageAllQuestionsQuery",
    "id": null,
    "text": "query HomePageAllQuestionsQuery {\n  questions {\n    _id\n    description\n    answers\n    theme\n    correctAnswer\n    createdAt\n    updatedAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '55bb848a813cfb4625482438cfce6321';
module.exports = node;
