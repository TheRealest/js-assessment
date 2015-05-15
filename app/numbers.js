exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (num >> (bit-1)) % 2;
  },

  base10: function(str) {
    return parseInt(str,2);
  },

  convertToBinary: function(num) {
    var bin = num.toString(2);
    while (bin.length < 8) {
      bin = '0' + bin;
    }
    return bin;
  },

  multiply: function(a, b) {
    return parseFloat((a*b).toPrecision(12));
  }
};
