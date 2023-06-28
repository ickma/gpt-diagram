require('babel-jest');

module.exports = {
    // ...
    transform: {
      '^.+\\.(j|t)sx?$': 'babel-jest',
    },
    // ...
  };
  