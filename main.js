noseX =0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550, 551);
    canvas.position(560,151);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialezed');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX +" noseY = " + noseY);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX =" + leftWristX +"  rightWristX = "+ rightWristX + " difference = " + difference);
    }
}
function draw() {
    background('#858B86');

    document.getElementById("square_side").innerHTML = "Largura e altura serão =" + difference +"px";
    fill('#F483284');
    stroke('#F44323');
    square(noseX, noseY, difference);
}