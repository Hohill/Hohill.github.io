var DIGIT = "0123456789";
var LOWER_CASE_ALPHA = "abcdefghijklmnopqrstuvwxyz";
var UPPER_CASE_ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ALPHA = LOWER_CASE_ALPHA + UPPER_CASE_ALPHA;
var SPECIAL_SYMBOL = "~!@#$%^&*?";

function getRandomChar(chars) {
  var i = Math.floor(Math.random() * chars.length);
  return chars[i];
}

function getNoRepeatRandomChars(size, chars) {
  if (chars.length < size) {
    throw new Error(
      "chars.length must greator than size when noRepeat is true"
    );
  }
  var str = "";
  for (var i = 0; i < size; i++) {
    for (;;) {
      var c = getRandomChar(chars);
      if (str.indexOf(c) === -1) {
        str += c;
        break;
      }
    }
  }
  return str;
}

function generatePassword(size, firstCharts, restCharts) {
  return (
    getRandomChar(firstCharts) + getNoRepeatRandomChars(size - 1, restCharts)
  );
}

console.log(generatePassword(10, ALPHA, ALPHA + DIGIT + SPECIAL_SYMBOL));
