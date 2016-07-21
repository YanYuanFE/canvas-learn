//填充
window.onload=function(){
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;
	var context=canvas.getContext('2d');
	
	context.beginPath();
	context.font="bold 40px Arial";
	context.fillStyle="black";
	context.fillRect(0,0,canvas.width,canvas.height);
	context.beginPath();
	context.arc(400,400,150,0,Math.PI*2);
	context.fillStyle="#fff";
	context.fill();
	context.clip();



	


	context.fillStyle="#058";
	context.font="bold 150px Arial";
	context.textAlign="center";
	context.textBaseline="middle";
	context.fillText("Canvas",canvas.width/2,canvas.height/2);


		
};



