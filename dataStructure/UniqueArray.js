

class UniqueArray{

    constructor(){
        this.data = {}
        this.length= 0
    }

    add(item){
        if(this.exists(item)){
            return 'item is already stored in the unique array'
        }else{
            this.data[item] = this.length
            this.length++
            return `${item} has been stored in the unique array at index ${this.data[item]}`
        }
    }

    showAll(){
        let str = "["
        for (const key in this.data) {
              str+= key + ", "
        }

        str += "]"
        console.log(str)
    }

    exists(item){
        if(this.data[item]!= undefined){
            return true
        }else{
            return false
        }
    }
    get(index){
        for (const key in this.data) {
            if (this.data[key] == index) {
                return key
            }
        }
        return -1
    }

}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"


//Extension {switching this.data to have pairs of index: item instead of item:index}

