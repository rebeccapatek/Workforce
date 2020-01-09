
import { useEmployees } from "./employeeDataProvider.js"
import { useComputers } from "./computerDataProvider.js"
import Employee from "./employeeComponent.js"
import { useDepartments } from "./departmentDataProvider.js"
import { useLocations } from "./locationDataProvider.js"
import { useCustomers } from "./customerProvider.js"
import { useCustEmployees } from "./employeeCustProvider.js"


const contentTarget = document.querySelector(".employees")

export const employeeList = () => {
    const employees = useEmployees()
    const computerTypes = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const customers = useCustomers()
    const employeeCust = useCustEmployees()
    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            // Find this product's type
            const type = computerTypes.find(type => type.id === employee.computerId)
            const dep = departments.find(name => name.id === employee.departmentId)
            const loc = locations.find(where => where.id === employee.locationId)
            const clientRelationships = employeeCust.filter(ec => ec.employeeId === employee.id)

            // Convert the array from relationship objects to chore objects
            const foundclientArray = clientRelationships.map(rc => {
                const foundCustomer= customers.find(customer => customer.id === rc.customerId)
                return foundCustomer
            })
          
            
            // Get HTML representation of product
            const html = Employee(employee, type, dep, loc, foundclientArray)

            return html
        }).join("")
    }

    render()
}

export default employeeList