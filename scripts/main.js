
import { getEmployees } from "./employeeDataProvider.js"
import { getComputers } from "./computerDataProvider.js"
import employeeList from "./employeeList.js"

getEmployees()
    .then(getComputers)
    .then(employeeList)