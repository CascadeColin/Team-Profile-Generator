'use strict'

const Employee = require("../lib/employee");

// three As - arrange, act, assert

describe("Employee Class", () => {
  it("should accept name, id, and email as parameters", () => {
    const employee = new Employee("john", 1, "email@email.com");

    expect(employee.name).toBe("john");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("email@email.com");
  });
  it("should only accept a valid email address", () => {
    const employee = new Employee("john", 1, "notAnEmail");

    employee.getEmail();

    expect(employee.getEmail()).toEqual("Invalid Email Submitted");
  });
  it("should have methods get the employee name, id, email, and role", () => {
    //arrange
    const employee = new Employee("john", 1, "email@email.com");

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
  it("should only accept strings as parameters", () => {
    const employee = new Employee("john", 1, "email@email.com");

    employee.getName();
    employee.getId();
    employee.getEmail();
    employee.getRole();

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getName()).not.toEqual(expect.any(Number));
    expect(employee.getName()).not.toEqual(expect.any(Object));
    expect(employee.getName()).not.toBeUndefined();
    expect(employee.getName()).not.toBeNaN();
    expect(employee.getName()).not.toBeNull();

    expect(employee.getId()).toEqual(expect.any(String));
    expect(employee.getId()).not.toEqual(expect.any(Number));
    expect(employee.getId()).not.toEqual(expect.any(Object));
    expect(employee.getId()).not.toBeUndefined();
    expect(employee.getId()).not.toBeNaN();
    expect(employee.getId()).not.toBeNull();

    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getEmail()).not.toEqual(expect.any(Number));
    expect(employee.getEmail()).not.toEqual(expect.any(Object));
    expect(employee.getEmail()).not.toBeUndefined();
    expect(employee.getEmail()).not.toBeNaN();
    expect(employee.getEmail()).not.toBeNull();

    expect(employee.getRole()).toEqual(expect.any(String));
    expect(employee.getRole()).not.toEqual(expect.any(Number));
    expect(employee.getRole()).not.toEqual(expect.any(Object));
    expect(employee.getRole()).not.toBeUndefined();
    expect(employee.getRole()).not.toBeNaN();
    expect(employee.getRole()).not.toBeNull();
  });
});
