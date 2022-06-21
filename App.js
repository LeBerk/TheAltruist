import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, Button, Pressable, OnPress, Image, Alert, Platform, TouchableHighlight } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox";


// Get started page 

const Start = () => {

  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
    <Text style={styles.text}>TheAltruist</Text>
    <Pressable style={styles.button} onPress={() => navigation.navigate('category')}>
      <Text style={styles.buttonText}>Get Started!</Text>
    </Pressable>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(103, 43, 229, 0.62)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Mogra', 
    color: '#FAFAFF',
    fontSize: 50, 
    fontWeight: '400', 
  },
  button: {
    marginRight:40,
    marginLeft:40,
    marginTop:58,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#18191F',
    width: 170, 
    height: 41, 
    borderRadius:16,
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: '800', 
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40, 
  }

});

// Categories page 

const Category = () => {

  const navi_gation = useNavigation(); 

  return (
    <View style={category_styles.layout}>
      <LinearGradient
        colors={['rgba(77, 0, 241, 0.62)', 'transparent']}
        style={category_styles.background}
      />
      <View>
      <Text style={category_styles.header}>Categories!</Text>
      <Pressable onPress={() => navi_gation.navigate('People_todo')}>
      <Categories title='Help People' image="https://i.ibb.co/K7CtT6F/921356.png"/>
      </Pressable>
      <Pressable onPress={() => navi_gation.navigate('Planet_todo')}>
      <Categories title='Help the Planet' image="https://i.ibb.co/4gFjyhc/2072130.png"/>
      </Pressable>
      </View>
      <View style={category_styles.space}>
      </View>
    </View>
  )
}

const Categories = (props) => (

  <View style={category_styles.box}>
    <Image source={{ uri: props.image }} style={category_styles.image}/>
      <Text style={category_styles.category_title}>{props.title}</Text>
  </View>
 
);

const category_styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(252, 1, 197, 0.5)',
  },
  box: {
    width: 320,
    height: 111,
    borderRadius: 30, 
    backgroundColor: 'rgba(217, 217, 217, 0.4)', 
    marginTop: 66, 
    flexDirection: "row",
  },
  category_title: {
    fontSize: 23,
    paddingTop: 40, 
    paddingRight: 0, 
    paddingBottom: 40, 
    paddingLeft: 30, 
    color: '#FAFAFF', 
    fontFamily: 'Mogra',
  }, 
  image: {
   width: 71,
   height: 70,
   marginLeft: 15, 
   marginTop: 20
  },
  header: {
    fontFamily: 'Mogra', 
    color: '#FAFAFF',
    fontSize: 50, 
    fontWeight: '400', 
    paddingTop: 0, 
    alignItems: 'flex-start',
    justifyContent: 'flex-start', 
    paddingBottom: 60,
    paddingLeft: 10
  }, 
  space: {
    paddingBottom: 100
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },
})

// To-do list pages 

function People_todo() {
  return (
  
    <View style={todo_styles.layout}>
      <LinearGradient
        colors={['rgba(0, 255, 71, 0.62)', 'transparent']}
        style={todo_styles.background}
      />
     <Text style={todo_styles.header}>Help People</Text>
     <BouncyCheckbox
      size={40}
      color="#FFFFFF"
      fillColor="green"
      // unfillColor="#FFFFFF"
      text="Compliment a random stranger"
      iconStyle={{ borderColor: "black", borderWidth: 3 }}
      onPress={(isChecked=Boolean) => {}}
      style={{
        marginTop: 30, 
        //marginBottom: 400, 
        fontWeight: 6, 
        justifyContent: 'center', 
        alignItems: 'center'}}
      textStyle={{
      color: 'white',
      fontSize: 20, 
      fontWeight: '600'
    }}
  />
  <BouncyCheckbox
      size={40}
      color="#FFFFFF"
      fillColor="green"
      // unfillColor="#FFFFFF"
      text="Give chocolate to a random stranger "
      iconStyle={{ borderColor: "black", borderWidth: 3 }}
      onPress={(isChecked=Boolean) => {}}
      style={{
        marginTop: 30, 
       // marginBottom: 400, 
        fontWeight: 6, 
        justifyContent: 'center', 
        alignItems: 'center'}}
      textStyle={{
      color: 'white',
      fontSize: 18, 
      fontWeight: '600'
    }}
  />
   <BouncyCheckbox
      size={40}
      color="#FFFFFF"
      fillColor="green"
      // unfillColor="#FFFFFF"
      text="Catch up with an old friend"
      iconStyle={{ borderColor: "black", borderWidth: 3 }}
      onPress={(isChecked=Boolean) => {}}
      style={{
        marginTop: 30, 
       // marginBottom: 300, 
        fontWeight: 6, 
        justifyContent: 'center', 
        alignItems: 'center'}}
      textStyle={{
      color: 'white',
      fontSize: 20, 
      fontWeight: '600'
    }}
  />
  <BouncyCheckbox
      size={40}
      color="#FFFFFF"
      fillColor="green"
      // unfillColor="#FFFFFF"
      text="Tell your parents you love them "
      iconStyle={{ borderColor: "black", borderWidth: 3 }}
      onPress={(isChecked=Boolean) => {}}
      style={{
        marginTop: 30, 
        marginBottom: 200, 
        fontWeight: 6, 
        justifyContent: 'center', 
        alignItems: 'center'}}
      textStyle={{
      color: 'white',
      fontSize: 20, 
      fontWeight: '600'
    }}
  />
    </View> 
    
  )
}

