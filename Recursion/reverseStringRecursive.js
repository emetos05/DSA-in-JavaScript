function reverseStringRecursive(str) {
  if (str === "") return "";
  if (str.length === 1) {
    return str;
  }
  return str.slice(-1) + reverseStringRecursive(str.slice(0, -1));
}

console.log(reverseStringRecursive(""));
