import { assert } from 'chai';
import readJson  from '../src/readJson.js';

describe('Test Functions', () => {
    describe('Test readJson:', () => {
        it('should return an object', () => {
            const test = readJson('./package.json');
        });

        it('verify properties of the object', () => {
            const test = readJson('./package.json');
            assert.property(test, 'name'); // Verify 'name' property exists
            assert.property(test, 'version'); // Verify 'version' property exists
            assert.property(test, 'description'); // Verify 'description' property exists
            assert.property(test, 'author'); // Verify 'author' property exists
        });                   
    });
});    
