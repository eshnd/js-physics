import {clamp,distance} from "./functions";
import {PhysObject} from "./classes";

const canvas = document.getElementById("myCanvas");
const reset = document.getElementById("reset")
const new_obj = document.getElementById("new_obj")
const dir_input = document.getElementById("direction_input")
const speed_input = document.getElementById("speed_input")
const clear = document.getElementById("clear")
//defining an object with x and y values and a speed of two
var test_obj = new PhysObject(canvas.width/2,canvas.height-30,2,45)
const ctx = canvas.getContext("2d");
var obj_list = [test_obj]
//iterates through and renders each object
clear.addEventListener("click",()=>{
obj_list = []
})
new_obj.addEventListener("click",()=>{
  if (dir_input.value =="random"){
       obj_list.push(new PhysObject(canvas.width/2,canvas.height-30,speed_input.value,Math.floor(Math.random() * 360)));

  }else{
    obj_list.push(new PhysObject(canvas.width/2,canvas.height-30,speed_input.value,dir_input.value));

  }

})
reset.addEventListener("click", () => {
  for (var i =0;i <= obj_list.length-1;i++){
    obj = obj_list[i]
    obj.x = canvas.width/2
    obj.y = canvas.height-30
    } 
  }
)
function move_objects(){
  //wall collision segment
  for (var i =0;i <= obj_list.length-1;i++){
    obj = obj_list[i]
    if (obj.x > canvas.width|obj.x<0){
      obj.direction -= 90
    }
    if (obj.y >canvas.height|obj.y <0 ){
      obj.direction -= 90
    }
  //object collision segment
  for (var j = 0;j <=obj_list.length-1;j++){
    obj2 = obj_list[j]
    if (obj_list.length > 1){
    if(distance(obj.x,obj.y,obj2.x,obj2.y)<10){
      obj.direction -= obj2.direction - obj.direction
      obj2.direction -= obj.direction - obj2.direction
    }
  }
  }
  //clamp direction value
  obj.direction = clamp(obj.direction)
  //moves after direction is calculated
    obj.x += obj.speed * Math.cos(obj.direction *Math.PI /180);
    obj.y -= obj.speed * Math.sin(obj.direction *Math.PI /180)

} 
}
function drawObjects() {

  for (var i =0;i <= obj_list.length-1;i++){
    //similar to pen down in scratch
    ctx.beginPath();
    //creates a circle with the specified radius at said coordinates
    ctx.arc(obj_list[i].x, obj_list[i].y, 10, 0, Math.PI * 2);
    //sets and fills it with the specified color
    ctx.fillStyle = "#00000";
    ctx.fill();
    //similar to pen down
    ctx.closePath();
} 

}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawObjects();
  move_objects();

}

function startGame() {
  setInterval(draw, 10);
}
startGame()