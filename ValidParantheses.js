var isValid = function (s) {
  const bracketsMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
      console.log("line 12:" + stack);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("["));
