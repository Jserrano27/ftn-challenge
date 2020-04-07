import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Task( props ) {
  const taskTitle = props.route.params[0];
  const taskDescription = props.route.params[1];
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{taskTitle}</Text>

      <ScrollView indicatorStyle="white" persistentScrollbar>
        <Text style={styles.description}>{taskDescription}</Text>
      </ScrollView>
      
      <TouchableOpacity style={styles.arrowLeft} activeOpacity={1} onPress={navigation.goBack}> 
        <Feather name="arrow-left" size={42} color="#fff"/>
      </TouchableOpacity>
    </View>
  );
}
