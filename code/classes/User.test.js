const User = require('./User');
const { ErrorMessages } = require('./lib/consts');

describe('User Class', () => {
  it('Should be a class', () => {
    expect(typeof User.prototype.constructor).toEqual('function');
  });

  describe('User API', () => {
    describe('Constructor', () => {
      let firstName = null;
      let mobile = null;
      let john = null;

      beforeEach(() => {
        firstName = 'John';
        mobile = 8826624872;
        john = new User({ firstName, mobile });
      });

      it('Should not create an user without a name', () => {
        expect(() => new User({ firstName: '', mobile })).toThrow(ErrorMessages.FirstNameRequired);
      });

      describe('Missing/invalid mobile number', () => {
        it('Should not create an user without a mobile number', () => {
          expect(() => new User({ firstName })).toThrow(ErrorMessages.MobileRequired);
        });

        it('Should not create an user without a valid mobile number', () => {
          expect(() => new User({ firstName, mobile: 9090 })).toThrow(ErrorMessages.InvalidMobile);
        });
      });

      it('Each user should have an ID', () => {
        expect(john.id).not.toBeUndefined();
      });
    });

    describe('Fullname of a user', () => {
      let firstName = null;
      let lastName = null;
      let fullName = null;
      let mobile = null;
      let john = null;

      beforeEach(() => {
        firstName = 'John';
        lastName = 'Doe';
        fullName = `${firstName} ${lastName}`;
        mobile = 8826624872;
        john = new User({ firstName, lastName, mobile });
      });

      it('Should return the fullname of user', () => {
        expect(john.getFullname()).toEqual(fullName);
      });
    });

    // Breaking because constructor is not accepting `age`
    // describe('Can the user cast vote?', () => {
    //   it('Should return FLASE for age < 18');
    //   it('Should return TRUE for age > 18');
    // });
  });
});
