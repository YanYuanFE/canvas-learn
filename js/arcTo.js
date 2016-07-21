//填充
window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');
	
	context.lineWidth=5;
	context.strokeStyle="#005588";
	
	// context.beginPath();
	// context.moveTo(150,150);
	// context.arcTo(650,150,650,650,300);

	// context.lineWidth=6;
	// context.strokeStyle="red";
	// context.stroke();

	// context.beginPath();
	// context.moveTo(150,150);
	// context.lineTo(650,150);
	// context.lineTo(650,650);
	// context.lineWidth=2;

	// context.lineWidth=2;
	// context.strokeStyle="gray";
	// context.stroke();
	arcToTest(context,150,150,650,150,650,650,600);

		
};


function arcToTest(ctx,x0,y0,x1,y1,x2,y2,R){
	ctx.beginPath();
	ctx.moveTo(x0,y0);
	ctx.arcTo(x1,y1,x2,y2,R);

	ctx.lineWidth=6;
	ctx.strokeStyle="red";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(x0,y0);
	ctx.lineTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineWidth=2;

	ctx.lineWidth=2;
	ctx.strokeStyle="gray";
	ctx.stroke();

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