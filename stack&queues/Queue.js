

class Queue{
    constructor(){
        this.data = []
        this.length = 0;
    }

    isEmpty(){
        if(this.length == 0){
            return true
        }else{
            return false
        }
    }

    print(){
        console.log(this.data)
    }

    enqueue(element){
        this.data.push(element)
        this.length ++
    }

    peek(){
        if(!this.isEmpty()){
        return this.data[0]
        }
        return null
    }

    dequeue(){
        if(!this.isEmpty()){
            this.length--
            return this.data.shift()
        }
         return null
    }
}

let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2] // should be [2,4] because 4 was added last
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true