console.log('ml5 v',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Pq_KJrhbb/model.json',modelLoaded);

function modelLoaded()
{
  console.log('The model has been successfully loaded.');
}
