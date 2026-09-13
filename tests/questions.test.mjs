import { test } from 'node:test';
import assert from 'node:assert/strict';
import { questions } from '../app/questions.ts';
test('question bank is complete, distinct and excludes the separate module',()=>{
  assert.equal(questions.length,16);
  assert.equal(new Set(questions.map(q=>q.prompt)).size,questions.length);
  for(const q of questions) {
    assert.equal(q.options.length,4);
    assert.equal(new Set(q.options).size,4);
    assert.ok(Number.isInteger(q.answer) && q.answer>=0 && q.answer<4);
    assert.ok(q.explanation.length>30 && q.experiment.length>20);
    assert.doesNotMatch(JSON.stringify(q),/regularization|regularisation|ridge|lasso/i);
  }
});
