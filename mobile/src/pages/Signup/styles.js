import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: "center",
    backgroundColor: 'white'
  },

  avoidingView: {
    width: '100%',
    flex: 1,
    alignItems: 'center'
  },  

  formContainer: {
    flex: 1,
    width: "100%",
    marginVertical: 20,
  },

  input: {
    height: 55,
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#EEEEEE',
    marginBottom: 15,
    paddingHorizontal: 20,
    color: '#1EB36B'
  },

  login: {
    textAlign: "right",
    fontSize: 16,
    color: '#BCBCBC',
  },

  loginLink: {
    color: '#1EB36B',
  },

  button: {
    height: 67,
    backgroundColor: '#1EB36B',
    borderRadius: 5,
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
  },

  loginButtonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  }


});

export default styles;