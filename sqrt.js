//to calculate the average of x and y
function average(x, y) {
  return ((x + y) /2);
}

//to calculate the square of x
function square(x) {
  return x * x;
}

//good-enough? method
function goodEnough(guess, x) {
  return Math.abs(square(guess) - x) < 0.001;
}

//improve method
function improve(guess, x) {
  return average(guess, x/guess);
}

//try method
function trySolve(guess, x) {
  if (goodEnough(guess, x)) {
    return guess;
  } else {
    return trySolve(improve(guess, x), x);
  }
}

//here we go
//start from 1
function sqrt(x) {
  return ~~trySolve(1, x);
}
