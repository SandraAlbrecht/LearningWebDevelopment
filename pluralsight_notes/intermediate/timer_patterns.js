//timer overview
var fn = function() {
  setTimeout(function(){...}, 0); //timeout 1
  setTimeout(function(){...}, 0); //timeout 2
  setTimeout(function(){...}, 0); //timeout 3
};

fn();

//execution s carried out as follows:
//1. fn() will be run
//2. timeout 1 will be run
//3. timeout 2 will be run, unless another response in the background is faster, then timeout 2 has to wait etd.

//splitting long-runnig code over setTimeout blocks allows the single thread that either updates UI or executes JS to jump between these two instead of blocking the UI update over a very very long period of time for JS
 
