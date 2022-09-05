import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Login from './screens/login.js';
import Signin from './screens/signin';
import Home from './screens/home';
import Book from './screens/book_detail.js';

export default function App() {

  const Stack = createNativeStackNavigator();

  //Screen objects
  const loginScreen = <Login/>;
  const signinScreen = <Signin/>;
  const homeScreen = <Home/>;
  const bookScreen = <Book/>;
  return (
    
    <NavigationContainer >
      <Stack.Navigator initialRouteName = "Signin">
        <Stack.Screen name='SignIn' component={Signin} options ={{headerStyle:{backgroundColor: '#ffa000'}}}/>
        <Stack.Screen name='Login' component={Login} options ={{headerStyle:{backgroundColor: '#ffa000'}}}/>
        <Stack.Screen name='Home' component={Home} options ={{headerStyle:{backgroundColor: '#ffa000'}}}/>
        <Stack.Screen name='Book' component={Book} options ={{headerStyle:{backgroundColor: '#ffa000'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe082',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  
});
