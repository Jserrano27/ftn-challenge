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

  // SearchBar

  // Container of Searchbar
  searchContainer: {
    marginHorizontal: 5,
    borderRadius: 5,
    marginVertical: 20,
    backgroundColor: '#fff',
    },

  // Container of the TextInput
  searchInputContainer: {
    height: 45,
    backgroundColor: '#EEEEEE'
  },

  // End SearchBar

  taskListContainer: {
    paddingHorizontal: 14,
    flex: 1,
    width: '100%'
  },

  // Log Out

  logOutContainer: {
    position: 'absolute',
    top: Constants.statusBarHeight + 20,
    right: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },  

  logOutText: {
    color: '#33334F',
    fontSize: 12
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