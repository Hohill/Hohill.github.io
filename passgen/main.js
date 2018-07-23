function getRandomChar(chars) {
  var i = Math.floor(Math.random() * chars.length);
  return chars[i];
}

function getNoRepeatRandomChars(chars, size) {
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

function getRandomChars(chars, size) {
  var str = "";
  for (var i = 0; i < size; i++) {
    str += getRandomChar(chars);
  }
  return str;
}

console.log(getNoRepeatRandomChars("abcdefg", 5));
console.log(getRandomChars("abcdefg", 10));
console.log(getRandomChars("abcdefg", 10));
