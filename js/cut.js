window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');

	context.beginPath();
	context.rect(100,100,600,600);
	pathRect(context,200,200,400,200);
	pathTriangle(context,300,450,150,650,450,650);
	context.arc(550,550,100,0,Math.PI*2,true);
	context.closePath();

	context.fillStyle="#058";
	context.shadowColor="gray";
	context.shadowOffsetX=10;
	context.shadowOffsetY=10;
	context.shadowBlur=10;
	

	context.fill();
		
};

function pathRect(ctx,x,y,width,height){
	
	ctx.moveTo(x,y);
	ctx.lineTo(x,y+height);
	ctx.lineTo(x+width,y+height);
	ctx.lineTo(x+width,y);
	ctx.moveTo(x,y);
	
	
	
}

function pathTriangle(ctx,x1,y1,x2,y2,x3,y3){
	
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineTo(x3,y3);
	ctx.lineTo(x1,y1);
	
	
}



