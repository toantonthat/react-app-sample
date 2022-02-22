import test from 'tape';

import { put, call, delay } from 'redux-saga/effects';
import { incrementAsync } from '../src/js/sagas';

test('incrementAsync Saga test', (asserts) => {
    const generator = incrementAsync();

    asserts.deepEqual(
        generator.next().value,
        delay(1000),
        'counter must call delay(1000)'
    );

    asserts.deepEqual(
        generator.next().value,
        put({type: 'INCREMENT'}),
        'counter saga must dispath an INCREMENT action'
    );

    asserts.deepEqual(
        generator.next(),
        { done: true, value: undefined },
        'incrementAsync should return a Promise that will resolve after 1 second'
    );
    asserts.end();
});