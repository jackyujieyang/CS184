#!/usr/bin/env node

var prime = function(n) {
  for (var i = 2; i < n; i++) {
    if (n%i == 0) {
      return false;
    }
  }
  return true;
};

var firstKPrimes = function(k) {
  var num = 2;
  var result = [];
  while(1) {
    if (prime(num)) {
      result.push(num);
    }
    if (result.length == k) {
      return result;
    }
    num++;
  }
};

var print = function(arr) {
  return arr.join(',');
};

var total = 100;
var array = firstKPrimes(total);
//console.log(print(array));

var fs = require('fs');
var outfile = "first100Primes.txt";
var out = array + "\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

