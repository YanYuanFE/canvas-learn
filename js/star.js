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

	context.lineWidth=10;
	//设置返回所创建边角的类型，当两条线交汇时。默认尖角miter
	// context.lineJoin="bevel";斜角
	// context.lineJoin="round";圆角
	context.miterLimit=50;
	
	drawStar(context,40,300,400,400,a);
		
};

//五角星函数
function drawStar(ctx,r,R,x,y,rot){
	ctx.beginPath();
	for(var i=0;i<5;i++){
		ctx.lineTo(Math.cos((18+i*72-rot)/180*Math.PI)*R+x,-Math.sin((18+i*72-rot)/180*Math.PI)*R+y);
		ctx.lineTo(Math.cos((54+i*72-rot)/180*Math.PI)*r+x,-Math.sin((54+i*72-rot)/180*Math.PI)*r+y);
	}
	ctx.closePath();
	ctx.stroke();

}

