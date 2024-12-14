
//gets the dot product of two vectors
function dot_product(vm1,vm2,va1,va2){
    return vm1*vm2*Math.cos(va1,va2)
}
//returns the angle between two vectors for the use in dot products
function get_angle_difference(theta1,theta2){
    return Math.abs(theta1-theta2)
}
//function for collision with walls
function wall_collision(obj_direction){

}
function move(object,velocity,time){
    return object.x

}
function distance(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
}
//clamps direction value to be inbetween 0 and 360
export function clamp(direction) {
    if (direction > 360){
        return direction - 360
    }
    if (direction <0){
        return direction + 360
    }
    else{
        return direction
    }
    
}
module.exports ={clamp,distance}