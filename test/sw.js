self.onmessage = function(e) {
  var count = 0;
  var obj = setInterval(() => { 
    console.log(count); 
    count++;
    if(count > 20){ 
      clearInterval(obj); 
      self.postMessage('Interval cleared'); 
    }
  }, 1000)
};