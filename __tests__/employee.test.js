'use strict'

const Employee = require("../lib/employee");

// three As - arrange, act, assert

describe("Employee Class", () => {
  it("should accept name, id, and email as parameters", () => {
    const employee = new Employee("john", "1", "email@email.com");

    expect(employee.name).toBe("john");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("email@email.com");
  });
  it("should have methods get the employee name, id, email, and role", () => {
    //arrange
    const employee = new Employee("john", "1", "email@email.com");

    //act
    employee.getName();
    employee.getId();
    employee.getEmail();
    employee.getRole();

    //assert
    expect(employee.getName()).toBe("john");
    expect(employee.getId()).toBe("1");
    expect(employee.getEmail()).toBe("email@email.com");
    expect(employee.getRole()).toBe("Employee");
  });
//   --Bonus--  
//   it('should reject input if it is not valid', () => {
//     const employee = new Employee("1", "string", "not an email");

//     expect(employee.getName)
//   })
});
