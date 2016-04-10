jest.unmock('lodash');
jest.unmock('./game-logic.js');

import gameLogic from './game-logic.js';

describe('gameLogic.getHint()', () => {
  describe('when `guess` > `theNumber`', () => {
    it('should return the lower hint', () => {
      expect(gameLogic.getHint(2,1)).toBe('Nope. Lower.');
    });
  });

  describe('when `guess` < `theNumber`', () => {
    it('should return the higher hint', () => {
      expect(gameLogic.getHint(1,2)).toBe('Nope. Higher.');
    });
  });

  describe('when `guess` = `theNumber`', () => {
    it('should return the equals hint', () => {
      expect(gameLogic.getHint(1,1)).toBe('You got it!');
    });
  });
});

describe('gameLogic.isNumber()', () => {
  describe('1 is a number', () => {
    it('should return true', () => {
      expect(gameLogic.isNumber(1)).toBe(true);
    });
  });
  describe('null is not a number', () => {
    it('should return false', () => {
      expect(gameLogic.isNumber(null)).toBe(false);
    });
  });
  describe('undefined is not a number', () => {
    it('should return false', () => {
      expect(gameLogic.isNumber()).toBe(false);
    });
  });
  describe('NaN is not a number', () => {
    it('should return false', () => {
      expect(gameLogic.isNumber(NaN)).toBe(false);
    });
  });
});

describe('gameLogic.validateGuess()', () => {
  describe('1 is a valid guess', () => {
    it('should return null', () => {
      expect(gameLogic.validateGuess(1)).toBeNull();
    });
  });

  describe('undefined is not a valid guess', () => {
    it('should return Error', () => {
      expect(gameLogic.validateGuess() instanceof Error).toBe(true);
    });
  });

  describe('null is not a valid guess', () => {
    it('should return Error', () => {
      expect(gameLogic.validateGuess(null) instanceof Error).toBe(true);
    });
  });

  describe('string is not a valid guess', () => {
    it('should return Error', () => {
      expect(gameLogic.validateGuess('I am not a number') instanceof Error).toBe(true);
    });
  });
});

describe('gameLogic.validateBounds()', () => {
  describe('if lowerBounds is less than upperBound', () => {
    it('should return null', () => {
      expect(gameLogic.validateBounds(1, 2)).toBeNull();
    });
  });

  describe('if lowerBounds is negative but still less than upperBound', () => {
    it('should return null', () => {
      expect(gameLogic.validateBounds(-1, 2)).toBeNull();
    });
  });

  describe('if lowerBounds is same as upperBound', () => {
    it('should return Error', () => {
      expect(gameLogic.validateBounds(1, 1) instanceof Error).toBe(true);
    });
  });

  describe('if lowerBounds is greater than upperBound', () => {
    it('should return Error', () => {
      expect(gameLogic.validateBounds(2, 1) instanceof Error).toBe(true);
    });
  });

  describe('if lowerBounds is undefined', () => {
    it('should return Error', () => {
      expect(gameLogic.validateBounds(undefined, 1) instanceof Error).toBe(true);
    });
  });

  describe('if upperBounds is undefined', () => {
    it('should return Error', () => {
      expect(gameLogic.validateBounds(1, undefined) instanceof Error).toBe(true);
    });
  });
});

describe('gameLogic.generateTheNumber()', () => {
  describe('if valid bounds are given of 1 & 2', () => {
    let theNumber;
    beforeEach(function() {
      theNumber = gameLogic.generateTheNumber(1, 2);
    });

    it('should return an value of less than 3', () => {
      expect(theNumber).toBeLessThan(3);
    });
    it('should return an value of greater than 0', () => {
      expect(theNumber).toBeGreaterThan(0);
    });
  });
});
