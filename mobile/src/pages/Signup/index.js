import React, { useState, useRef } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { commitMutation, graphql } from 'react-relay';
import environment from '../../environment';

import signupImg from '../../assets/img-signup.png';

import styles from './styles';

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const navigation = useNavigation();


  function focusEmail() {
    emailRef.current.focus();
  };

  function focusPassword() {
    passwordRef.current.focus();
  }

  function navigateToLogin() {
    navigation.navigate('Login');
  };

  function handleSignup() {
    if(!name || !email || !password){
      Alert.alert('FlyNotes', 'Please, fill all the fields', {text: 'Got it'});
    };

    const mutation = graphql`
      mutation SignupMutation($name: String!, $email: String!, $password: String! ) {
        createUser(name: $name, email: $email, password: $password){
          id
        }
      }
    `;

    commitMutation(environment, {mutation, variables: {name, email, password}, 
      onCompleted: (response, error) => {
        if (error) {
          Alert.alert('FlyNotes', `${error[0].message}`, [{text: 'Got it'}]);
          return;
        }
        Alert.alert('FlyNotes', `Congratulations ${name}, your account has been created! Please, log in.`, {text: 'Ok'});
        navigation.navigate('Login');
      },
      onError: err => {
        Alert.alert('FlyNotes', 'Ops! Something went wrong. Try again.', {text: 'Got it'});
        console.log(err.source);
      }
    });
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        enabled={Platform.OS === 'ios'}
        behavior="position"
        keyboardVerticalOffset="-10"
        contentContainerStyle={styles.avoidingView}
      >

        <Image source={signupImg} />

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="name"
            placeholderTextColor="#BCBCBC"
            autoCorrect={false}
            onSubmitEditing={focusEmail}
            underlineColorAndroid="transparent"
            value={name}
            onChangeText={setName}
            returnKeyType="next"
          />

          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#BCBCBC"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={focusPassword}
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
            ref={emailRef}
          />

          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="#BCBCBC"
            secureTextEntry
            textContentType="password"
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
            clearTextOnFocus={false}
            underlineColorAndroid="transparent"
            returnKeyType="done"
            ref={passwordRef}
          />

          <Text style={styles.login}>Already have an account?{`\xa0`}
            <Text 
              style={styles.loginLink}
              onPress={() => navigateToLogin()}
            >
              Login
            </Text>
          </Text>

          <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.9}
            onPress={handleSignup}
          >
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
};