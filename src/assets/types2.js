export default
`type User {
    first_name: String
    last_name: String
    age: String
    photoUri: String
    company: Company
    position: Position
    connections: [User]
}

type Company {
    name: String
    description: String
    address: String
    employees: [User]
}

type Position {
    name: String
    description: String
    keywords: [String]
}`;