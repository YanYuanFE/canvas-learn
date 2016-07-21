//填充
window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');
	
	// context.lineWidth=5;
	// context.strokeStyle="#005588";
	
	
	// context.arc(400,400,300,0.5*Math.PI,1.5*Math.PI,true);
	// context.moveTo(400,100);
	// context.arcTo(1200,400,400,700,(400-100)*dis(400,100,1200,400)/(1200-400));
	// context.stroke();
	fillMoon(context,2,400,400,300,0);

		
};

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
	// ctx.arcTo(d,0,0,1,dis(0,-1,d,0)/d);
	ctx.quadraticCurveTo(1.2,0,0,1);
	ctx.closePath();
}
function dis(x1,y1,x2,y2){
	return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}
