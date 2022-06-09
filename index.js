class newString {
  stringLength(string) {
    let strlength=string.length;
      return strlength <= 10;
  }

  reverseString(string) {
    let reversedstr=string.split("").reverse().join("");
      return reversedstr;
  }

}

module.exports = newString;