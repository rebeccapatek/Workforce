const Employee = (employee, computer, dep, loc) => {
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
            <section class="employee__location">
                Works at the ${loc.name} office
            </section>
        </div>
    `
}


export default Employee