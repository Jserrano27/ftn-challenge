import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: 'white',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#33334F',
    paddingHorizontal: 14,

  },

  subtitle: {
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#33334F',
    marginTop: 5
  },

  input: {
    marginHorizontal: 14,
    height: 55,
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 20,
    marginVertical: 20
  },

  taskListContainer: {
    paddingHorizontal: 14,
    flex: 1,
    width: '100%'
  },

  // Floating NewTask Button

  circleShape: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#33334F',
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
    right: 18,
    shadowColor: '#000',
    shadowRadius: 6,
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowOpacity: 0.55,
  },
});

export default styles;