let departments = []

export const useDepartments = () => departments.slice()

export const getDeparments = () => fetch("http://localhost:8088/departments")
    .then(res => res.json())
    .then(parsedDepartments => departments = parsedDepartments)