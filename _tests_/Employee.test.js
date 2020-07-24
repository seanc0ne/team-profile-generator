const Employee = require('../lib/Employee');
// Test the getName method
test('Test the getName method', () => {
    const instanceOfEmployee = new Employee('Sean', 123, 'sean@sean.com');
    expect(instanceOfEmployee.getName()).toBe('Sean');
})