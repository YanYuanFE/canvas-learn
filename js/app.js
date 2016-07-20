window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');

	//绘制连续折线
	// context.moveTo(100,350);
	// context.lineTo(500,350);
	// context.lineTo(500,200);
	// context.lineTo(700,400);
	// context.lineTo(500,600);
	// context.lineTo(500,450);
	// context.lineTo(100,450);
	// context.lineTo(100,350);

	// context.lineWidth=10;
	// context.strokeStyle="#058";

	// context.stroke()

	//绘制三条不同折线,基于状态绘制
	context.lineWidth=10;

	context.beginPath();
	context.moveTo(100,200);
	context.lineTo(300,400);
	context.lineTo(100,600);
	context.strokeStyle="red";
	context.stroke();

	context.beginPath();
	context.moveTo(300,200);
	context.lineTo(500,400);
	context.lineTo(300,600);
	context.strokeStyle="green";
	context.stroke();

	context.beginPath();
	context.moveTo(500,200);
	context.lineTo(700,400);
	context.lineTo(500,600);
	
	context.strokeStyle="blue";
	context.stroke();

	
};