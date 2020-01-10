import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server';

const bcrypt = require('bcryptjs');

export default {
  Query: {
    user: async (parent, { id }, { models: { userModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const user = await userModel.findById({ _id: id }).exec();
      return user;
    },

    login: async (parent, { email, password }, { models: { userModel } }, info) => {
      const user = await userModel.findOne({ email }).exec();

      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }

      const matchPasswords = bcrypt.compareSync(password, user.password);

      if (!matchPasswords) {
        throw new AuthenticationError('Invalid credentials');
      }

      const token = jwt.sign({ id: user.id }, 'h4%4j1Qp8)_R8m', { expiresIn: 24 * 10 * 50 });

      return {
        token,
      };
    },
  },

  Mutation: {
    createUser: async (parent, { name, email, password }, { models: { userModel } }, info) => {
      const user = await userModel.create({ name, email, password });
      return user;
    },
  },
  
  User: {
    tasks: async ({ id }, args, { models: { taskModel } }, info) => {
      const tasks = await taskModel.find({ author: id }).exec();
      return tasks;
    },
  },
};