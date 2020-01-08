import userSchema from './userSchema';
import taskSchema from './taskSchema';
import { gql } from 'apollo-server';


const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, taskSchema];
