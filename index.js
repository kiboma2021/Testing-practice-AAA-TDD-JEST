class newString {
  stringLength(string) {
    let strlength=string.length;
    if (strlength > 0 || strlength <= 10) {
      return True;
    } else {
      return False;
    }
  }
}

module.exports = newString;