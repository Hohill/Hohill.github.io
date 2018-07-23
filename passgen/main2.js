function getRandomChar(list) {
  var i = Math.floor(Math.random() * list.length);
  return list[i];
}

function getNoRepeatRandomChars(chars, size) {
  if (size > chars.length) {
    throw new Error("size must be not greater than chars.length");
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

