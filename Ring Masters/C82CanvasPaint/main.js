canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var lastX, lastY;
color = "blue";
radius = 40;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown"
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    currentX = e.clientX - canvas.offsetLeft
    currentY = e.clientY - canvas.offsetTop
    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.arc(currentX, currentY, radius, 0, 2* Math.PI)
        ctx.stroke();
    }
  lastX = currentX
  lastY = currentY  
}
function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}