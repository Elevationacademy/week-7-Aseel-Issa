const add = function(a, b){
    return a + b
}

//should return true if n is even, false otherwise
const isEven = function(n) {
    return n % 2 == 0 ? true : false
}

//should remove at least one element from the array `arr`
const removeAtLeastOne = function(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
    arr.splice(0, numItemsToRemove)
    return arr
}

//should return a clean string without these symbols: "!", "#", ".", ",", "'"
const simplify = function(str) {
    let symbols = ["!", "#", ".", ",", "'"]
    return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
}

//should return true if trues are more than falses in an array, otherwise it should return false, also shall have at least one boolean element 
const validate = function(arr) {
    if(arr.length == 0){
        return {error: "Need at least one boolean"}
    }
    let trueCounter = 0;
    for (const element of arr) {
        if(element){
            trueCounter++
        }
    }
    if(trueCounter > arr.length/2){
        return true
    }else{
        return false
    }
}

module.exports = {add,
                  isEven,
                  removeAtLeastOne,
                  simplify,
                  validate}