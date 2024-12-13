export class vector{
    constructor(direction,magnitude){
        this.direction = direction
        this.magnitude = magnitude
    }
}
export class PhysObject{
    constructor(x,y,speed){
        this.x = x
        this.y = y
        this.speed = speed
    }

}
module.exports = {PhysObject,vector}