const Engineer = require('../lib/Engineer.js');

test("addition of github username using constructor", () =>
{
    const testvalue = "githubUser";
    const employee = new Engineer("Amy", 1, "amy@gmail.com", testvalue)
    expect(employee.github).toBe(testvalue);

});


test("getRole() returns Engineer for Role", () =>
{
    const testvalue = "Engineer";
    const employee = new Engineer("Amy", 1, "amy@gmail.com", "githubUser")
    expect(employee.getRole()).toBe(testvalue);

});