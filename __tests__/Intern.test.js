const Intern = require('../lib/Intern.js');

test("addition of school name using constructor function", () =>
{
    const testvalue = "schoolname"
    const employee = new Intern("Amy", 1, "amy@gmail.com", testvalue);
    expect(employee.school).toBe(testvalue);
});

test("getRole() returns Intern as a role", () =>
{
    const testvalue = "Intern";
    const employee = new Intern("Amy", 1, "amy@gmail.com", "schoolName");
    expect(employee.getRole()).toBe(testvalue);
});