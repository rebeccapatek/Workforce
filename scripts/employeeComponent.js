const Employee = (employee, computer, dep, loc, foundclientArray) => {
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
            <section class="employee__clients">
                Clients include:
                <ol>
                ${
                    foundclientArray.map(c => {
                        return `<li>${c.name}</li>`
                    }).join("")
                }
                </ol>
            </section>

        </div>
    `
}


export default Employee