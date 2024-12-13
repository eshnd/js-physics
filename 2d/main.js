import "./functions";
import {PhysObject} from "./classes";

const canvas = document.getElementById("myCanvas");

//defining an object with x and y values and a speed of two
var test_obj = new PhysObject(canvas.width/2,canvas.height-30,2)
var test_obj2 = new PhysObject(canvas.width/2,canvas.height-30,10)
const ctx = canvas.getContext("2d");
obj_list = [test_obj,test_obj2]

//iterates through and renders each object
function drawObjects(x,y) {
  ctx.beginPath();
  for (var i =0;i <= obj_list.length-1;i++){
    ctx.arc(obj_list[i].x, obj_list[i].y, 10, 0, Math.PI * 2);
  
} 
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawObjects();
  for (var i =0;i <= obj_list.length-1;i++){
    obj_list[i].x += obj_list[i].speed;
    obj_list[i].y -= obj_list[i].speed;
  
} 
}

function startGame() {
  setInterval(draw, 10);
}
startGame()