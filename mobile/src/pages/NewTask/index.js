import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { commitMutation, graphql } from 'react-relay';
import { useNavigation } from '@react-navigation/native'

import environment from '../../environment';


import styles from './styles';

export default function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const descriptionRef = useRef(null);
  const navigation = useNavigation(); 

  function createTask() {
    if (!title || !description) {
      alert('You must fill both title and description');
      return
    }

    const mutation = graphql`
      mutation NewTaskMutation($title: String!, $description: String!) {
        createTask( title: $title, description: $description ) {
          id,
        }
      }
    `;

    commitMutation(environment, {mutation, variables: { title, description }, 
      onCompleted: (response, error) => {
        if(error) {
          alert(error[0].message);
        }
        navigation.navigate('TaskList', { refresh: true });
      },
      onError: err => {
        alert('Ops! Something went wrong. Try again.');
        console.log(err);
      }
    });
  }  

  function nextInput() {
    descriptionRef.current.focus();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>New Task</Text>
        <Text style={styles.subtitle}>What do you want to do? 🤔</Text>

        <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="title"
              placeholderTextColor="#BCBCBC"
              selectionColor="#1EB36B"
              onSubmitEditing={nextInput}
              underlineColorAndroid="transparent"
              value={title}
              onChangeText={setTitle}
              returnKeyType="next"
            />

            <TextInput
              style={styles.inputArea}
              placeholder="description"
              placeholderTextColor="#BCBCBC"
              underlineColorAndroid="transparent"
              value={description}
              onChangeText={setDescription}
              multiline
              ref={descriptionRef}
              selectionColor="#1EB36B"
            />  

            <TouchableOpacity 
              style={styles.button} 
              activeOpacity={0.9}
              onPress={createTask}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
