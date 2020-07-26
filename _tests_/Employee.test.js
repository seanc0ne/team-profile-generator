const Employee = require('../lib/Employee');
// Test the getName method
test('It should give you the employee name', () => {
    const instanceOfEmployee = new Employee('Sean', 123, 'sean@sean.com');
    expect(instanceOfEmployee.getName()).toBe('Sean');
})

test('It should give you the employee ID', () => {
    const instanceOfEmployee = new Employee('Sean', 123, 'sean@sean.com');
    expect(instanceOfEmployee.getId()).toBe(123);
})

test('It should give you the employee email', () => {
    const instanceOfEmployee = new Employee('Sean', 123, 'sean@sean.com');
    expect(instanceOfEmployee.getEmail()).toBe('sean@sean.com');
})