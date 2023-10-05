// Your code here

class Polygon{
    constructor(array){
        this.array = array
    }

    get countSides(){
        let sides = this.array
        return sides.length
    }

    get perimeter(){
        return this.array.reduce((sum,val)=> sum += val)
    }
}

class Triangle extends Polygon {
    
    get isValid(){
        let triangle = false
        for(let i = 0; i<this.countSides;i++){
            if(this.perimeter-this.array[i] > this.array[i])
                triangle = true

        return triangle
        }   
    }
}

class Square extends Polygon{

    get isValid(){
        let square = false
        if (this.array[0] === this.array[1] && this.array[2] === this.array[3])
        
        square = true
        return square 
        
    }
    
    get area(){
       return this.array[0] * this.array[1]
    }
}