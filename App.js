import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Pressable, OnPress } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

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
  return (
    <View style={category_styles.layout}>
      <LinearGradient
        colors={['rgba(77, 0, 241, 0.62)', 'transparent']}
        style={category_styles.background}
      />
      <Text style={category_styles.header}>Categories!</Text>
       <Box/>
       <Box_two/>
    </View>
  )
}

export const Box = () => (
  <View style={category_styles.box} />
);

export const Box_two = () => (
  <View style={category_styles.box2} />
);

const category_styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(252, 1, 197, 0.5)',
  },
  header: {
    fontFamily: 'Mogra', 
    color: '#FAFAFF',
    fontSize: 50, 
    fontWeight: '400', 
    marginTop: -200, 
    marginBottom: 39,
  }, 
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },
  box: {
    width: 307,
    height: 111,
    borderRadius: 30, 
    backgroundColor: 'rgba(217, 217, 217, 0.4)', 
  },
  box2: {
    width: 307,
    height: 111,
    borderRadius: 30, 
    backgroundColor: 'rgba(217, 217, 217, 0.4)', 
    marginTop: 63, 
  }
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
      <Stack.Navigator  headerMode='none'>
        <Stack.Screen name='start' component={Start}/>
        <Stack.Screen name='category' component={Category}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}