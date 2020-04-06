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

  formContainer: {
    flex: 1,
    width: "100%",
    marginVertical: 20,
    paddingHorizontal: 14
  },

  input: {
    height: 55,
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#EEEEEE',
    marginBottom: 15,
    paddingHorizontal: 20,
  },

  inputArea: {
    height: 200,
    backgroundColor: '#EEEEEE',
    fontWeight: '600',
    borderRadius: 5,
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 15,
    textAlignVertical: 'top'
  },

  button: {
    height: 67,
    backgroundColor: '#1EB36B',
    borderRadius: 5,
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  }

});

export default styles;