var num = parseInt(prompt("Enter your number:"));
var result = '';
var decimal = [1000, 500, 100, 50, 10, 5, 1];
var roman = ["M", "D", "C", "L", "X", "V", "I"];


for (var i = 0;i<=decimal.length;i++) {
    while (num%decimal[i] < num) {
      result += roman[i];
      num -= decimal[i];
    }
  }

  alert(result);
