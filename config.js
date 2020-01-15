const path = require('path');

const cwd = relpath => path.resolve(process.cwd(), relpath || '');

class Condition {
    constructor(pred) {
        this.is = pred;
        this.isNot = !pred;
    }

    if(thenValue, elseValue = undefined) {
        return this.is ? thenValue : elseValue;
    }

    ifNot(thenValue, elseValue = undefined) {
        return this.isNot ? thenValue : elseValue;
    }
}

const condition = pred => new Condition(pred);

const dev = condition(process.env.NODE_ENV === 'development');
const prod = condition(process.env.NODE_ENV === 'production');
const test = condition(process.env.NODE_ENV === 'test');

function omit(objOrArray) {
    if (Array.isArray(objOrArray)) {
        return objOrArray.filter(e => e !== undefined);
    }

    if (typeof objOrArray === 'object') {
        return Object.keys(objOrArray)
            .filter(e => objOrArray[e] != undefined)
            .reduce((acc, e) => ((acc[e] = objOrArray[e]), acc), {});
    }
}

module.exports = {
    cwd,
    omit,
    dev,
    prod,
    test,
};