const fizzbuzz = (number) => {
  let output = '';
  if (number === 0) return number;
  if (number % 3 === 0) output += 'fizz';
  if (number % 5 === 0) output += 'buzz';

  return output || number;
};

for (let i = 1; i <= 16; i++) {
  console.log(fizzbuzz(i));
}

module.exports = {
  fizzbuzz,
};
