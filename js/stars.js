window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');

	// context.beginPath();
	// for(var i=0;i<5;i++){
	// 	context.lineTo(Math.cos((18+i*72)/180*Math.PI)*300+400,-Math.sin((18+i*72)/180*Math.PI)*300+400);
	// 	context.lineTo(Math.cos((54+i*72)/180*Math.PI)*150+400,-Math.sin((54+i*72)/180*Math.PI)*150+400);
	// }
	// context.closePath();

	// var skyStyle=context.createLinearGradient(0,0,0,canvas.height);
	// skyStyle.addColorStop(0.0,"black");
	// skyStyle.addColorStop(1.0,"#035");
	context.fillStyle='black';
	context.fillRect(0,0,canvas.width,canvas.height);

	for(var i=0;i<200;i++){
		
		var r=Math.random()*10+10;//外圆半径
		var x=Math.random()*canvas.width;
		var y=Math.random()*canvas.height*0.65;
		var a=Math.random()*360;
		drawStar(context,x,y,r,a);
	}
	
		
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

function drawStar(ctx,x,y,R,rot){
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rot/180*Math.PI);
	ctx.scale(R,R);
	startPath(ctx);

	ctx.fillStyle="#fb3";
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
		ctx.lineTo(Math.cos((18+i*72)/180*Math.PI),-Math.sin((18+i*72)/180*Math.PI));
		ctx.lineTo(Math.cos((54+i*72)/180*Math.PI)*0.5,-Math.sin((54+i*72)/180*Math.PI)*0.5);
	}
	ctx.closePath();

	
}


