

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

const array = [1, 2, 3, 2, 4, 5, 1, 1]
console.log("duplicates are: "+JSON.stringify(findDuplicates(array)))

const array2 = [1, 2, 3, 4, 5]
console.log("duplicates are: "+JSON.stringify(findDuplicates(array2)))