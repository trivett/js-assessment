exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var result = -1;
    for (i=0;i<arr.length;i++){
      if (arr[i] === item){
        result = i;
      }
    }
    return result;

  },

  sum : function(arr) {
    var result = 0;
    for (i=0;i<arr.length;i++){
      result += arr[i];
    }
    return result;

  },

  remove : function(arr, item) {
    result = [];
    for (i=0;i<arr.length;i++){
      if (arr[i] !== item){
        result.push(arr[i])
      }
    }
    return result;
  },

  removeWithoutCopy : function(arr, item) {
    for (i=0;i<arr.length;i++){
      if (arr[i] === item){
        arr.splice(i, 1);
        i = i -1;
      }
    }
    return arr;
  },
  append : function(arr, item) {
    var len = arr.length;
    arr[len] = item;
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;

  },

  count : function(arr, item) {
    var result = 0;
    for (var i=0;i<arr.length;i++){
      if (arr[i] === item){
        result ++;
      }
    }
    return result;
  },

  duplicates : function(arr) {

    var result = [];

    arr.filter(function (value, index, self) {
      if (!(index > 0 && value != self[index - 1])) {
        result.push(value);
      }
    });

    return result.sort();
  },


  square : function(arr) {
    var squares = [];
    for (var i=0;i<arr.length;i++) {
      var s = arr[i] * arr[i];
      squares.push(s);
    }
    return squares;
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    for (var i=0;i<arr.length;i++) {
      if (arr[i] === target){
        result.push(i);
      }
    }
    return result;
  }
};
