import { Text, View, TextInput, Pressable, StyleSheet, Button } from 'react-native'
import React, { Component } from 'react';

//components
//import ButtonComponent from '../components/button_component'
//import { Button } from 'react-native-web';

export default function Signin({ navigation }) {

    const sign = () => navigation.navigate('Home');
  
    return(
        <View style = {styles.homeContainer}>
            <Text style = {styles.head}>BOOK Store</Text>
            <Text style = {styles.subHead}>SignIn</Text>

            <View style = {styles.inputContainer}>
            <TextInput style = {styles.textInput}
                    placeholder="Name"
                />
                <TextInput style = {styles.textInput}
                    placeholder="E-mail"
                />
                <TextInput style = {styles.textInput}
                    placeholder="Password"
                />
            </View>

            <View>
                <Pressable onPress = {() => navigation.push('Login')}>
                    <Text style = {styles.signInText}>Have an account ?</Text>
                </Pressable>
            </View>

            <View style = {styles.buttonSubmitContainer}>
                <Button color = "#ffa000"  title = "SIGN IN" onPress = {sign}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: '#ffe082',
        flex: 1,
        padding: 10,
        margin:0,
        marginTop:0,
        //borderRadius: 20,
        alignItems:'center',
        
      },
    head: {
        fontSize: 50,
        fontWeight: '900',
        marginTop:15
    },
    subHead: {
        fontSize: 25,
        fontWeight:'600'
    },
    buttonSubmitContainer:{
        width: "70%",
        marginTop:90,
        
    },
    textInput:{
        backgroundColor:'white',
        width: 300,
        padding: 5,
        paddingLeft: 30,
        borderRadius: 20,
        margin: 10
    },
    inputContainer:{
        marginTop: 80
    },
    signInText:{
        fontStyle: "italic",
        marginTop: 5,
        
    }
});
