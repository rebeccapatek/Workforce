
import { getEmployees } from "./employeeDataProvider.js"
import { getComputers } from "./computerDataProvider.js"
import employeeList from "./employeeList.js"
import { getDeparments } from "./departmentDataProvider.js"
import { getLocations } from "./locationDataProvider.js"
import { getCustomers } from "./customerProvider.js"
import { getCustEmployees } from "./employeeCustProvider.js"

getEmployees()
.then(getComputers)
.then(getDeparments)
.then(getLocations)
.then(getCustomers)
.then(getCustEmployees)
.then(employeeList)