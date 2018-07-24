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

function getRandomChars(size, chars) {
  var str = "";
  for (var i = 0; i < size; i++) {
    str += getRandomChar(chars);
  }
  return str;
}

function generatePassword(fn) {
  var str = "";
  for (var i = 1; i < arguments.length; i++) {
    var size = arguments[i][0];
    var chars = arguments[i][1];
    str += fn(size, chars, str);
  }
  return str;
}

function doGenerate() {
  var size = Number(document.getElementById("size").value);
  var first = "";
  if (document.getElementById("first-lower").checked) {
    first += LOWER_CASE_ALPHA;
  }
  if (document.getElementById("first-upper").checked) {
    first += UPPER_CASE_ALPHA;
  }
  if (document.getElementById("first-digit").checked) {
    first += DIGIT;
  }
  if (document.getElementById("first-symbol").checked) {
    first += SPECIAL_SYMBOL;
  }
  var rest = "";
  if (document.getElementById("rest-lower").checked) {
    rest += LOWER_CASE_ALPHA;
  }
  if (document.getElementById("rest-upper").checked) {
    rest += UPPER_CASE_ALPHA;
  }
  if (document.getElementById("rest-digit").checked) {
    rest += DIGIT;
  }
  if (document.getElementById("rest-symbol").checked) {
    rest += SPECIAL_SYMBOL;
  }
  var fn = getNoRepeatRandomChars;
  var repeat = document.getElementsByName("repeat");
  for (var i = 0; i < repeat.length; i++) {
    if (repeat[i].checked) {
      if (repeat[i].value === "yes") {
        fn = getRandomChars;
      }
    }
  }
  var str = generatePassword(fn, [1, first], [size - 1, rest]);
  document.getElementById("results").value = str;
}
