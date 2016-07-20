window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');

	//保存状态
	context.save();
	context.fillStyle="red";
	context.translate(100,100);
	context.fillRect(0,0,400,400);
	//逆转
	// context.translate(-100,-100);
	// 返回save状态
	context.restore();

	//图形变换函数叠加
	context.save();
	context.fillStyle="green";
	context.translate(300,300);
	context.fillRect(0,0,400,400);
	context.restore();


	context.save();
	context.scale(1,1);
	context.strokeRect(50,50,200,200);
	context.restore();

	context.save();
	context.scale(2,2);
	context.strokeRect(50,50,200,200);
	context.restore();

	context.save();
	context.scale(3,3);
	context.strokeRect(50,50,200,200);
	context.restore();

	//放大了坐标，边框
	




	
	
};
