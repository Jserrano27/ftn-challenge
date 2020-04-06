import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // When user has no tasks yet
  firstTaskContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 14,
  },

  firstTaskText: {
    fontSize: 22,
    textAlign: 'center'
  },

  firstTaskLink: {
    fontSize: 22,
    color: '#1EB36B',
    fontWeight: 'bold',
    marginTop: 15
  },
});

export default styles;