
//gets the dot product of two vectors
function dot_product(vm1,vm2,va1,va2){
    return vm1*vm2*Math.cos(va1,va2)
}
//returns the angle between two vectors for the use in dot products
function get_angle_difference(theta1,theta2){
    return Math.abs(theta1-theta2)
}