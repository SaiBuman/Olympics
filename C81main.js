canvas = document.getElementById("my_canvas");
ctx1 = canvas.getContext("2d");
ctx1.beginPath();
ctx1.strokeStyle = "blue" ;
ctx1.lineWidth = 2;
ctx1.arc(200,200,40,0,2 * Math.PI);
ctx1.stroke();

ctx1.beginPath();
ctx1.strokeStyle = "yellow" ;
ctx1.lineWidth = 2;
ctx1.arc(250,225,40,0,2 * Math.PI);
ctx1.stroke();

ctx1 = canvas.getContext("2d");
ctx1.beginPath();
ctx1.strokeStyle = "black" ;
ctx1.lineWidth = 2;
ctx1.arc(300,200,40,0,2 * Math.PI);
ctx1.stroke();

ctx1 = canvas.getContext("2d");
ctx1.beginPath();
ctx1.strokeStyle = "green" ;
ctx1.lineWidth = 2;
ctx1.arc(350,225,40,0,2 * Math.PI);
ctx1.stroke();


ctx1 = canvas.getContext("2d");
ctx1.beginPath();
ctx1.strokeStyle = "red" ;
ctx1.lineWidth = 2;
ctx1.arc(400,200,40,0,2 * Math.PI);
ctx1.stroke();


