'use strict'

const Engineer = require('../lib/employee');
// const Engineer = require('../lib/employee');

describe("Engineer Class", () => {
    it("should accept name, id, email, and github as parameters", () => {
      const engineer = new Engineer("john", "1", "email@email.com", "MyGithub");
  
      expect(engineer.name).toBe("john");
      expect(engineer.id).toBe("1");
      expect(engineer.email).toBe("email@email.com");
      expect(engineer.github).toBe("MyGithub");
    });
    it("should have methods get the employee name, id, email, and role", () => {
      //arrange
      const engineer = new Engineer("john", "1", "email@email.com", "MyGithub");
  
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
    });
  //   --Bonus--  
  //   it('should reject input if it is not valid', () => {
  //     const employee = new Employee(1, "string", null, undefined);
  
  //     expect(employee.getName)
  //   })
  });