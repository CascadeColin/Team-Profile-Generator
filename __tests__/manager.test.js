'use strict'

const Manager = require('../lib/manager');

describe("Manager Class", () => {
    it("should accept name, id, email, and office number as parameters", () => {
      const manager = new Manager("john", 1, "email@email.com", 1);
  
      expect(manager.name).toBe("john");
      expect(manager.id).toBe(1);
      expect(manager.email).toBe("email@email.com");

      //converts to string in constructor because it does not have a method
      expect(manager.officeNumber).toBe("1");
    });
    it("should have methods get the manager name, id, email, and role", () => {
      //arrange
      const manager = new Manager("john", 1, "email@email.com", 1);
  
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
    it("should only accept strings as parameters", () => {
      const manager = new Manager("john", 1, "email@email.com", 1);

      manager.getName();
      manager.getId();
      manager.getEmail();
      manager.getRole();

      expect(manager.getName()).toEqual(expect.any(String));
      expect(manager.getName()).not.toEqual(expect.any(Number));
      expect(manager.getName()).not.toEqual(expect.any(Object));
      expect(manager.getName()).not.toBeUndefined();
      expect(manager.getName()).not.toBeNaN();
      expect(manager.getName()).not.toBeNull();

      expect(manager.getId()).toEqual(expect.any(String));
      expect(manager.getId()).not.toEqual(expect.any(Number));
      expect(manager.getId()).not.toEqual(expect.any(Object));
      expect(manager.getId()).not.toBeUndefined();
      expect(manager.getId()).not.toBeNaN();
      expect(manager.getId()).not.toBeNull();

      expect(manager.getEmail()).toEqual(expect.any(String));
      expect(manager.getEmail()).not.toEqual(expect.any(Number));
      expect(manager.getEmail()).not.toEqual(expect.any(Object));
      expect(manager.getEmail()).not.toBeUndefined();
      expect(manager.getEmail()).not.toBeNaN();
      expect(manager.getEmail()).not.toBeNull();

      expect(manager.getRole()).toEqual(expect.any(String));
      expect(manager.getRole()).not.toEqual(expect.any(Number));
      expect(manager.getRole()).not.toEqual(expect.any(Object));
      expect(manager.getRole()).not.toBeUndefined();
      expect(manager.getRole()).not.toBeNaN();
      expect(manager.getRole()).not.toBeNull();

      expect(manager.officeNumber).toEqual(expect.any(String));
      expect(manager.officeNumber).not.toEqual(expect.any(Number));
      expect(manager.officeNumber).not.toEqual(expect.any(Object));
      expect(manager.officeNumber).not.toBeUndefined();
      expect(manager.officeNumber).not.toBeNaN();
      expect(manager.officeNumber).not.toBeNull();
    });
  });