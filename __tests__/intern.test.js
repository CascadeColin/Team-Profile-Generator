'use strict'

const Intern = require('../lib/intern');

describe("Intern Class", () => {
    it("should accept name, id, email, and school as parameters", () => {
      const intern = new Intern("john", 1, "email@email.com", "UW");
  
      expect(intern.name).toBe("john");
      expect(intern.id).toBe(1);
      expect(intern.email).toBe("email@email.com");
      expect(intern.school).toBe("UW");
    });
    it("should have methods get the employee name, id, email, and role", () => {
      //arrange
      const intern = new Intern("john", 1, "email@email.com", "UW");
  
      //act
      intern.getName();
      intern.getId();
      intern.getEmail();
      intern.getSchool();
      intern.getRole();
  
      //assert
      expect(intern.getName()).toBe("john");
      expect(intern.getId()).toBe("1");
      expect(intern.getEmail()).toBe("email@email.com");
      expect(intern.getSchool()).toBe("UW");
      expect(intern.getRole()).toBe("Intern");
    });
    it("should only accept strings as parameters", () => {
      const intern = new Intern("john", 1, "email@email.com", "UW")

      intern.getName();
      intern.getId();
      intern.getEmail();
      intern.getSchool();
      intern.getRole();

      expect(intern.getName()).toEqual(expect.any(String));
      expect(intern.getName()).not.toEqual(expect.any(Number));
      expect(intern.getName()).not.toEqual(expect.any(Object));
      expect(intern.getName()).not.toBeUndefined();
      expect(intern.getName()).not.toBeNaN();
      expect(intern.getName()).not.toBeNull();

      expect(intern.getId()).toEqual(expect.any(String));
      expect(intern.getId()).not.toEqual(expect.any(Number));
      expect(intern.getId()).not.toEqual(expect.any(Object));
      expect(intern.getId()).not.toBeUndefined();
      expect(intern.getId()).not.toBeNaN();
      expect(intern.getId()).not.toBeNull();

      expect(intern.getEmail()).toEqual(expect.any(String));
      expect(intern.getEmail()).not.toEqual(expect.any(Number));
      expect(intern.getEmail()).not.toEqual(expect.any(Object));
      expect(intern.getEmail()).not.toBeUndefined();
      expect(intern.getEmail()).not.toBeNaN();
      expect(intern.getEmail()).not.toBeNull();
      
      expect(intern.getSchool()).toEqual(expect.any(String));
      expect(intern.getSchool()).not.toEqual(expect.any(Number));
      expect(intern.getSchool()).not.toEqual(expect.any(Object));
      expect(intern.getSchool()).not.toBeUndefined();
      expect(intern.getSchool()).not.toBeNaN();
      expect(intern.getSchool()).not.toBeNull();

      expect(intern.getRole()).toEqual(expect.any(String));
      expect(intern.getRole()).not.toEqual(expect.any(Number));
      expect(intern.getRole()).not.toEqual(expect.any(Object));
      expect(intern.getRole()).not.toBeUndefined();
      expect(intern.getRole()).not.toBeNaN();
      expect(intern.getRole()).not.toBeNull();
    });
  });