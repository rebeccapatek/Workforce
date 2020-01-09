const Employee = (employee, computer, dep) => {
    return `
    <div class="employee">
            <header class="emplyee__name">
                <h1>${employee.firstName} ${employee.lastName}</h1>
            </header>
            <section class="employee__computer">
                 Currently using a ${computer.year} ${computer.model}
            </section>
            <section class="employee__department">
                Works in the ${dep.name}
            </section>
        </div>
    `
}


export default Employee