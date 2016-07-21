//填充
window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');
	//线性渐变
	var linearGrad=context.createLinearGradient(-200,-200,1000,1000);
	// linearGrad.addColorStop(0.0,"#fff");
	// linearGrad.addColorStop(1.0,"#000");
	// 
	// linearGrad.addColorStop(0.0,"#fff");
	// linearGrad.addColorStop(0.25,"yellow");
	// linearGrad.addColorStop(0.5,"green");
	// linearGrad.addColorStop(0.75,"blue");
	// linearGrad.addColorStop(1.0,"#000");


	// context.fillStyle=linearGrad;
	// context.fillRect(200,200,800,800);

	//径向渐变
	// var radialGrad=context.createRadialGradient(400,400,0,400,400,500);
	// radialGrad.addColorStop(0.0,'white');
	// radialGrad.addColorStop(0.25,'yellow');
	// radialGrad.addColorStop(0.5,'green');
	// radialGrad.addColorStop(0.75,'blue');
	// radialGrad.addColorStop(1.0,'black');
	// context.fillStyle=radialGrad;
	// context.fillRect(0,0,800,800);

	//图片填充
	// var backgroundImage=new Image();
	// backgroundImage.src="./img/finance.jpg";
	// backgroundImage.onload=function(){

	// 	var pattern=context.createPattern(backgroundImage,"repeat");
	// 	context.fillStyle=pattern;
	// 	context.fillRect(0,0,800,800);
	// }

	var backCanvas=createBackgroundCanvas();
	var pattern=context.createPattern(backCanvas,"repeat");
	context.fillStyle=pattern;
	context.fillRect(0,0,800,800);





	
	
		
};


function createBackgroundCanvas(){
		var backCanvas=document.createElement("canvas");
		backCanvas.width=100;
		backCanvas.height=100;
		var backCanvasContext=backCanvas.getContext("2d");
		drawStar(backCanvasContext,50,50,10,0);
		return backCanvas;
	}

	
function drawStar(ctx,x,y,R,rot){
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rot/180*Math.PI);
	ctx.scale(R,R);
	startPath(ctx);

	ctx.strokeStyle="#fb3";
	// ctx.strokeStyle="#fd5";
	// ctx.lineWidth=3;
	// ctx.lineJoin="round";

	ctx.fill();
	ctx.stroke();

	ctx.restore();
	//绘制出在（x，y）大小为R，旋转rot度的五角星

}

//标准五角星函数
function startPath(ctx){
	ctx.beginPath();
	for(var i=0;i<5;i++){
		ctx.lineTo(Math.cos((18+i*72)/180*Math.PI),
			-Math.sin((18+i*72)/180*Math.PI));
		ctx.lineTo(Math.cos((54+i*72)/180*Math.PI)*0.5,
			-Math.sin((54+i*72)/180*Math.PI)*0.5);
	}
	ctx.closePath();

	
}

