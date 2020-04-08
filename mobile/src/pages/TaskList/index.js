import React, { useState, useEffect, createRef } from 'react';
import { Text, View, Image, TouchableOpacity, ActivityIndicator, TouchableWithoutFeedback, Keyboard, Alert, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { QueryRenderer, graphql, fetchQuery } from 'react-relay';
import { Feather } from '@expo/vector-icons';

import environment from '../../environment';

import styles from './styles';

import ErrorView from '../../components/ErrorView';
import TaskListView from '../../components/TaskListView';
import NoTasksView from '../../components/NoTasksView';

import newTaskIcon from '../../assets/img-newTask.png'

export default function TaskList({ route }) {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  const taskListViewRef = createRef();
  
  const {userName} = route.params;

  useEffect(() => {
    if(route.params.refresh){
      refreshFunction();
    };
  }, [route.params]);
  
  const query = graphql`
    query TaskListQuery {
      tasks{
        id,
        title,
        description
      }
    }
  `;

  async function refreshFunction() {
    try {
      await fetchQuery(environment, query);
    } catch(e) {
      console.log(e);
      Alert.alert('FlyNotes', 'Ops! Something went wrong. Try again.', [{text: 'Got it'}]);
    }
  };

  function goToNewTask() {
    navigation.navigate('NewTask');
  };

  function handleSearch(val) {
    setSearchText(val);
    taskListViewRef.current.showResults(val);
  };
 
  function handleLogOut() {
    Alert.alert('FlyNotes', 'Do you want to log out?', [
      {text: 'Yes', onPress: () => {
        // Start Log Out
        AsyncStorage.removeItem('@StickNotes-token');
        AsyncStorage.removeItem('@StickNotes-auth');
        AsyncStorage.removeItem('@StickNotes-userName');

        navigation.navigate('Login');
        // End Log Out
      }},
      {text: "No", onPress: () => {return}}
    ],
    {cancelable: false});
  };
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello, {userName}</Text>
        <TouchableOpacity style={styles.logOutContainer} onPress={handleLogOut} activeOpacity={1}>
          <Feather name="log-out" size={28} color="#33334F"/>
          <Text style={styles.logOutText}>Log out</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>Check your tasks 👇</Text>

        <SearchBar 
          containerStyle={styles.searchContainer} 
          inputContainerStyle={styles.searchInputContainer} 
          inputStyle={styles.searchInput}    
          lightTheme
          platform="ios"
          placeholder="search..."
          selectionColor="#1EB36B"
          onChangeText={value => handleSearch(value)}
          value={searchText}
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
                    // Render list of tasks in case of success
                    return (<TaskListView {...props}  ref={taskListViewRef} />)
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
