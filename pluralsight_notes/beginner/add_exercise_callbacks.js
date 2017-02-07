"use strict";
//1.
var funcCaller = function(n, func) {
  return func(n);
};
//2.
var firstVal = function(arr, func) {
  func(arr[0], 0, arr);
};
//3.
var firstVal = function(list, func) {
  if(Array.isArray(list)) {
    return(arr[0], 0, arr);
  } else {
    for(var key in list) {
      return func(list[key], key, list);
      /*or this way:
      var propArr = Object.keys(list);
      func(list[propArr[0]], propArr[0], list);
      */
    }
  };
};
