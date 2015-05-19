//Palindrome--Doesn't work for strings with caps/spaces

function isPalindrome(str) {
  var reverseStr = str.split('').reverse().join('');

  if(str === reverseStr) {
  return "This is true!";
  }else if(str !== reverseStr){
  return "Ain't no palindrome.";
  }
}

//Average

function average(arr){
  var total = 0;
  for (i=0; i < arr.length; ++i){
  total = total + arr[i];
  }
  var avg = total / arr.length;
  return total;
}

//User--Returns hash called [object Object]?

function makeUser(name) {
  var userArr = name.split(' ');
  return userHash = {
  firstName: userArr[0],
  lastName: userArr[1]
  };
}

//Users

function userify(names) {
  var usersArr = [];
  for(i=0; i<names.length; ++i){
    var userArr = names[i].split(' ');
    var userHash = {
    firstName: userArr[0],
    lastName: userArr[1]
    };
  usersArr.push(userHash);
  }
  return usersArr;
}

//CSV Summation

function summation(str){
  var arr = str.split(", ");
  var total = 0;
  for (i=0; i < arr.length; ++i){
  total = total + parseInt(arr[i], 10);
  }
  return total;
}

//Factorial

function factorial(n) {
  var total = 1;
  for (i=0; i<n; ++i){
    total = total*(n-i);
  }
   return total;
}

//Longest Word--Doesn't work for strings with punctuation

function longestWord(str) {
  var arr = str.split(' ');
  var sortedArr = arr.sort(function(a, b){
           return b.length - a.length;
           });
  return sortedArr[0];
}
