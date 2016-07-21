//填充
window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');
	

	context.font="bold 40px Arial";
	context.fillStyle="#058";

	context.fillText("Canvas绘图学习",40,100);

	context.lineWidth=1;
	context.strokeStyle="#058";

	context.strokeText("Canvas绘图学习",40,200);

//最大文字宽度
	 context.fillText("Canvas绘图学习",40,300,200);

	context.strokeText("Canvas绘图学习",40,400,200);


	var linearGrad=context.createLinearGradient(0,0,800,0);
	linearGrad.addColorStop(0.0,"red");
	linearGrad.addColorStop(0.25,"orange");
	linearGrad.addColorStop(0.5,"yellow");
	linearGrad.addColorStop(0.75,"green");
	linearGrad.addColorStop(1.0,"purple");


	context.fillStyle=linearGrad;
	//context.fillText("Canvas绘图学习Canvas绘图学习Canvas绘图学习",40,500,800);
	

	var backgroundImage=new Image();
	backgroundImage.src="img/back.gif";
	// backgroundImage.onload=function(){
	// 	var pattern=context.createPattern(backgroundImage,"repeat");
	// 	context.fillStyle=pattern;
	// 	context.font="bold 100px Arial";
	// 	context.fillText("Canvas",40,650);
	// 	context.strokeText("Canvas",40,650);
	// }

	context.fillStyle="#058";
	context.font="bold 40px Arial";
	context.textAlign="center";
	context.textBaseline="middle";
	context.fillText("Canvas绘图学习",400,450);
	var textWidth=context.measureText("Canvas绘图学习").width;
	context.fillText("字符串宽度："+textWidth,400,500);

		
};



