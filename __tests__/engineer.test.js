'use strict'

const Engineer = require('../lib/engineer');

describe("Engineer Class", () => {
    it("should accept name, id, email, and github as parameters", () => {
      const engineer = new Engineer("john", 1, "email@email.com", "MyGithub");
  
      expect(engineer.name).toBe("john");
      expect(engineer.id).toBe(1);
      expect(engineer.email).toBe("email@email.com");
      expect(engineer.github).toBe("MyGithub");
    });
    it("should have methods get the employee name, id, email, and role", () => {
      //arrange
      const engineer = new Engineer("john", 1, "email@email.com", "MyGithub");
  
      //act
      engineer.getName();
      engineer.getId();
      engineer.getEmail();
      engineer.getGithub();
      engineer.getRole();
  
      //assert
      expect(engineer.getName()).toBe("john");
      expect(engineer.getId()).toBe("1");
      expect(engineer.getEmail()).toBe("email@email.com");
      expect(engineer.getGithub()).toBe("MyGithub");
      expect(engineer.getRole()).toBe("Engineer");
    })
    it("should convert all parameters into strings", () => {
      const engineer = new Engineer("john", 1, "email@email.com", "MyGithub")


      engineer.getName();
      engineer.getId();
      engineer.getEmail();
      engineer.getGithub();
      engineer.getRole();

      expect(engineer.getName()).toEqual(expect.any(String));
      expect(engineer.getName()).not.toEqual(expect.any(Number));
      expect(engineer.getName()).not.toEqual(expect.any(Object));
      expect(engineer.getName()).not.toBeUndefined();
      expect(engineer.getName()).not.toBeNaN();
      expect(engineer.getName()).not.toBeNull();

      expect(engineer.getId()).toEqual(expect.any(String));
      expect(engineer.getId()).not.toEqual(expect.any(Number));
      expect(engineer.getId()).not.toEqual(expect.any(Object));
      expect(engineer.getId()).not.toBeUndefined();
      expect(engineer.getId()).not.toBeNaN();
      expect(engineer.getId()).not.toBeNull();

      expect(engineer.getEmail()).toEqual(expect.any(String));
      expect(engineer.getEmail()).not.toEqual(expect.any(Number));
      expect(engineer.getEmail()).not.toEqual(expect.any(Object));
      expect(engineer.getEmail()).not.toBeUndefined();
      expect(engineer.getEmail()).not.toBeNaN();
      expect(engineer.getEmail()).not.toBeNull();
      
      expect(engineer.getGithub()).toEqual(expect.any(String));
      expect(engineer.getGithub()).not.toEqual(expect.any(Number));
      expect(engineer.getGithub()).not.toEqual(expect.any(Object));
      expect(engineer.getGithub()).not.toBeUndefined();
      expect(engineer.getGithub()).not.toBeNaN();
      expect(engineer.getGithub()).not.toBeNull();

      expect(engineer.getRole()).toEqual(expect.any(String));
      expect(engineer.getRole()).not.toEqual(expect.any(Number));
      expect(engineer.getRole()).not.toEqual(expect.any(Object));
      expect(engineer.getRole()).not.toBeUndefined();
      expect(engineer.getRole()).not.toBeNaN();
      expect(engineer.getRole()).not.toBeNull();
    });
  });