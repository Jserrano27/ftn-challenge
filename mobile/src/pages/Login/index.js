import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, AsyncStorage} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { commitMutation, graphql } from 'react-relay';
import environment from '../../environment';

import loginImg from '../../assets/img-login.png';

import styles from './styles';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    async function clearAsyncStorage() {
      await AsyncStorage.removeItem('@StickNotes-token');
      await AsyncStorage.removeItem('@StickNotes-auth');
    }
    clearAsyncStorage();
  }, []);

  function nextInput() {
    passwordRef.current.focus();
  };

  function navigateToSignup() {
    navigation.navigate('Signup');
  };

  function handleLogin() {

    if (!email || !password) {
      alert('Enter your email and password.');
      return;
    }

    const mutation = graphql`
      mutation LoginMutation($email: String!, $password: String! ) {
        login(email: $email, password: $password){
          token,
          auth,
          name
        }
      }
    `;

    commitMutation(environment, {mutation, variables: {email, password}, 
      onCompleted: (response, error) => {
        if (error) {
          alert(error[0].message);
          return;
        }
        AsyncStorage.setItem('@StickNotes-token', response.login.token);
        AsyncStorage.setItem('@StickNotes-auth', response.login.auth.toString());
        AsyncStorage.setItem('@StickNotes-userName', response.login.name);

        setEmail('');
        setPassword('');

        navigation.navigate('TaskList', { userName: response.login.name });
      },
      onError: err => {
        if (err.source && err.source.errors[0].extensions.code === 'UNAUTHENTICATED') {
          alert('Wrong email or password.')
        } else {
          alert('Ops! Something went wrong. Try again.');
        }
        console.log(err.source);
      }
    });
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={loginImg} />

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#BCBCBC"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={nextInput}
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
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

          <Text style={styles.signup}>No account?{`\xa0`}
            <Text 
              style={styles.signupLink}
              onPress={() => navigateToSignup()}
            >
              Signup
            </Text>
          </Text>

          <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.9}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};