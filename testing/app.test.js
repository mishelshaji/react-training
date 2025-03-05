const {add, getNull, getUndefined, objectEquals, getBoolean, getArray} = require('./app');

test('Function Equals', () => {
    expect(add(1, 2)).toBe(3);
});

test('Function Not Equals', () => {
    expect(add(1, 2)).not.toBe(2);
});

test('Function Returns Null', () => {
    expect(getNull()).toBeNull();
})

test('Function Returns Undefined', () => {
    expect(getUndefined()).toBeUndefined();
})

test('Object Equals', () => {
    expect(objectEquals()).toEqual({name: 'John', age: 25});
})

test('Function Returns Truthy', ()=>{
    expect(getBoolean(true)).toBeTruthy();
})

test('Function Returns Falsy', ()=>{
    expect(getBoolean(false)).toBeFalsy();
})

test('Array Contains 3', () => {
    expect(getArray()).toContain(3);
})
