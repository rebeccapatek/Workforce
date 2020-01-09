
import { useEmployees } from "./employeeDataProvider.js"
import { useComputers } from "./computerDataProvider.js"
import Employee from "./employeeComponent.js"

const contentTarget = document.querySelector(".employees")

export const employeeList = () => {
    const employees = useEmployees()
    const computerTypes = useComputers()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            // Find this product's type
            const type = computerTypes.find(type => type.id === employee.computerId)

            // Get HTML representation of product
            const html = Employee(employee, type)

            return html
        }).join("")
    }

    render()
}

export default employeeList