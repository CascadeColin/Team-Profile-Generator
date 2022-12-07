'use strict'

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    // this.email = email;
    this.role = "Employee";
    this.getRole();
    this.email = this.validateEmail(email);
  }
  validateEmail(email) {
    const syntaxCheck = /\S+@\S+\.\S+/;
    let result = syntaxCheck.test(email);
    if (result) return email; 
    return "Invalid Email Submitted";
  }
  getName() {
    const str = this.name.toString();
    return str;
  }
  getId() {
    const str = this.id.toString();
    return str;
  }
  getEmail() {
    const str = this.email.toString();
    return str;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Employee;