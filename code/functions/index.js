const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid Argument');
  }
  return a + b;
};

const addCallback = (a, b, callback) => setTimeout(() => callback(null, a + b), 2000);

const addPromise = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return Promise.reject(new Error('Invalid Argument'));
  }
  return Promise.resolve(a + b);
};

module.exports = {
  add,
  addCallback,
  addPromise,
};
