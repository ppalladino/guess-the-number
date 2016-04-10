import _ from 'lodash';

export function isNumber(n) {
  return !_.isNil(n) && !_.isNaN(n) && _.isNumber(n);
}

export function generateTheNumber(lowerBound, upperBound) {
  return _.random(lowerBound, upperBound);
}

export function getHint(guess, theNumber) {
  if (guess > theNumber) {
    return 'Nope. Lower.';
  } else if (guess < theNumber) {
    return 'Nope. Higher.';
  }
  return 'You got it!';
}

export function validateGuess(guess) {
  if (!isNumber(guess)) {
    return new Error('Guess must be a number.');
  }
  return null;
}

export function validateBounds(lowerBound, upperBound) {
  if (!isNumber(lowerBound) || !isNumber(upperBound)) {
    return new Error('Bounds must be numbers.');
  } else if (lowerBound >= upperBound) {
    return new Error('Upper bound must be larger than lower bound.');
  }
  return null;
}

export default { generateTheNumber, getHint, isNumber, validateGuess, validateBounds };
