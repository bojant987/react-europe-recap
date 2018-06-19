export default
`const Query = {
    user: (root, {id}) => db.users.get(id),
    company: (root, {id}) => db.companies.get(id),
    positions: (root) => db.positions.list(),
};

const Mutation = {
    createCompany: (root, {input}, {user}) => {
        // handle errors
        if (!user) {
            throw new Error('Unauthorized');
        }
        // do stuff
        const id = db.companies.create(input);
        return db.companies.get(id);
    },
    createPosition: (root, {input}, {user}) => {
        // handle errors
        if (!user) {
            throw new Error('Unauthorized');
        }
        // do stuff
        const id = db.positions.create(input);
        return db.positions.get(id);
    }
};`;