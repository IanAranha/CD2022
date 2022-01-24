module.exports = function () {
  return {
    add: function (num1, num2) {
      console.log(`The sum of ${num1} and ${num2} is`, num1 + num2)
    },
    subtract: function (num1, num2) {
      console.log(`The difference between ${num1} and ${num2} is`, num1 - num2)
    },
    multiply: function (num1, num2) {
      console.log(`The product of ${num1} and ${num2} is`, num1 * num2)
    },
    square: function (num) {
      console.log(`The square of ${num} is`, num * num)
    },
    random: function (num1, num2) {
      console.log(`Random number between ${num1} and ${num2}: `, Math.floor(Math.random() * (+num2 - +num1) + +num1))
    }
  }
}
