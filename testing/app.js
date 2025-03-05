function add(a, b) {
    return a + b;
}

function getNull() {
    return null;
}

function getUndefined() {
    return undefined;
}

function objectEquals() {
    return {
        name: 'John',
        age: 25
    };
}

function getBoolean(isTrue){
    return isTrue;
}

function getArray(){
    return [1, 2, 3];
}

module.exports.add = add;
module.exports.getNull = getNull;
module.exports.getUndefined = getUndefined;
module.exports.objectEquals = objectEquals;
module.exports.getBoolean = getBoolean;
module.exports.getArray = getArray;
