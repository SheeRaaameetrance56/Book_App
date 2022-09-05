import { Text, StyleSheet, View, Pressable, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'


export default function bookcard_component (props, {navigation}) {

    const book_image = <Image source={props.bookImage} style = {styles.bookImage}/>
    const book_title = <Text style = {styles.bookTitle}>{props.bookTitle}</Text>;
    const author = <Text style = {styles.author}>{props.author}</Text>;
    const price = <Text style = {styles.price}>{props.price}</Text>;
    

    return (
      <View style = {styles.container}>
        <Pressable onPress = {() => {navigation.navigator('Book')}}> 
            <TouchableOpacity>
                {book_image}
                {book_title}
                {author}
                {price}
            </TouchableOpacity>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffff',
        width:350,
        //height:100,
        borderRadius:20,
        margin:5,
    },
    bookTitle:{
        width:250,
        fontSize:20,
        fontWeight:'600',
        textAlign:'right',
        padding: 15,
        marginLeft:100
    },
    author:{
        fontSize:15,
        fontWeight:'300',
        textAlign:'right',
        padding: 15,
    },
    price:{
        fontSize:13,
        fontWeight:'300',
        textAlign:'right',
        padding: 15,
    },
    bookImage:{
        width: 200,
        height: 280,
        margin:20,
        borderRadius: 20,
    },
})