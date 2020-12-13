const {add} = require('./code')

const {isEven} = require('./code')
const {removeAtLeastOne} = require('./code')
const {simplify} = require('./code')
const {validate} = require('./code')

test("add should return sum of a + b", () => {
    let sum = add(1, 2)
    expect(sum).toBe(3)
})

test("should return true if n is even, false otherwise", () => {
    let sum = isEven(2)
    expect(sum).toBeTruthy()

    sum = isEven(1)
    expect(sum).toBeFalsy()

    sum = isEven(0)
    expect(sum).toBeTruthy()

    // sum = isEven('even')
    // expect(sum).toBeNull()
})

test("should remove at least one element from the array `arr`", () => {
    let arr = [1, 2, 3, 4]
    let newArr = removeAtLeastOne(arr)
    expect(newArr.length).toBeLessThan(4)

    arr = [1]
    newArr = removeAtLeastOne(arr)
    expect(newArr.length).toBe(0)

    arr = [0]
    newArr = removeAtLeastOne(arr)
    expect(newArr.length).toBe(0)
})

test("should return true if trues are more than falses in an array, otherwise it should return false, also shall have at least one boolean element ", () => {
    let arr = [true, false, false, true, true]
    let result = validate(arr)
    expect(result).toBeTruthy()

    arr = [true, false, false, true]
    result = validate(arr)
    expect(result).toBeFalsy()

    arr = [true, false, false]
    result = validate(arr)
    expect(result).toBeFalsy()

    arr = []
    result = validate(arr)
    expect(result).toEqual({error: "Need at least one boolean"})
    
})

test("should return a clean string without these symbols: !, #, ., ,, '", () => {
    let str = simplify("#test!")
    let forbidden = ["!", "#", ".", ",", "'"]
    for (const f of forbidden) {
        expect(str).toEqual(expect.not.stringContaining(f))
    }
    
})