import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    tasks: [Task!]!
  }

  type Token {
    token: String!
    auth: Boolean!
    name: String!
  }

  extend type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Token!
  }
`;