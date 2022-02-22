import test from 'tape';

import incrementAsync from '../src/js/sagas';

test('incrementAsync Saga test', (asserts) => {
    const gen = incrementAsync();

    asserts.deepEqual(
        gen.next(),
        { done: false, value: undefined },
        'incrementAsync should return a Promise that will resolve after 1 second'
    )
});