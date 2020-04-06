import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },  

  listContainer:{
    flex: 1,
    paddingHorizontal: 14,
  },

  task: {
    backgroundColor: '#1EB36B',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.35,
  },

  taskTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  taskDescription: {
    marginTop: 5,
    color: '#fff',
    fontSize: 12,
  },

  rowBack: {
    flex: 1,
    paddingBottom: 15
  },
  
  backRightBtn: {
    backgroundColor: '#b72d2d',
    borderRadius: 5,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  backRightBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingRight: 20
  },
  
});

export default styles;