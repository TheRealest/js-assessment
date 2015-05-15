exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter : function(str) {
    return /([a-zA-Z])\1/.test(str);
  },

  endsWithVowel : function(str) {
    return /[aeiouAEIOU]$/.test(str);
  },

  captureThreeNumbers : function(str) {
    var matches = str.match(/(\d\d\d)/);
    return matches ? matches[1] : false;
  },

  matchesPattern : function(str) {
    return /^\d\d\d-\d\d\d-\d\d\d\d$/.test(str);
  },

  isUSD : function(str) {
    return /^\$\d{1,3}(,\d\d\d)*(\.\d\d)?$/.test(str);
  }
};
