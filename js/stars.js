window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=1200;
	canvas.height=800;
	var context=canvas.getContext('2d');

	// context.beginPath();
	// for(var i=0;i<5;i++){
	// 	context.lineTo(Math.cos((18+i*72)/180*Math.PI)*300+400,-Math.sin((18+i*72)/180*Math.PI)*300+400);
	// 	context.lineTo(Math.cos((54+i*72)/180*Math.PI)*150+400,-Math.sin((54+i*72)/180*Math.PI)*150+400);
	// }
	// context.closePath();

	//var skyStyle=context.createLinearGradient(0,0,0,canvas.height);
	var skyStyle=context.createRadialGradient(canvas.width/2,canvas.height,0,canvas.width/2,canvas.height,canvas.height);
	skyStyle.addColorStop(0.0,"#035");
	skyStyle.addColorStop(1.0,"black");
	context.fillStyle=skyStyle;
	context.fillRect(0,0,canvas.width,canvas.height);

	for(var i=0;i<200;i++){
		console.log('1');
		var r=Math.random()*5+5;//外圆半径
		var x=Math.random()*canvas.width;
		var y=Math.random()*canvas.height*0.65;
		var a=Math.random()*360;
		drawStar(context,x,y,r,a);
	}
	
	fillMoon(context,2,900,200,100,30);

	drawLand(context);
		
};

// //五角星函数
// function drawStar(ctx,x,y,R,r,rot){
// 	ctx.beginPath();
// 	for(var i=0;i<5;i++){
// 		ctx.lineTo(Math.cos((18+i*72-rot)/180*Math.PI)*R+x,-Math.sin((18+i*72-rot)/180*Math.PI)*R+y);
// 		ctx.lineTo(Math.cos((54+i*72-rot)/180*Math.PI)*r+x,-Math.sin((54+i*72-rot)/180*Math.PI)*r+y);
// 	}
// 	ctx.closePath();

// 	ctx.fillStyle="#fb3";
// 	ctx.strokeStyle="#fd5";
// 	ctx.lineWidth=3;
// 	ctx.lineJoin="round";

// 	ctx.fill();
// 	ctx.stroke();

// }
function drawLand(ctx){
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(0,600);
	ctx.bezierCurveTo(540,400,660,800,1200,600);
	ctx.lineTo(1200,800);
	ctx.lineTo(0,800);
	ctx.closePath();

	var landStyle=ctx.createLinearGradient(0,800,0,0);
	landStyle.addColorStop(0.0,"#030");
	landStyle.addColorStop(1.0,"#580");
	ctx.fillStyle=landStyle;

	ctx.fill();
	ctx.restore();
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
function fillMoon(ctx,d,x,y,R,rot,fillColor){
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rot*Math.PI/180);
	ctx.scale(R,R);
	pathMoon(ctx,d);
	ctx.fillStyle=fillColor || "#fb5";
	ctx.fill();
	ctx.restore();
}

function pathMoon(ctx,d){
	ctx.beginPath();
	ctx.arc(0,0,1,0.5*Math.PI,1.5*Math.PI,true);
	ctx.moveTo(0,-1);
	ctx.arcTo(d,0,0,1,dis(0,-1,d,0)/d);
	ctx.closePath();
}
function dis(x1,y1,x2,y2){
	return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}


