var balls = [];
window.onload = function() {

    var canvas = document.getElementById('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    var context = canvas.getContext('2d');


    for (var i = 0; i < 100; i++) {
        var R = Math.floor(Math.random() * 255);
        var G = Math.floor(Math.random() * 255);
        var B = Math.floor(Math.random() * 255);

        var radius = Math.random() * 50 + 20;

        aBall = {
            color: "rgb(" + R + "," + G + "," + B + ")",
            radius: radius,
            x: Math.random() * (canvas.width - 2 * radius) + radius,
            y: Math.random() * (canvas.height - 2 * radius) + radius,
            vx: (Math.random() * 5 + 5) * Math.pow(-1, Math.floor(Math.random() * 100)),
            vy: (Math.random() * 5 + 5) * Math.pow(-1, Math.floor(Math.random() * 100))

        }
        balls[i] = aBall;
        context.fillStyle = "rgb(" + R + "," + G + "," + B + ")";
        context.beginPath();
        context.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 100, 0, Math.PI * 2);
        context.fill();
    }
    setInterval(
        function() {
            draw(context);
            update(canvas.width, canvas.height);
        }, 50
    );




    //绘制函数
    function draw(ctx) {
        var canvas = ctx.canvas;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < balls.length; i++) {
            context.globalCompositeOperation = "xor";
            ctx.fillStyle = balls[i].color;
            ctx.beginPath();
            ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }



    }

    function update(canvasWidth, canvasHeight) {
        for (var i = 0; i < balls.length; i++) {
            balls[i].x += balls[i].vx;
            balls[i].y += balls[i].vy;
            if (balls[i].x - balls[i].radius <= 0) {
                balls[i].vx = -balls[i].vx;
                balls[i].x = balls[i].radius;
            }

            if (balls[i].x + balls[i].radius >= canvasWidth) {
                balls[i].vx = -balls[i].vx;
                balls[i].x = canvasWidth - balls[i].radius;
            }

            if (balls[i].y - balls[i].radius <= 0) {
                balls[i].vy = -balls[i].vy;
                balls[i].y = balls[i].radius;
            }

            if (balls[i].y + balls[i].radius >= canvasWidth) {
                balls[i].vy = -balls[i].vy;
                balls[i].y = canvasWidth - balls[i].radius;
            }
        }
    }








};
