// Collection Functions (Arrays or Objects)


function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (const key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}


function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i]));
        }
    } else {
        for (const key in collection) {
            result.push(callback(collection[key], key));
        }
    }
    return result;
}

function myReduce(collection, callback, acc) {
    let start = 0;
    if (!acc) {
        acc = Object.values(collection)[0];
        start = 1;
    }
    const values = Object.values(collection);
    for (let i = start; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}


function myFind(collection, predicate) {
    for (const value of Object.values(collection)) {
        if (predicate(value)) {
            return value;
        }
    }
}


function myFilter(collection, predicate) {
    const result = [];
    for (const value of Object.values(collection)) {
        if (predicate(value)) {
            result.push(value);
        }
    }
    return result;
}


function mySize(collection) {
    return Object.keys(collection).length;
}




function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}


function myLast(array, n = 1) {
    if (n === 1) {
        return array[array.length - 1];
    } else {
        return array.slice(Math.max(array.length - n, 0));
    }
}




function myKeys(object) {
    return Object.keys(object);
}


function myValues(object) {
    return Object.values(object);
}


console.log(myEach([1, 2, 3], alert));
console.log(myEach({one: 1, two: 2, three: 3}, alert));

console.log(myMap([1, 2, 3], function(num){ return num * 3; }));
console.log(myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }));

console.log(myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10));
console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; }));

console.log(myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; }));

console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; }));

console.log(mySize({one: 1, two: 2, three: 3}));
console.log(mySize([]));

console.log(myFirst([5, 4, 3, 2, 1]));
console.log(myFirst([5, 4, 3, 2, 1], 3));

console.log(myLast([5, 4, 3, 2, 1]));
console.log(myLast([5, 4, 3, 2, 1], 3));

console.log(myKeys({one: 1, two: 2, three: 3}));
console.log(myValues({one: 1, two: 2, three: 3}));