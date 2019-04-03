/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Question_question$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListPage_questions$ref: FragmentReference;
export type ListPage_questions = {|
  +$fragmentRefs: Question_question$ref,
  +$refType: ListPage_questions$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ListPage_questions",
  "type": "Question",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Question_question",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7b2c9f3f3be4c82664d96302108143ed';
module.exports = node;
