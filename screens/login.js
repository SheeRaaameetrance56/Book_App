import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, SafeAreaView, Button, TextInput, Pressable} from 'react-native';


export default function Login({ navigation }){

    const login = () => navigation.navigate('Home');

    return(
        <View style = {styles.homeContainer}>
            <Text style = {styles.head}>BOOK Store</Text>
            <Text style = {styles.subHead}>Login</Text>

            <View style = {styles.inputContainer}>
                <TextInput style = {styles.textInput}
                    placeholder="E-mail"
                />
                <TextInput style = {styles.textInput}
                    placeholder="Password"
                />
            </View>

            <View style = {styles.buttonLogin}>
                <Button color = "#ffa000" onPress={login} title = "LOGIN"/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: '#ffe082',
        flex:1,
        padding: 10,
        //margin:10,
        //marginTop:60,
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
    buttonSubmit:{
        marginTop:150
    },
    buttonLogin:{
        width: "70%",
        marginTop:150
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
        marginTop: 140
    },
    signInText:{
        fontStyle: "italic",
        marginTop: 5,
    
    }
});