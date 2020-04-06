import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { QueryRenderer, graphql, fetchQuery } from 'react-relay';
import environment from '../../environment';

import styles from './styles';

import ErrorView from '../../components/ErrorView';
import TaskListView from '../../components/TaskListView';
import NoTasksView from '../../components/NoTasksView';

import newTaskIcon from '../../assets/img-newTask.png'

export default function TaskList({ route }) {
  const [taskList, setTaskList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  
  const {userName} = route.params;

  useEffect(() => {
    if(route.params.refresh){
      refreshFunction();
    };
  }, [route.params]);
  

  async function refreshFunction() {
    try {
      const response = await fetchQuery(environment, query);
      setTaskList(response.tasks);
    } catch(e) {
      console.log(e);
      alert('Ops! Something went wrong. Try again.');
    }
  };

  function goToNewTask() {
    navigation.navigate('NewTask');
  };
 
  const query = graphql`
    query TaskListQuery {
      tasks{
        id,
        title,
        description
      }
    }
  `;

  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello, {userName}</Text>
        <Text style={styles.subtitle}>Check your tasks 👇</Text>

        <TextInput 
          style={styles.input}
          placeholder="search..."
          placeholderTextColor="#BCBCBC"
          selectionColor="#1EB36B"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={searchText}
          onChangeText={setSearchText}
          returnKeyType="search"
          />

        <TouchableOpacity
          style={styles.circleShape}
          activeOpacity={0.9}
          onPress={() => goToNewTask()}
          >
          <Image source={newTaskIcon}/>
        </TouchableOpacity>

        <QueryRenderer 
          environment={environment} 
          variables={{}} 
          query={query} 
          render={
            ({error, props}) => {
              if (error) {
                // In case of query errors or fetch failure
                console.log(error.source);
                return (<ErrorView />);

              } else if (props) {
                if(props.tasks.length === 0) {
                  return (
                    <NoTasksView goToNewTask={goToNewTask}/>
                    )
                  } else {
                    setTaskList(props.tasks);
                    // List of tasks in case of success
                    return (<TaskListView {...props}/>)
                  }
                }
                // Render Loader while fetching
                return (<ActivityIndicator size="large" color="#000" style={{marginTop: 20}}/>);
              }
            }
            />
      </View>
    </TouchableWithoutFeedback>
  );
}
