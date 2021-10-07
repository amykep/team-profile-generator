const Manager = require('../lib/Manager.js');

test("add officeNumber using constructor function", () =>
{
    const testvalue = "officenumber";
    const employee = new Manager("Amy", 1, "amy@gmail.com", testvalue);
    expect(employee.officeNumber).toBe(testvalue);

});

test("getRole() returns Manager as a role", () =>
{
    const testvalue = "Manager";
    const employee = new Manager("Amy", 1, "amy@gmail.com", "officeNumber");
    expect(employee.getRole()).toBe(testvalue);

})