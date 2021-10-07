const Employee = require('../lib/Employee.js');

test("addition of name using constructor function", () =>
{
    const testvalue = "Amy";
    const employee = new Employee(testvalue);
    expect(employee.name).toBe(testvalue);

});

test("addition of id using constructor function", () =>
{
    const testvalue = "ID";
    const employee = new Employee("Amy", testvalue);
    expect(employee.id).toBe(testvalue);

});

test("addition of email using constructor function", () =>
{
    const testvalue = "Email";
    const employee = new Employee("Amy", 1, testvalue);
    expect(employee.email).toBe(testvalue);

});

test("getRole() returns Employee for Role", () =>
{
    const testvalue = "Employee";
    const employee = new Employee("Amy", 1, "amy@gmail.com")
    expect(employee.getRole()).toBe(testvalue);

});