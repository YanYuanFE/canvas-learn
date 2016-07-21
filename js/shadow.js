window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');

	context.fillStyle="#058";

	context.shadowColor="gray";
	context.shadowOffsetX=10;
	context.shadowOffsetY=10;
	context.shadowBlur=5;
	context.fillStyle="#058";
	context.font="bold 120px Arial";
	context.textAlign="center";
	context.textBaseline="middle";

	context.fillText("Canvas",400,450);
		
};
