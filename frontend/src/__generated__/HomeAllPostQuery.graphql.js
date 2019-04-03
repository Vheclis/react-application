/**
 * @flow
 * @relayHash 605a92f63ca7ef4686df1965cad910e6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListPage_questions$ref = any;
export type HomeAllPostQueryVariables = {||};
export type HomeAllPostQueryResponse = {|
  +questions: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ListPage_questions$ref
  |}>
|};
export type HomeAllPostQuery = {|
  variables: HomeAllPostQueryVariables,
  response: HomeAllPostQueryResponse,
|};
*/


/*
query HomeAllPostQuery {
  questions {
    ...ListPage_questions
  }
}

fragment ListPage_questions on Question {
  ...Question_question
}

fragment Question_question on Question {
  _id
  description
  answers
  theme
  correctAnswer
  createdAt
  updatedAt
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeAllPostQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
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
            "kind": "FragmentSpread",
            "name": "ListPage_questions",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeAllPostQuery",
    "argumentDefinitions": [],
    "selections": [
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
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeAllPostQuery",
    "id": null,
    "text": "query HomeAllPostQuery {\n  questions {\n    ...ListPage_questions\n  }\n}\n\nfragment ListPage_questions on Question {\n  ...Question_question\n}\n\nfragment Question_question on Question {\n  _id\n  description\n  answers\n  theme\n  correctAnswer\n  createdAt\n  updatedAt\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '7b65e385834e31c9c6d219b4f6849b8a';
module.exports = node;
