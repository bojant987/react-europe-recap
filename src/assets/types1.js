export default
`type Query {
    user(id: ID!): User
    company(id: ID!): Company
    positions(id : ID!): [Position]
}

type Mutation {
    createCompany(input: CreateCompanyInput): Company
    createPosition(input: CreatePositionInput): Position
}`;