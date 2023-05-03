nose_x=0;
nose_y=0;
right_wrist_x=0;
left_wrist_x=0;
difference=0;

function setup() {
    canvas = createCanvas(600, 450)
    canvas.position(100, 200)

    video = createCapture(VIDEO)
    video.size(600, 450)
    video.position(750, 200)

    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotPoses)
}

//gotPoses is a function that will help us fetch all the body part's position

//results is an array that will store the positions

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        console.log("Hello")

        nose_x=results[0].pose.nose.x
        nose_y=results[0].pose.nose.y
        left_wrist_x=results[0].pose.leftWrist.x
        right_wrist_x=results[0].pose.rightWrist.x

        difference= floor(left_wrist_x-right_wrist_x)
    }
}

function modelLoaded() {
    console.log("Model Loaded Successfully")
}

function draw() {
    background("#00ffff")
    document.getElementById("ans").innerHTML="Size of the square is "+ difference +" px."
    stroke("black")
    strokeWeight(3)
    fill("magenta")
    square(nose_x,nose_y,difference)
}