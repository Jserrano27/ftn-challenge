import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { AsyncStorage } from "react-native";




// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
async function fetchQuery(operation, variables, cacheConfig, uploadables) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  
  const token = await AsyncStorage.getItem('@StickNotes-token');
  if (token !== null) {
    headers['token'] = token;
  } 
  

  return fetch("http://192.168.0.103:5000/graphql" , {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables
    })
  }).then(response => {
    return response.json();
  });
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store
});

export default env;