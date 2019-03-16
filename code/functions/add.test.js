const { add, addCallback, addPromise } = require('.');

describe('Testing Add Module', () => {
  describe('Normal addition function', () => {
    it('Should return 3 for 1 + 2', () => {
      expect(add(1, 2)).toEqual(3);
    });

    // To test for exception, we need to provide expect a callback
    it('Should throw error for invalid arguments', () => {
      expect(() => add('a', 3)).toThrow('Invalid Argument');
    });
  });

  describe('Addition with callback', () => {
    it('Should return 10 for 7 + 3', (done) => {
      addCallback(7, 3, (err, sum) => {
        expect(err).toEqual(null);
        expect(sum).toEqual(10);
        done(); // remvove this and JEST weill throw timeout exception
      });
    });
  });

  describe('Promisified Addition', () => {
    describe('Using then & catch', () => {
      it('Should return 9 for 2 + 7', (done) => {
        addPromise(2, 7).then((sum) => {
          expect(sum).toEqual(9);
          done(); // this is important
        });
      });

      // how about an error case
      it('Should get an error', (done) => {
        addPromise(2, '7')
          .then((sum) => {
            expect(sum).toEqual(9);
            done(); // this is important
          })
          .catch((err) => {
            expect(err.message).toEqual('Invalid Argument');
            done();
            // Did you notice the code smell?
          });
      });
    });

    describe('Using async-await', () => {
      // No need to pass 'done' in case of async await
      it('Should return 9 for 2 + 7', async () => {
        // let's break few tests to see what Jest will say
        const sum = await addPromise(2, 7);
        expect(sum).toEqual(9);
      });

      // how about an error case
      it('Should get an error', async () => {
        try {
          const sum = await addPromise(2, '7');
          expect(sum).toEqual(9);
        } catch (err) {
          expect(err.message).toEqual('Invalid Argument');
        }
      });
    });
  });
});
