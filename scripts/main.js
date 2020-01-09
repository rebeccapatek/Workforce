
import { getEmployees } from "./employeeDataProvider.js"
import { getComputers } from "./computerDataProvider.js"
import employeeList from "./employeeList.js"
import { getDeparments } from "./departmentDataProvider.js"


getEmployees()
    .then(getComputers)
    .then(getDeparments)
    .then(employeeList)