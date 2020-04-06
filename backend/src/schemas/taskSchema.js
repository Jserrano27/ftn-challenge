import { gql } from 'apollo-server';

export default gql`
  type Task {
    id: ID!
    title: String!
    description: String!
    author: User!
  }

  extend type Query {
    tasks: [Task!]!
  }

  extend type Mutation {
    createTask(title: String!, description: String!): Task!
    deleteTask(id: ID!): ID!
  }
`;