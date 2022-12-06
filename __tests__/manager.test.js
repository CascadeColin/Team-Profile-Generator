'use strict'

const Manager = require('../lib/employee');
// const Manager = require('../lib/manager');

describe("Manager Class", () => {
    it("should accept name, id, email, and office number as parameters", () => {
      const manager = new Manager("john", "1", "email@email.com", "1");
  
      expect(manager.name).toBe("john");
      expect(manager.id).toBe("1");
      expect(manager.email).toBe("email@email.com");
      expect(manager.officeNumber).toBe("1");
    });
    it("should have methods get the manager name, id, email, and role", () => {
      //arrange
      const manager = new Manager("john", "1", "email@email.com", "1");
  
      //act
      manager.getName();
      manager.getId();
      manager.getEmail();
      manager.getRole();
  
      //assert
      expect(manager.getName()).toBe("john");
      expect(manager.getId()).toBe("1");
      expect(manager.getEmail()).toBe("email@email.com");
      expect(manager.getRole()).toBe("Manager");
    });
  //   --Bonus--  
  //   it('should reject input if it is not valid', () => {
  //     const manager = new manager(1, "string", null, undefined);
  
  //     expect(manager.getName)
  //   })
  });