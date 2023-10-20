function myEach(collection, callback) {
    if (Array.isArray(collection) === true){
        for (let i=0; i<collection.length; i++) {
            callback(collection[i])
        }
    }
    else if (Array.isArray(collection) === false) {
        const arr = []
        for (let key in collection){
            let value = collection[key]
            arr.push(value)
            callback(value)
        }
    }
    return collection
}

function myMap(collection, callback){
    if (Array.isArray(collection) === true){
        const newArr = []
        for (let i=0; i<collection.length; i++) {
            let item = callback(collection[i])
            newArr.push(item)
        }
        return newArr
    }
    else if (Array.isArray(collection) === false){
        const newArr = []
        for (let key in collection){
            let value = callback(collection[key])
            newArr.push(value)
        }
        return newArr
    }
}

function myReduce(collection, callback, acc) {
    let firstKey = null
    if (Array.isArray(collection)){
        if (acc === undefined){
            acc = collection[0];
            firstKey = 1;
        }
        for (let i = firstKey || 0; i < collection.length; i++) {
            acc = callback(acc, collection[i], i);
        }
    }
    else if (typeof collection === 'object'){
        const keys = Object.keys(collection);
        if (acc === undefined){
            firstKey = keys[0]
            acc = collection[firstKey]
            keys.splice(0,1)
        }
        for (let key of keys){
            acc = callback(acc, collection[key], key)
        }
    }
    return acc
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)){
        for (let i=0; i<collection.length; i++){
            if(predicate(collection[i]) === true){
                return collection[i]
            }
        }
    }
    else if (Array.isArray(collection) === false){
        for (let key in collection){
            let value = collection[key]
            if (predicate(value) === true){
                return value
            }
        }
    }
}

function myFilter(collection, predicate) {
    let newArr = []
    if (Array.isArray(collection)) {
        for (let i =0; i<collection.length; i++){
            if (predicate(collection[i]) === true) {
                newArr.push(collection[i])
            }
        }
    }
    else if (Array.isArray(collection)===false){
        for (let key in collection){
            if (predicate(collection[key])) {
                newArr.push(collection[key])
            }
        }
    }
    return newArr
}

function mySize(collection) {
    let counter = 0
    if (Array.isArray(collection)){
        for (let i = 0; i<collection.length;i++){
            counter++
        }
    }
    else if (Array.isArray(collection)===false){
        for(let key in collection){
            let value = collection[key]
            counter++
        }
    }
    return counter
}

function myFirst(array,n) {
    let newArr = []
    if (n===parseInt(n)){
        for (let i=0; i<n; i++){
            newArr.push(array[i])
        }
        return newArr
    }
    else {return array[0]}
}

function myLast(array,n) {
    if (n === undefined) {
        return array[array.length - 1];
    } 
    else if (Number.isInteger(n)) {
        if (n > array.length) {
            return array;
        } 
        else {
            return array.slice(array.length - n);
        }
    }
}

function myKeys(object) {
    let newArr = []
    for (let key in object) {
        newArr.push(key)
    }
    return newArr
}

function myValues(object) {
    let newArr = []
    for (let key in object) {
        newArr.push(object[key])
    }
    return newArr
}