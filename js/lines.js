window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');

	//绘制封闭多边形
	context.beginPath();
	context.moveTo(100,350);
	context.lineTo(500,350);
	context.lineTo(500,200);
	context.lineTo(700,400);
	context.lineTo(500,600);
	context.lineTo(500,450);
	context.lineTo(100,450);
	context.closePath();

	context.lineWidth=10;
	//描边
	context.strokeStyle="#058";
	//颜色填充
	context.fillStyle="yellow";


	context.fill();//注意绘制与填充的顺序

	context.stroke();

	// drawRect(context,100,100,400,400,10,'#058',"red");
	// drawRect2(context,300,300,400,400,10,'#058',"rgba(0,256,0,0.5");



	context.beginPath();
	context.moveTo(100,200);
	context.lineTo(700,200);
	context.lineCap="butt";
	context.stroke();

	context.beginPath();
	context.moveTo(100,400);
	context.lineTo(700,400);
	context.lineCap="round";
	context.stroke();

	context.beginPath();
	context.moveTo(100,600);
	context.lineTo(700,600);
	context.lineCap="square";
	context.stroke();

	




	
	
};

//绘制矩形
function drawRect(ctx,x,y,width,height,borderWidth,borderColor,fillColor){
	ctx.beginPath();
	// ctx.moveTo(x,x);
	// ctx.lineTo(x+width,y);
	// ctx.lineTo(x+width,y+height);
	// ctx.lineTo(x,y+height);
	// 矩形绘制函数
	ctx.rect(x,y,width,height);
	ctx.closePath();

	ctx.lineWidth=borderWidth;
	ctx.fillStyle=fillColor;
	ctx.strokeStyle=borderColor;

	ctx.fill();
	ctx.stroke();
}


function drawRect2(ctx,x,y,width,height,borderWidth,borderColor,fillColor){
	

	ctx.lineWidth=borderWidth;
	ctx.fillStyle=fillColor;
	ctx.strokeStyle=borderColor;

	ctx.fillRect(x,y,width,height);
	ctx.strokeRect(x,y,width,height);
}