function Planet_todo() {
  return (
  
    <View style={todo_styles.layout}>
      <LinearGradient
        colors={['rgba(0, 255, 71, 0.62)', 'transparent']}
        style={todo_styles.background}
      />
     <Text style={[todo_styles.header, {fontSize: 40}]}>Help the Planet</Text>
     <BouncyCheckbox
      size={40}
      color="#FFFFFF"
      fillColor="green"
      // unfillColor="#FFFFFF"
      text="Pick up a piece of trash "
      iconStyle={{ borderColor: "black", borderWidth: 3 }}
      onPress={(isChecked=Boolean) => {}}
      style={{
        marginTop: 30, 
        //marginBottom: 400, 
        fontWeight: 6, 
        justifyContent: 'center', 
        alignItems: 'center'}}
      textStyle={{
      color: 'white',
      fontSize: 20, 
      fontWeight: '600'
    }}
  />
  <BouncyCheckbox
      size={40}
      color="#FFFFFF"
      fillColor="green"
      // unfillColor="#FFFFFF"
      text="Walk instead of taking a car"
      iconStyle={{ borderColor: "black", borderWidth: 3 }}
      onPress={(isChecked=Boolean) => {}}
      style={{
        marginTop: 30, 
       // marginBottom: 400, 
        fontWeight: 6, 
        justifyContent: 'center', 
        alignItems: 'center'}}
      textStyle={{
      color: 'white',
      fontSize: 20, 
      fontWeight: '600'
    }}
  />
   <BouncyCheckbox
      size={40}
      color="#FFFFFF"
      fillColor="green"
      // unfillColor="#FFFFFF"
      text="Donate clothes to a local charity "
      iconStyle={{ borderColor: "black", borderWidth: 3 }}
      onPress={(isChecked=Boolean) => {}}
      style={{
        marginTop: 30, 
       // marginBottom: 300, 
        fontWeight: 6, 
        justifyContent: 'center', 
        alignItems: 'center'}}
      textStyle={{
      color: 'white',
      fontSize: 20, 
      fontWeight: '600'
    }}
  />
  <BouncyCheckbox
      size={40}
      color="#FFFFFF"
      fillColor="green"
      // unfillColor="#FFFFFF"
      text="Plant a tree in a local park"
      iconStyle={{ borderColor: "black", borderWidth: 3 }}
      onPress={(isChecked=Boolean) => {}}
      style={{
        marginTop: 30, 
       // marginBottom: 200, 
        fontWeight: 6, 
        justifyContent: 'center', 
        alignItems: 'center'}}
      textStyle={{
      color: 'white',
      fontSize: 20, 
      fontWeight: '600'
    }}
  />
  <BouncyCheckbox
      size={40}
      color="#FFFFFF"
      fillColor="green"
      // unfillColor="#FFFFFF"
      text="Finish all of your meals"
      iconStyle={{ borderColor: "black", borderWidth: 3 }}
      onPress={(isChecked=Boolean) => {}}
      style={{
        marginTop: 30, 
        marginBottom: 150, 
        fontWeight: 6, 
        justifyContent: 'center', 
        alignItems: 'center'}}
      textStyle={{
      color: 'white',
      fontSize: 20, 
      fontWeight: '600'
    }}
  />
    </View> 
    
  )
}

const todo_styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(6, 31, 255, 0.62)',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
},
  header: {
    fontFamily: 'Mogra', 
    color: '#FAFAFF',
    fontSize: 50, 
    fontWeight: '400', 
    paddingTop: 0, 
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5, 
    paddingBottom: 10
}, 
})

// Final App function to render 

export default function App() {
  const [loaded] = useFonts({
    Mogra: require('./assets/fonts/Mogra-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  const Stack = createStackNavigator(); 

  return (
   <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name='start' component={Start}/>
        <Stack.Screen name='category' component={Category}/>
        <Stack.Screen name='People_todo' component={People_todo}/> 
        <Stack.Screen name='Planet_todo' component={Planet_todo}/>
        </Stack.Navigator>
   </NavigationContainer>
  );
}