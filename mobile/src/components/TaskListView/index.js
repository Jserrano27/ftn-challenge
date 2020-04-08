import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TouchableOpacity, RefreshControl, Alert } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { fetchQuery, graphql, commitMutation } from 'react-relay';
import { useNavigation } from '@react-navigation/native';

import environment from '../../environment';

import styles from './styles';


export default TaskListView = forwardRef((props, ref) => {
  const [taskList, setTaskList] = useState([]);
  const [taskListOriginal, setTaskListOriginal] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  
  useEffect(() => {
    
    setTaskList(props.tasks);

    // For reseting the taskList with original values after clearing the search
    setTaskListOriginal(props.tasks);
  }, [props.tasks]);

  useImperativeHandle(ref, () => ({
   
    showResults(searchText) {
      // Filter from the original task list
      const newData = taskListOriginal.filter(item => {
        const taskData = `${item.title.toUpperCase()} ${item.description.toUpperCase()}`;
        
        const inputData = searchText.toUpperCase();
        
        // If inputData is not present on taskData, don't return it
        return taskData.indexOf(inputData) !== -1;
      });
      
      setTaskList(newData);
    }
  }));

  async function onRefresh() {
    setRefreshing(true);

    const query = graphql`
      query TaskListViewQuery{
        tasks{
          id,
          title,
          description
        }
      }
    `;

    try{
      const response = await fetchQuery(environment, query);
      setTaskList(response.tasks);
      setRefreshing(false);
    } catch(e) {
      console.log(e);
      Alert.alert('FlyNotes', 'Ops! Something went wrong. Try again.', [{text: 'Got it'}]);
      setRefreshing(false);
    }
  };
  

  function handleDelete(id) {
    setTaskList(taskList.filter(task => task.id !== id));
    
    const mutation = graphql`
      mutation TaskListViewMutation($id: ID!) {
        deleteTask(id: $id)
      }
    `;

    commitMutation(environment, {mutation, variables: { id }, 
      onCompleted: (response, error) => {
        if (error) {
          Alert.alert('FlyNotes', `${error[0].message}`, [{text: 'Got it'}]);
          return;
        }
        console.log(`Task with id ${id} deleted`);

        // When tasklist is empty show empty notes message
        if(taskList.length === 1) onRefresh();
      },
      onError: err => {
        Alert.alert('FlyNotes', 'Ops! Something went wrong. Try again.', [{text: 'Got it'}]);
        console.log(err.source);
      }
    });
  };

  return (
      <View style={styles.container}>
        <SwipeListView
          contentContainerStyle={styles.listContainer}
          data={taskList}
          keyExtractor={item => item.id}
          renderItem={({ item: task }) => (
            <TouchableOpacity style={styles.task} activeOpacity={1} onPress={() => navigation.navigate('Task', [ task.title, task.description ])}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <Text
                style={styles.taskDescription}
                numberOfLines={2}
              >{task.description}</Text>
            </TouchableOpacity>
          )}

          renderHiddenItem={({ item }) =>  (
            <View style={styles.rowBack}>
                <TouchableOpacity style={[styles.backRightBtn]} activeOpacity={0.9} onPress={() => handleDelete(item.id)}>
                    <Text style={styles.backRightBtnText}>Delete</Text>
                </TouchableOpacity>
            </View>
          )}
          rightOpenValue={-90}
          previewRowKey={'0'}
          previewOpenValue={10}
          previewOpenDelay={3000}
          disableRightSwipe={true}
          stopLeftSwipe={100}
          directionalDistanceChangeThreshold={20}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
  )
});
