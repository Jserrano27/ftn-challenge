import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import sadFace from '../../assets/sad-face.png';

import styles from './styles';


export default function ErrorView() {
  const navigation = useNavigation();

  function refresh() {
    navigation.navigate('TaskList');
    
  }

  return (
    <View style={styles.container}>
      <Image source={sadFace} style={styles.sadFace}/>
      <Text style={styles.errorText}>Ops! Something went wrong.</Text>
      <Text style={styles.errorText}>Please, <Text style={styles.linkText} onPress={() => refresh()}>try again</Text>.</Text>
    </View>
  );
}
