import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, RefreshControl } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { fetchQuery, graphql, commitMutation } from 'react-relay';
import { useNavigation } from '@react-navigation/native';

import environment from '../../environment';

import styles from './styles';

export default function TaskListView( { tasks } ) {
  const [taskList, setTaskList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  
  useEffect(() => {
    
    setTaskList(tasks);
  }, [tasks]);

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
      alert('Ops! Something went wrong. Try again.');
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
          alert(error[0].message);
          return;
        }
        console.log(`Task with id ${id} deleted`);

        // When tasklist is empty show empty notes message
        if(taskList.length === 1) onRefresh();
      },
      onError: err => {
        alert('Ops! Something went wrong. Try again.');
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
}
