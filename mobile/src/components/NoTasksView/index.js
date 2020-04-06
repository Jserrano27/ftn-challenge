import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default function NoTasksView({goToNewTask}) {

  return (
    <View style={styles.firstTaskContainer}>
      <Text style={styles.firstTaskText}>You don't seem to have any task yet</Text>
      <Text style={styles.firstTaskLink} onPress={() => goToNewTask()}>Create your first task</Text>
    </View>
  );
}
