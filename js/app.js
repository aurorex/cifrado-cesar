$(document).ready('load', function() {
  var words = $('#input').val();
  console.log(words);
  var convertNumbers = parseInt(words);
  console.log(convertNumbers);

  if (!isNaN(convertNumbers) || words === '') {
    alert('error: ingrese solo letras!');
  } else {
    var noIsNumber = words;
  }
  
  var count = '';

});









// var cipher = function(wordX) {
//   var wordToUppercase = wordX.toUpperCase();
//   var arr = wordToUppercase;
//   console.log(arr);

//   for (var i = 0;i < arr.length;i++) {
//     var b = arr.charCodeAt(i) ;
    
//     var c = (b - 65 + 33) % 26 + 65;
//     var d = String.fromCharCode(c);

//     var sum = count += d;
//   }

//   return sum;
// }
// document.write(cipher(noIsNumber));