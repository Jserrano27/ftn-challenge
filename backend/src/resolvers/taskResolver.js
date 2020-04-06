import { AuthenticationError } from 'apollo-server';

export default {
  Query: {
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

    deleteTask: async (parent, { id }, { models: { taskModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }

      await taskModel.findByIdAndDelete({ _id: id });

      return id;
    },


  },

  Task: {
    author: async ({ author }, args, { models: { userModel } }, info) => {
      const user = await userModel.findById({ _id: author }).exec();
      return user;
    },
  },
};