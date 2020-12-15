

class MinStack{
    constructor(){
        this.data = []
        this.length =0
        this.sortedAscending = []
    }

    push(num){
        if(this.length == 0){
            this.sortedAscending.push(num)
        }
        else{
            for(let i=0; i<this.sortedAscending.length; i++){
                if(num < this.sortedAscending[i]){
                    this.sortedAscending.splice((i-1), 0, num)
                    break
                }
            }
        }
        this.data.push(num)
        this.length++
    }

    pop(){
        const num = this.data[this.data.length-1]
        if(this.length == 0){
            return
        }
        this.data.splice(this.data.length-1, 1)
        this.length--
        for(let i=0; i<this.sortedAscending.length; i++){
            if(num == this.sortedAscending[i]){
                this.sortedAscending.splice((i), 1)
                break
            }
        }

    }

    getMin(){
        if(this.length != 0){
            return this.sortedAscending[0]
        }else{
            return null
        }
    }
    
}

let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19