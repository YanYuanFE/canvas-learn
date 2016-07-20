//填充
window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');
	//线性渐变
	var linearGrad=context.createLinearGradient(-200,-200,1000,1000);
	// linearGrad.addColorStop(0.0,"#fff");
	// linearGrad.addColorStop(1.0,"#000");
	// 
	linearGrad.addColorStop(0.0,"#fff");
	linearGrad.addColorStop(0.25,"yellow");
	linearGrad.addColorStop(0.5,"green");
	linearGrad.addColorStop(0.75,"blue");
	linearGrad.addColorStop(1.0,"#000");


	context.fillStyle=linearGrad;
	context.fillRect(200,200,800,800);

	
	
		
};


