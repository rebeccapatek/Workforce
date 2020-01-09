const Employee = (employee, computer) => {
    return `
        <section class="employee">
            <header>
                <h2>${employee.firstName} ${employee.lastName}</h2>
            </header>
            <div>
                Age ${employee.age}
            </div>
            <div>
                Computer:
                <h2> Model: ${computer.model} </h2>
                <h4> Year: ${computer.year} </h4>
            </div>
        </section>
    `
}

export default Employee