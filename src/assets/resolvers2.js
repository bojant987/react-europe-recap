export default
`const Company = {
    employees: company => db.users.list()
        .filter(user => user.companyId === company.id),
};

const User = {
    company: user => db.companies.get(user.companyId),
    position: user => db.positions.get(user.positionId),
    connections: user => db.users.findConnections(user.id),
};`;