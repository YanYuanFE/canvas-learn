window.onload=function(){
	
	// context.globalAlpha=0.7;
	// for(var i=0;i<100;i++){
	// 	var R=Math.floor(Math.random()*255);
	// 	var G=Math.floor(Math.random()*255);
	// 	var B=Math.floor(Math.random()*255);
	// 	context.fillStyle="rgb("+R+","+G+","+B+")";
	// 	context.beginPath();
	// 	context.arc(Math.random()*canvas.width,Math.random()*canvas.height,Math.random()*100,0,Math.PI*2);
	// 	context.fill();
	// }

	

	draw("source-over");

	var buttons=document.getElementById("buttons").getElementsByTagName("a");
	
	// 点击显示不同层叠方式
	for(var i=0;i<buttons.length;i++){
		buttons[i].onclick=function(){
			draw(this.text);
			return false;
		}
	}
	
	//绘制函数
	function draw(compositeStyle){
		var canvas=document.getElementById('canvas');
		canvas.width=1200;
		canvas.height=800;
		var context=canvas.getContext('2d');
		context.clearRect(0,0,canvas.width,canvas.height);

		//文字标记
		context.fillStyle="#058";
		context.font="bold 40px Arial";
		context.textAlign="center";
		context.textBaseline="middle";
		context.fillText("globalCompositeOperation="+compositeStyle,canvas.width/2,60);

		//绘制正方形
		context.fillStyle="blue";
		context.fillRect(300,150,500,500);

		context.globalCompositeOperation=compositeStyle;
		//绘制三角形
		context.fillStyle="red";
		context.beginPath();
		context.moveTo(700,250);
		context.lineTo(1000,750);
		context.lineTo(400,750);
		context.closePath();
		context.fill();
	}



	
		
};


