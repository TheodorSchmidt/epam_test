'use strict';

function deepCopy(object) {
    const clone = {};
    for (let i in object) {
        if (object[i] instanceof Object) {
            clone[i] = deepCopy(object[i]);
            continue;
        }
        clone[i] = object[i];
    }
    return clone;
}

const obj1 = {
    number: 1,
    colors: {red: 200, green: 120, blue: 23},
    background: "picture",
    font: "Times New Roman",
    g: {y: {x: 54}}
};

const obj2 = deepCopy(obj1);

obj2.number = 2;
obj2.colors.red = 9;
obj2.background = 'none';

console.log(obj1, obj2);