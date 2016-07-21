window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');

	context.beginPath();
	context.arc(400,400,300,0,Math.PI*2,false);
	context.arc(400,400,150,0,Math.PI*2,true);
	context.closePath();

	context.fillStyle="#058";
	context.shadowColor="gray";
	context.shadowOffsetX=10;
	context.shadowOffsetY=10;
	context.shadowBlur=10;
	

	context.fill();
		
};
