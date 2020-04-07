import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#1EB36B'
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30
  },

  description: {
    color: '#fff',
    fontSize: 15,
    flex: 1
  },
  
  arrowLeft: {
    marginTop: 'auto',
    marginTop: 5,
    marginBottom: 15
  },  

});

export default styles;