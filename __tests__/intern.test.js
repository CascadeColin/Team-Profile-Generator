'use strict'

const Intern = require('../lib/employee');
// const Intern = require('../lib/intern');

describe("Intern Class", () => {
    it("should accept name, id, email, and school as parameters", () => {
      const intern = new Intern("john", "1", "email@email.com", "UW");
  
      expect(intern.name).toBe("john");
      expect(intern.id).toBe("1");
      expect(intern.email).toBe("email@email.com");
      expect(intern.school).toBe("UW");
    });
    it("should have methods get the employee name, id, email, and role", () => {
      //arrange
      const intern = new Intern("john", "1", "email@email.com", "UW");
  
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
  //   --Bonus--  
  //   it('should reject input if it is not valid', () => {
  //     const employee = new Employee(1, "string", null, undefined);
  
  //     expect(employee.getName)
  //   })
  });