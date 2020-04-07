import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Signup from './pages/Signup';
import TaskList from './pages/TaskList';
import NewTask from './pages/NewTask';
import Task from './pages/Task';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Signup" component={Signup}/>
        <AppStack.Screen name="TaskList" component={TaskList} options={{gestureEnabled: false}} />
        <AppStack.Screen name="Task" component={Task} />
        <AppStack.Screen name="NewTask" component={NewTask} />
      </AppStack.Navigator>
    </NavigationContainer>  
  )
};
