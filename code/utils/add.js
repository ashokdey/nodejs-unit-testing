const add = (a, b) => a + b;

const addCallback = (a, b, callback) =>
  setTimeout(() => callback(null, a + b), 2000);

const addPromise = (a, b) => Promise.resolve(a + b);
