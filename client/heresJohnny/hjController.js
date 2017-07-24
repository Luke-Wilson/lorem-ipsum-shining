angular.module('heresJohnny.hjController', [])
.controller('hjController', function(hjFactory) {
  var hj = this;
  hj.choice = 'shining';
  hj.text = {}
  hj.text.simpsons = '';
  hj.text.shining = '';
  hj.johnny = 'Johnny';

  hj.setChoice = (word) => {
    hj.johnny = word === 'simpsons' ? 'David Letterman' : 'Johnny';
    hj.choice = word;
  }

  hj.getSentence = () => {
    console.log('getting sentence');
    hj.text = hjFactory.getSentence(hj.numberOfSentences)
  }
})
