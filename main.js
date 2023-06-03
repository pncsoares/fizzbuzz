const countUntil = 100;

const fizzWord = "Fizz";
const buzzWord = "Buzz";
const fizzBuzzWord = `${fizzWord}${buzzWord}`;

const execute = () => {
  for (let n = 1; n <= countUntil; n++) {
    const isMultipleOfThree = numberIsMultipleOf(n, 3);
    const isMultipleOfFive = numberIsMultipleOf(n, 5);

    if (isMultipleOfThree && isMultipleOfFive) {
      print(fizzBuzzWord);
    } else if (isMultipleOfThree) {
      print(fizzWord);
    } else if (isMultipleOfFive) {
      print(buzzWord);
    } else {
      print(n);
    }
  }
};

const numberIsMultipleOf = (number, multipleOf) => number % multipleOf === 0;

const print = (text) => console.log(text);

execute();
