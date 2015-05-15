exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    return data.files.reduce(function(list,file) {
      if (typeof file === 'string' && dirName === undefined) return list.concat(file);
      if (file.dir === dirName) {
        return list.concat(exports.recursionAnswers.listFiles(file));
      } else if (file.files) {
        return list.concat(exports.recursionAnswers.listFiles(file,dirName));
      }
      return list;
    },[]);
  },

  permute: function(arr) {
    var pullN = function(list,n) {
      return list.slice(0,n).concat(list.slice(n+1,list.length));
    };

    var addPerm = function(perm,remaining) {
      if (!remaining.length) return [perm];
      return remaining.reduce(function(list,elem,i) {
        return list.concat(addPerm.apply(null,[perm.concat(elem),pullN(remaining,i)]));
      },[]);
    };

    return addPerm([],arr);
  },

  fibonacci: function(n) {
    var nums = [0,1,1];
    var i = 3;
    while(!nums[n]) {
      nums[i] = nums[i-1] + nums[i-2];
      i++;
    }
    return nums[n];
  },

  validParentheses: function(n) {
    
  }
};
