//Question 1
function myReverse(str) {
  let out = "";
      str= str.toString(10);
        for (let i= str.length -1; i >=0; i--) {
          out += str[i];
        }
    return out;             
}

//Question 2
function allCombinations(str) {
  let combinations = [];
   for(i = 0; i < str.length; i++) {
       for(j =i+1; j < str.length+1; j++) {
        combinations.push(str.slice(i, j));
       }
   }
  return combinations;
}


//Question 3
function allCaps(str) {
  
  let array1 = str.split(' ');
  let newarray1 = [];
    
  for(let i = 0; i < array1.length; i++){
      newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  }
  return newarray1.join(' ');
}
 

//Question 4
function myPower(x, n) {
  let newNumber = Math.pow (x,n)
  return newNumber;
}

//Question 5
function getFirstNotRepeating(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return "_";
}


//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
