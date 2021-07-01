// Write your solution in this file!
// const employee = { name: "Kyle", streetAddress: "123 Elm Street" };

// function updateEmployeeWithKeyAndValue(object, key, value) {
//   return Object.assign({}, object, { [key]: value });
// }
// function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
//   return Object.assign(object, { [key]: value });
// }
// function deleteFromEmployeeByKey(object, key) {
//   return Object.assign({}, delete employee.key);
// }
// function destructivelyDeleteFromEmployeeByKey(object, key) {
//   return Object.assign(employee, delete employee[key]);
// }

//recoded during phase 1 for the review lab
const employee = { name: "Roger", streetAddress: "non'ya" };

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
  return Object.assign({}, employeeObj, { [key]: value });
}
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
  return Object.assign(employeeObj, { [key]: value });
}
function deleteFromEmployeeByKey(employeeObj, key) {
  return Object.assign({}, delete employeeObj.key);
}
function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
  return Object.assign(employeeObj, delete employeeObj[key]);
}
