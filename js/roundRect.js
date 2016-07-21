//填充
window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');
	
	context.lineWidth=5;
	context.strokeStyle="#005588";
	
	fillRoundRect(context,150,150,500,500,10,"#bbada0");

	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			fillRoundRect(context,170+i*120,170+j*120,100,100,6,"#ccc0b3");
		}
	}
		
};


function drawRoundRect(ctx,x,y,width,height,radius){
	ctx.save();
	ctx.translate(x,y);
	pathRoundRect(ctx,width,height,radius);
	ctx.strokeStyle="black";
	ctx.stroke();
	ctx.resore();
}

function pathRoundRect(ctx,width,height,radius){
	ctx.beginPath();
	ctx.arc(width-radius,height-radius,radius,0,Math.PI/2);
	ctx.lineTo(radius,height);
	ctx.arc(radius,height-radius,radius,Math.PI/2,Math.PI);
	ctx.lineTo(0,radius);
	ctx.arc(radius,radius,radius,Math.PI,Math.PI*3/2);
	ctx.lineTo(width-radius,0);
	ctx.arc(width-radius,radius,radius,Math.PI*3/2,Math.PI*2);
	ctx.closePath();
}

function fillRoundRect(ctx,x,y,width,height,radius,fillColor){
	if(2*radius>width || 2*radius>height){
		return;
	}
	ctx.save();
	ctx.translate(x,y);
	pathRoundRect(ctx,width,height,radius);
	ctx.fillStyle=fillColor || "black";
	ctx.fill();
	ctx.restore();
}


function strokeRoundRect(ctx,x,y,width,height,radius,lineWidth,strokeColor){
	if(2*radius>width || 2*radius>height){
		return;
	}
	ctx.save();
	ctx.translate(x,y);
	pathRoundRect(ctx,width,height,radius);
	ctx.lineWidth=lineWidth || 1;
	ctx.strokeStyle=strokeColor || "black";
	ctx.fill();
	ctx.resore();
}