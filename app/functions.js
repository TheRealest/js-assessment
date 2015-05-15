exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null,arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(x) {
      return fn.bind(null,x);
    });
  },

  partial : function(fn, str1, str2) {
      return fn.bind(null,str1,str2);
  },

  useArguments : function() {
    return Array.prototype.slice.call(arguments).reduce(function(sum,n) {
      return sum + n;
    },0);
  },

  callIt : function(fn) {
    return fn.apply(null,Array.prototype.slice.call(arguments,1));
  },

  partialUsingArguments : function(fn) {
    var boundArgs = Array.prototype.slice.call(arguments,1);
    return function() {
      var calledArgs = Array.prototype.slice.call(arguments);
      return fn.apply(null,boundArgs.concat(calledArgs));
    };
  },

  curryIt : function(fn) {
    var curriedArgs = [];
    var curry = function(arg) {
      curriedArgs.push(arg);
      if (curriedArgs.length === fn.length) return fn.apply(null,curriedArgs);
      return curry;
    };
    return curry;
  }
};
