exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var current = start;

    var printNext = function() {
      console.log(current);
      current++;
      if (current > end) clearInterval(interval);
    };

    printNext();
    var interval = setInterval(printNext, 100);

    return { cancel: function() { clearInterval(interval); } };
  }
};
