let custEmployees = []

export const useCustEmployees = () => custEmployees.slice()

export const getCustEmployees = () => fetch("http://localhost:8088/customerEmployees")
    .then(res => res.json())
    .then(parsedcustEmployees => custEmployees = parsedcustEmployees)