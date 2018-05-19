

exports.numbers =  function(req, res){ 
    var numArray = [];
   for (var i = 0; i < 11; i++ ) {
     numArray[i] = i;  
   }

     // Array.from() and Array.keys() in ES6
    // const numArray2 = Array.from(Array(11).keys());
console.log("data");
    return numArray;
 }


