function setup(){
Canvas= createCanvas(300,300);
Canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

 

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', getpose)




}

function draw(){

  image(video,0, 0, 300,300 );

}

function take_snap(){

    save('filter.png');

}


function modelLoaded(){

console.log('PoseNet Is Initilised')

}


function getpose(){


  if (results.length > 0)
  {
    console.log(results);
    console.log("nose X = " + results[0].pose.nose.x)
    
console.log("nose Y = " + results[0].pose.nose.y)
  }


}