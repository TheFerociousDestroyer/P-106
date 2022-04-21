function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5_dRZa7Bl/', modelReady)}
    function modelReady()
    {
    classifier.classify(gotResult);
    }
    
    