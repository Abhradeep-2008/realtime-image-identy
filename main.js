function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center() ;
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Df9g_GfoT/model.json', modelLoaded);

}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results){
 if(error){
     console.log(error);
 }
 else{
     console.log(results);
     document.getElementById("object_rslt").innerHTML = results[0].label;
     document.getElementById("accuracy_rslt").innerHTML = results[0].confidence.toFixed(3) + "%";
 }
}

function modelLoaded(){
    console.log("Model Loaded!");
}


