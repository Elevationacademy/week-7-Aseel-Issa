

const printStars = function(num){
    if(num <= 0){
        return
    }
    let star = '*'
    for(let i=0; i<num; i++){
        console.log(star)
        star+= '*'
    }
}

const printBackwardsStars = function(num){
    if(num <= 0){
        return
    }
    let star = ''
    for(let i=0; i<num; i++){
        star+= '*'
    }
    for(i=0; i<num; i++){
        console.log(star)
        star = star.slice(0, -1)
    }
}

const printStarSeries = function(stars, count){
    for(let i=0; i<count; i++){
        printStars(stars)
        printBackwardsStars(stars-1)
        console.log(' ')
    }
}

const reverse = function(str){
    let reversed = ''
    for (let i=str.length-1; i>=0; i--){
        reversed += str.charAt(i)
    }
    console.log(reversed)
    return reversed
  }

const isPalindrom = function (str){
    // str = str.replaceAll(' ', '')
    str = str.split(' ').join('')

    for(let i=0, j=str.length-1; i<str.length/2; i++, j--){
        if (str.charAt(i)!=str.charAt(j)){
            return false
        }
    }

    return true
}
  


printStars(5)
console.log('--------------------------')
printBackwardsStars(5)
console.log('--------------------------')
printStarSeries(5, 3)
console.log('--------------------------')
reverse("dog") //should return "god"
reverse("race car") //should return "rac ecar"
console.log('--------------------------')
console.log(isPalindrom("race car"))
console.log(isPalindrom("racecr"))