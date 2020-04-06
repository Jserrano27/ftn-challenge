import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server';

const bcrypt = require('bcryptjs');

export default {
  
  Mutation: {
    createUser: async (parent, { name, email, password }, { models: { userModel } }, info) => {
      const userExist = await userModel.findOne({ email }).exec();

      if (userExist) {
        throw new Error('The e-mail provided is already in use');
      }
      const user = await userModel.create({ name, email, password });

      return user;
    },
    
    login: async (parent, { email, password }, { models: { userModel } }, info) => {
      const user = await userModel.findOne({ email }).exec();
  
      if (!user) {
        throw new AuthenticationError('Wrong email or password');
      }
  
      const matchPasswords = bcrypt.compareSync(password, user.password);
  
      if (!matchPasswords) {
        throw new AuthenticationError('Wrong email or password');
      }
  
      const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 24 * 10 * 50 });
  
      return {
        token,
        name: user.name,
        auth: true
      };
    },
  },
  
  User: {
    tasks: async ({ id }, args, { models: { taskModel } }, info) => {
      const tasks = await taskModel.find({ author: id }).exec();
      return tasks;
    },
  },
};