const ContactList = require('./ContactList');
const User = require('./User');
const { ErrorMessages } = require('./lib/consts');

describe('Contact List Class', () => {
  // we should have a list of contacts
  let contactList = null;
  let john = null;
  let jane = null;

  beforeEach(() => {
    contactList = new ContactList();

    john = new User({
      firstName: 'John',
      lastName: 'Doe',
      mobile: 9988009922,
    });

    jane = new User({
      firstName: 'Jane',
      lastName: 'Doe',
      mobile: 6677889922,
    });
  });

  it('Should be a class', () => {
    expect(typeof ContactList.prototype.constructor).toEqual('function');
  });

  describe('Contact List API', () => {
    describe('Add a user', () => {
      beforeEach(() => {
        contactList.addNewUser(john);
        contactList.addNewUser(jane);
      });

      it('Should only add USER instance', () => {
        expect(() => {
          contactList.addNewUser({ firstName: 'John', mobile: 9988778899 });
        }).toThrow(ErrorMessages.InvalidContact);
      });

      it('Should has length of 2', () => {
        expect(contactList.length()).toBe(2);
      });

      it('Should only add USER instance', () => {
        expect(contactList.list[0] instanceof User).toBe(true);
      });
    });

    // Let's practice

    // describe('Delete using user ID', () => {
    //   it('Should delete `John`', () => {});
    //   it('Should has length of 1', () => {});
    // });

    // describe('Delete using mobile number', () => {
    //   it('Should delete `Jane`', () => {});
    //   it('Should has length of 0', () => {});
    // });
  });
});
