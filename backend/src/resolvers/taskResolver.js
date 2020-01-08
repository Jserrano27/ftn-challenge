import { AuthenticationError } from 'apollo-server';

export default {
  Query: {
    task: async (parent, { id }, { models: { taskModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const task = await taskModel.findById({ _id: id }).exec();
      return task;
    },
    tasks: async (parent, args, { models: { taskModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const tasks = await taskModel.find({ author: me.id }).exec();
      return tasks;
    },
  },

  Mutation: {
    createTask: async (parent, { title, description }, { models: { taskModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const task = await taskModel.create({ title, description, author: me.id });
      return task;
    },
  },

  Task: {
    author: async ({ author }, args, { models: { userModel } }, info) => {
      const user = await userModel.findById({ _id: author }).exec();
      return user;
    },
  },
};