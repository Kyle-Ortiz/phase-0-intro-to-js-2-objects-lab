// Write your solution in this file!
const employee = {"name": "Kyle", "streetAddress": "123 Elm Street"};

function updateEmployeeWithKeyAndValue(object,key,value) {
     return Object.assign({},object,{[key]:value});
}
function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value){
     return Object.assign(object,{[key]:value});
}
function deleteFromEmployeeByKey(object, key) {
     return Object.assign({}, delete employee.key);
}
function destructivelyDeleteFromEmployeeByKey(object, key) {
     return Object.assign(employee,delete employee[key]);
}