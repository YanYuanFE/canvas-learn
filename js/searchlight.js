var searchLight = { x: 400, y: 400, radius: 150, vx: Math.random() * 5 + 10, vy: Math.random() * 5 + 10 };
var rot=0;
var isIncrease;
window.onload = function() {
    var canvas = document.getElementById('canvas');
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext('2d');

    setInterval(
        function() {
            draw(context);
            update(canvas.width, canvas.height);
        }, 40
    );

    function draw(ctx) {
        var canvas = ctx.canvas;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.beginPath();
        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.save();
        ctx.translate(searchLight.x,searchLight.y);
		ctx.rotate(rot/180*Math.PI);
		ctx.scale(searchLight.radius,searchLight.radius);
        //context.beginPath();
        //context.arc(searchLight.x, searchLight.y, searchLight.radius, 0, Math.PI * 2);
        starPath(ctx);

        context.fillStyle = "#fff";
        context.fill();
        ctx.restore();
        context.clip();

        context.fillStyle = "#058";
        context.font = "bold 150px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("Canvas", canvas.width / 2, canvas.height / 2);
        context.fillText("Canvas", canvas.width / 2, canvas.height / 4);
        context.fillText("Canvas", canvas.width / 2, canvas.height * 3 / 4);
        ctx.restore();






    }


    function update(canvasWidth, canvasHeight) {
    	if(searchLight.radius>700)
    		isIncrease=false;
    	else if(searchLight.radius<150){
    		isIncrease=true;
    	}
    	if(isIncrease){
    		searchLight.radius+=5;
    	}else{
    		searchLight.radius-=5;
    	}
    	// rot+=1;
        
     //    searchLight.x += searchLight.vx;
     //    searchLight.y += searchLight.vy;
     //    if (searchLight.x - searchLight.radius <= 0) {
     //        searchLight.vx = -searchLight.vx;
     //        searchLight.x = searchLight.radius;
     //    }

     //    if (searchLight.x + searchLight.radius >= canvasWidth) {
     //        searchLight.vx = -searchLight.vx;
     //        searchLight.x = canvasWidth - searchLight.radius;
     //    }

     //    if (searchLight.y - searchLight.radius <= 0) {
     //        searchLight.vy = -searchLight.vy;
     //        searchLight.y = searchLight.radius;
     //    }

     //    if (searchLight.y + searchLight.radius >= canvasWidth) {
     //        searchLight.vy = -searchLight.vy;
     //        searchLight.y = canvasWidth - searchLight.radius;
     //    }
        
    }


    function starPath(ctx){
	ctx.beginPath();
	for(var i=0;i<5;i++){
		ctx.lineTo(Math.cos((18+i*72)/180*Math.PI),
			-Math.sin((18+i*72)/180*Math.PI));
		ctx.lineTo(Math.cos((54+i*72)/180*Math.PI)*0.5,
			-Math.sin((54+i*72)/180*Math.PI)*0.5);
	}
	ctx.closePath();

	
	}












};
