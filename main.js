function setup(){
canvas=createCanvas(500,500)
canvas.center()
video=createCapture(VIDEO)
video.hide()
poseNet=ml5.poseNet(video,modelloaded)
poseNet.on('pose',getposes)
}
function preload(){}
function draw(){
image(video,0,0,500,500)
}
function snapshot(){
save('Me_clown.png')
}
function modelloaded(){
    console.log ("modelloaded")
}
function getposes(results){
    console.log("results")
}