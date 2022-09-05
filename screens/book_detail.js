import { Text, View, StyleSheet, } from 'react-native';
import React, { Component } from 'react';

//Images
import image_1 from '../assets/books/MadolDoova.jpg';

//Component
import BookCard from '../components/bookcard_component';

export default function Book_detail () {
    return (
      <View style = {styles.container}>
        <Text>
            <BookCard
                bookImage = {image_1}
                bookTitle = {'Madol duuwa'}
                author = {'Martin Wickramasingha'}
                price = {'350'}
            />;
          </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        marginTop:100,
    }
})