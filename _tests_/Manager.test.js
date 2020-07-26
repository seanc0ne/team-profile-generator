const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("It should give you the office number", () => {
    const testValue = 106;
    const instanceOfEmployee = new Manager("Sean", 1, "sean@sean.com", testValue);
    expect(instanceOfEmployee.officeNumber).toBe(testValue);
});

test('Calling getRole should return Manager', () => {
    const testValue = "Manager";
    const instanceOfEmployee = new Manager("Sean", 1, "sean@sean.com", 106);
    expect(instanceOfEmployee.getRole()).toBe(testValue);
});

test("Calling getOffice should return office number", () => {
    const testValue = 106;
    const instanceOfEmployee = new Manager("Sean", 1, "sean@sean.com", testValue);
    expect(instanceOfEmployee.getOfficeNumber()).toBe(testValue);
});