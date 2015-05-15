exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }
    return -1;
  },

  sum : function(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  },

  remove : function(arr, item) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) newArr.push(arr[i]);
    }
    return newArr;
  },

  removeWithoutCopy : function(arr, item) {
    while (arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item),1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length-1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0,0,item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
      newArr.push(arr1[i]);
    }
    for (i = 0; i < arr2.length; i++) {
      newArr.push(arr2[i]);
    }
    return newArr;
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) num++;
    }
    return num;
  },

  duplicates : function(arr) {
    var counts = {};
    var dupes = [];

    for (var i = 0; i < arr.length; i++) {
      var elem = arr[i];
      counts[elem] = counts[elem] || 0;
      counts[elem]++;
    }
    for (var val in counts) {
      if (counts[val] > 1) dupes.push(val);
    }
    return dupes;
  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i]*arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var occurrences = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) occurrences.push(i);
    }
    return occurrences;
  }
};
