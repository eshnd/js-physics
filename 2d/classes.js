export class vector{
    constructor(direction,magnitude){
        this.direction = direction
        this.magnitude = magnitude
    }
}
export class PhysObject{
    constructor(x,y,speed,direction){
        this.x = x
        this.y = y
        this.speed = speed
        this.direction = direction
    }

}

module.exports = {PhysObject,vector}