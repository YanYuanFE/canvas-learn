var balls = [];
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
window.onload = function() {
    canvas.width = 800;
    canvas.height = 800;



    for (var i = 0; i < 10; i++) {
        var aBall = {

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 50 + 20
        }

        balls[i] = aBall;
        draw();
        //canvas.addEventListener("mouseup",detect);
        canvas.addEventListener("mousemove", detect);

    }





    //绘制函数
    // function draw() {

    //     for (var i = 0; i < balls.length; i++) {


    //         context.beginPath();
    //         context.arc(balls[i].x, balls[i].y, balls[i].r, 0, 2 * Math.PI);
    //         context.fillStyle = "#058";
    //         context.fill();
    //     }



    // }

    // function detect(event) {
    //     //获取鼠标点击在canvas的坐标
    //         var x = event.clientX-canvas.getBoundingClientRect().left;
    //         var y= event.clientY-canvas.getBoundingClientRect().top;


    //         for (var i = 0; i < balls.length; i++) {


    //         context.beginPath();
    //         context.arc(balls[i].x, balls[i].y, balls[i].r, 0, 2 * Math.PI);

    //         //判断点击坐标是否在某个小球路径
    //         if(context.isPointInPath(x,y)){
    //             context.fillStyle = "red";
    //             context.fill();
    //         }

    //     }
    // }


    function detect(event) {
        //获取鼠标点击在canvas的坐标
        var x = event.clientX - canvas.getBoundingClientRect().left;
        var y = event.clientY - canvas.getBoundingClientRect().top;


        draw(x, y);
    }


    function draw(x,y) {
        context.clearRect(0,0,canvas.width,canvas.height);


        for (var i = 0; i < balls.length; i++) {


            context.beginPath();
            context.arc(balls[i].x, balls[i].y, balls[i].r, 0, 2 * Math.PI);
            
            if(context.isPointInPath(x,y)){
                context.fillStyle = "red";
                
            }else{
                context.fillStyle = "#058";
            }
            context.fill();
        }



    }





};
