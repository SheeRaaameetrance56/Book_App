import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView, Pressable} from 'react-native';

//Components
import BookCard from '../components/bookcard_component';

//Images
import image_1 from '../assets/books/MadolDoova.jpg';
import image_2 from '../assets/books/Harry_Potter_and_the_Deathly_Hallows.jpg';

export default function Home ({ navigation }) {

  
  return (
    <View style = {styles.container} >
      <Text style = {styles.head}>Book store</Text>
      <View style = {styles.search}>
        <TextInput
          placeholder='Search Books'
        />
        
      </View>
      <ScrollView style = {styles.bookCard}> 
          <BookCard
            bookImage = {image_1}
            bookTitle = {'Madol duuwa'}
            author = {'Martin Wickramasingha'}
            price = {'350'}
            />
          <BookCard
            bookImage = {image_2}
            bookTitle = {'Harry potter and the deathly hollows'}
            author = {'J.K Rowling'}
            price = {'600'}
          />
          <BookCard
            bookTitle = {'Rich dad poor dad'}
            author = {'Robert Kiyosaki'}
            price = {'830'}
            
          />
          <BookCard
            bookTitle = {'Think and grow rich'}
            author = {'Napolian Hill'}
            price = {'550'}
          />
          <BookCard
            bookTitle = {'Basic anatomy'}
            author = {'Robert Hook'}
            price = {'450'}
          />
      </ScrollView>
      <StatusBar style="auto" />
    </View>

  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ffe082',
    flex:1,
    alignItems:'center'
  },
  head:{
    textAlign:"center",
    fontSize: 20,
    fontWeight:"700",
    marginTop:20,
    marginBottom:20,
  },
  search:{
    backgroundColor:'white',
    width: 350,
    padding: 5,
    paddingLeft: 30,
    borderRadius: 20,
    margin: 5
  },
  bookCard:{
    marginBottom:50,
    
  }
    })


