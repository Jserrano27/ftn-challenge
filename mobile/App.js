import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';


export default function App() {
  StatusBar.setBarStyle('dark-content', true);

  return(
    <>
      <Routes />
    </>
  )
};