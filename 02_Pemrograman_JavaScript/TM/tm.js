function fizzBuzz(n) {
  if (!Array.isArray(n)) {
    return "Input tidak valid";
  }

  const result = n.map((num) => {
    if (num === 0 || num % 14 === 0) {
      return "FizzBuzz";
    }
    if (num % 2 === 0) {
      return "Fizz";
    }
    if (num % 7 === 0) {
      return "Buzz";
    }
    return num.toString();
  });
  const plainNumbers = n.filter((num) => {
    return num !== 0 && num % 2 !== 0 && num % 7 !== 0;
  });
  const useSpace = plainNumbers.every((num) => num > 1);
  const separator = useSpace ? " " : ", ";
  return result.join(separator);
}
module.exports = fizzBuzz;
