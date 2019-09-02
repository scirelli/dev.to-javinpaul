module.exports = {
    assert: function assert(value, msg) {
        if(!value) throw new Error(msg || 'Assertion failed.');
    },

    assertEqual: function assertEqual(value1, value2) {
        try {
            this.assert(value1 === value2);
        } catch(e) {
            throw new Error(`'${value1}' not equal '${value2}'.`);
        }
    }
};
