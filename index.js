// Fibonacci sequence

const fibonacciSequence = (n) => {
  const series = [0, 1];
  for (i = 2; i < n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
};

//Time complexity - O(n)

console.log(fibonacciSequence(7));
console.log(fibonacciSequence(2));
console.log(fibonacciSequence(3));

// Factorial of a num

const factorial = (n) => {
  let res = 1;
  for (let i = 2; i < n; i++) {
    res = res * i;
  }
  return res;
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
4 * 3 * 2 * 1;

const factorial1 = (n) => {
  let res = 1;
  if (n === 0 || n === 1) {
    return res;
  } else if (n > 1) {
    return n * factorial1(n - 1);
  }
};

console.log(factorial1(2));
console.log(factorial1(1));
console.log(factorial1(5));

const factorial2 = (n) => {
  let res = 1;
  if (n === 0 || n === 1) {
    return res;
  }
  while (n > 1) {
    n--;
    res *= n;
  }
  return res;
};

console.log(factorial2(2));
console.log(factorial2(1));
console.log(factorial2(5));

//repeat a string in JavaScript

const repeatStringNumTimes = (str, num) => {
  let result = "";
  if (num < 0) {
    return result;
  }
  console.log(str.repeat(num));
  //   for (i = 0; i < num; i++) {
  //     result += str;
  //   }
  while (num >= 1) {
    num--;
    result += str;
  }
  console.log(result);
};

repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 4);
repeatStringNumTimes("abc", 1);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);

//capitize the string
const titleCase = (str) => {
  let words = str.split(" ");
  for (i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  console.log("1", words.join(" "));
  let Words = str.split(" ");
  let j = 0;
  let firstChar = [];
  while (j < Words.length) {
    Words[j].toLowerCase();
    firstChar[j] = Words[j].replace(
      Words[j].charAt(0),
      Words[j].charAt(0).toUpperCase()
    );
    // Words[j] =
    //   Words[j].charAt(0).toUpperCase() + Words[j].slice(1).toLowerCase();
    j++;
  }
  console.log("2", firstChar.join(" "));
};

titleCase(`I’m a little tea pot`);
titleCase(`sHoRt AnD sToUt`);
titleCase(`HERE IS MY HANDLE HERE IS MY SPOUT`);
titleCase(`earth is sperical`);
titleCase(`love is in the air`);

// confirm the ending of the str
const confirmEnding = (str, lastStr) => {
  let strLen = str.length;
  let lastStrLen = lastStr.length;
  console.log(str.endsWith(lastStr));
  //   console.log(str.substr(strLen - lastStrLen, lastStrLen));
  if (lastStr === str.substr(strLen - lastStrLen, lastStrLen)) {
    console.log(true);
  } else {
    console.log(false);
  }
};

confirmEnding("Bastian", "n");
confirmEnding("Connor", "n");
confirmEnding(
  "Walking on water and developing software from a specification are easy if both are frozen",
  "specification"
);
confirmEnding("He has to give me a new name", "name");
confirmEnding("Open sesame", "same");
confirmEnding("Open sesame", "pen");
confirmEnding(
  "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing",
  "mountain"
);

//reverse a string
const reverseString = (str) => {
  //   console.log(str.split("").reverse().join(""));
  let i = 0;
  let strArr = str.split("");
  let revArr = [];
  let len = strArr.length;
  while (i < len) {
    revArr[len - i] = strArr[i];
    i++;
  }
  console.log(revArr.join(""));
};

reverseString("Hello");
reverseString("Howdy");
reverseString("Greetings from Earth");

//palindrome

const palindrome = (str) => {
  let regex = /[\W_]/g;
  let newstr = str.toLowerCase().replace(regex, "");
  console.log(newstr === newstr.split("").reverse().join(""));
};

palindrome("0_0 (: /- :) 0–0");
palindrome("civic");
palindrome("madam");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /- :) 0–0");

//longest word
const findLongestWord = (str) => {
  let strArr = str.split(" ");
  let longestword = strArr[0];

  let i = 1;
  let length = strArr.length;
  while (i < length) {
    if (longestword.length < strArr[i].length) {
      longestword = strArr[i];
    }
    i++;
  }
  console.log(longestword);
  var longest = strArr.sort((a, b) => {
    return b.length - a.length;
  });
  console.log(longest[0]);

  var longestWord = strArr.reduce((longest, currWord) => {
    return longest.length > currWord.length ? longest : currWord;
  }, "");

  console.log(longestWord);
};

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("Google do a barrel roll");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");

const largestOfFour = (arr) => {
  let largest;
  let largestArr = [];
  arr.map((innerArr) => {
    // largest = innerArr.sort((a, b) => {
    //   return b - a;
    // });
    // largest = innerArr.reduce((largest, currNum) => {
    //   return largest > currNum ? largest : currNum;
    // }, "");

    largest = Math.max.apply(null, innerArr);
    largestArr.push(largest);
    // console.log(largestArr.push(largest[0]));
  });
  console.log(largestArr);

  let largestNumArr = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNum = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (largestNum < arr[i][j]) {
        largestNum = arr[i][j];
      }
    }
    largestNumArr.push(largestNum);
  }
  // console.log(largestNumArr);
};

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

largestOfFour([
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

largestOfFour([
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1],
]);
