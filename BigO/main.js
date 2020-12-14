

const findDuplicates = function(array){
    const trackObject = {}
    const duplicates = {}
    array.forEach(element => {
        if(trackObject[element]){
            duplicates[element] = element
        }else{
            trackObject[element] = element
        }
    });
    return duplicates
}

const findIndex = function(numbers, num){
    let pointer= numbers.length/2
    let range = numbers.length/2
    while(true){
        if(numbers[pointer]>num){
            if(range/2!=0){
                pointer -= Math.ceil(range/2)
            }else{
                pointer -= 1
                if(numbers[pointer] == num){
                    return pointer
                }else{
                    return null
                }
            }
            
        }else if(numbers[pointer]<num){
            if(range/2!=0){
                pointer+= Math.ceil(range/2)
            }else{
                pointer+= 1
                if(numbers[pointer] == num){
                    return pointer
                }else{
                    return null
                }
            }
        }else{
            return pointer
        }
        range = parseInt(range/2)
    }
}

let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]
console.log("2630 is at index "+findIndex(numbers, 2630))
console.log("469 is at index "+findIndex(numbers, 469))
console.log("470 is at index "+findIndex(numbers, 470))
console.log("24 is at index "+findIndex(numbers, 24))
console.log("2987 is at index "+findIndex(numbers, 2987))
console.log("30 is at index "+findIndex(numbers, 30))

const array = [1, 2, 3, 2, 4, 5, 1, 1]
console.log("duplicates are: "+JSON.stringify(findDuplicates(array)))

const array2 = [1, 2, 3, 4, 5]
console.log("duplicates are: "+JSON.stringify(findDuplicates(array2)))