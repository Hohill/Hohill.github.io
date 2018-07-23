var DIGIT = "0123456789";
var LOWER_CASE_ALPHA = "abcdefghijklmnopqrstuvwxyz";
var UPPER_CASE_ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ALPHA = LOWER_CASE_ALPHA + UPPER_CASE_ALPHA;
var SPECIAL_SYMBOL = "~!@#$%^&*?";

function getRandomChar(chars) {
  var i = Math.floor(Math.random() * chars.length);
  return chars[i];
}

function getNoRepeatRandomChars(size, chars, excludes) {
  if (chars.length + excludes.length < size) {
    throw new Error(
      "chars.length must greator than size when noRepeat is true"
    );
  }
  var str = "";
  for (var i = 0; i < size; i++) {
    for (;;) {
      var c = getRandomChar(chars);
      if (str.indexOf(c) === -1 && excludes.indexOf(c) === -1) {
        str += c;
        break;
      }
    }
  }
  return str;
}

function generatePassword() {
  var parts = Array.prototype.slice.call(arguments);
  var str = "";
  for (var i = 0; i < parts.length; i++) {
    var size = parts[i][0];
    var chars = parts[i][1];
    str += getNoRepeatRandomChars(size, chars, str);
  }
  return str;
}

console.log(
  generatePassword(
    [2, UPPER_CASE_ALPHA + LOWER_CASE_ALPHA],
    [5, LOWER_CASE_ALPHA + LOWER_CASE_ALPHA + DIGIT],
    [1, SPECIAL_SYMBOL]
  )
);
