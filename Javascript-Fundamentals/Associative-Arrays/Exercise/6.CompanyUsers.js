function companyUser(commands) {
    const companies = new Map();

    for(const command of commands) {
        const [companyName, employeeId] = command.split(` -> `);

        if(companies.has(companyName)) {
            companies.get(companyName).add(employeeId);
        } else {
            companies.set(companyName, new Set([employeeId]));
        }
    }
    const sortedCompanies = Array.from(companies)
    .sort((a, b) => a[0].localeCompare(b[0]));

    for(const [company, employees] of sortedCompanies) {
        console.log(company);

        for(const employeeId of employees) {
            console.log(`--`, employeeId);
        }
    }
}