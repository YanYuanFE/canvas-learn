//变换矩阵
window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');

	

	context.fillStyle="red";
	context.strokeStyle="#058";
	context.lineWidth=5;

	//a,d 水平、垂直缩放
	//b,c 水平、垂直倾斜
	//e,f 水平、垂直位移
	context.save();
	context.transform(1,0,0,1,50,100);
	context.transform(2,0,0,1.5,0,0);
	context.transform(1,-0.2,-0.2,1,100,100);
	context.setTransform(1,0,0,1,100,100);//忽略之前所有transform

	context.fillRect(50,50,300,300);
	context.strokeRect(50,50,300,300);
	context.restore();
	
		
};


