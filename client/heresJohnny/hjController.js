angular.module('heresJohnny.hjController', [])
.controller('hjController', function(hjFactory) {
  var hj = this;
  hj.simpsons = false;

  hj.result = "test";

  hj.getSentence = () => {
    console.log('getting sentence');
    console.log(hj.simpsons);
    hj.result = hjFactory.getSentence(hj.numberOfSentences, hj.simpsons)
  }
})
