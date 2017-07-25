angular.module('heresJohnny.hjFactory', [])
.factory('hjFactory', () => {
  var shiningSentence = "All work and no play makes Jack a dull boy. ";
  var simpsonSentence = "No beer and no TV make Homer go crazy. ";
  var typoizeWord = function(word, pop) {
    var wordArr = word.split('');
    var dIndex = Math.floor(Math.random() * wordArr.length);
    if (pop) {
      wordArr.splice(dIndex, 0, wordArr[dIndex]);
    } else {
      wordArr.splice(dIndex, 1);
    }
    return wordArr.join('');
  }

  var randomizer = function(sentence) {
    var sentenceArr = sentence.split(' ');
    var typos = Math.floor(Math.random() * 3);

    var add, word;
    for (var i = 0; i < typos; i++) {
      add = Math.random() > 0.3 ? true : false;
      sIndex = Math.floor(Math.random() * sentenceArr.length);
      sentenceArr[sIndex] = typoizeWord(sentenceArr[sIndex], add);
    }

    return sentenceArr.join(' ');
  }

  return {
    getSentence: function(num) {
      var shining = '';
      var simpsons = '';
      for (var i = 0; i < num; i++) {
        shining += randomizer(shiningSentence);
        simpsons += randomizer(simpsonSentence);
      }
      return {shining, simpsons};
    }
  }
})
