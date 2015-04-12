import chai from 'chai';

import util from '../src/tools/util';

const assert = chai.assert;

describe('convertCommand', () => {
    it('Punch Button', () => {
        assert.deepEqual(util.convertCommand('Punch Button'), ['P']);
    });
});
