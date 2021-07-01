import Big from 'big.js';

const operate = (number1, number2, operator) => {
  if (!number1 || !number2 || !operator) return '0';

  let res = 0;
  const num1 =
    typeof number1 !== 'number' ? Big(Number(number1)) : Big(number1);
  const num2 =
    typeof number2 !== 'number' ? Big(Number(number2)) : Big(number2);

  switch (operator) {
    case '+':
      res = num1.plus(num2);
      break;
    case '-':
      res = num1.minus(num2);
      break;
    case 'x':
      res = num1.times(num2);
      break;
    case '/':
      res = num1.div(num2);
      break;
    case '%':
      res = num1.times(num2).div(100);
      break;
    default:
      res = 0;
      break;
  }

  return res.toString();
};

export default operate;
