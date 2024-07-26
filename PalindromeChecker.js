// ---------- palindrome checker ----------

// ----- Approach 1: Two Pointers -----
const pdChecker1 = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// ----- Approach 2: String Reversal -----
const pdChecker2 = (str) => {
  const reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
};

// ----- Approach 3: Using Recursion -----
//Explanation: Check the substring with recursion. If recursion function hits a point where length is less than or equal to 1, that means the substring is palindrome. So, return true in that case
const pdChecker3 = (str) => {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  return pdChecker3(str.slice(1, -1));
};

// ----- Approach 4: Using Stack -----
const pdChecker4 = (str) => {
  let stack = [];
  for (const char of str) {
    stack.push(char);
  }

  let reversedStr = "";
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }

  return str === reversedStr;
};

console.log(pdChecker4("deed"));
console.log(pdChecker4("mother"));

// Phrase or sentence palindrome checker
var isPalindrome = function (s) {
  let regx = /[^a-zA-Z0-9]/g;
  let newStr = s.replace(regx, "").toLowerCase();

  let left = 0;
  let right = newStr.length - 1;

  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
