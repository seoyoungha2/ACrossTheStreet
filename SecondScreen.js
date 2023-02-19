import { StatusBar, Pressable } from 'expo-status-bar';
import React , { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Btn from "./Btn";
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function SecondScreen({navigation, route}) {
  let language = route.params.language;
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Are you searching for a free/ affordable clinic or insurance?
      </Text>


    {/*onPress={() => navigation.navigate("Third")}*/}
    
    {/*
      <Pressable onPress={() => navigation.navigate("Fourth")} style={styles.btn}>
      <Text style={styles.text}> Yes </Text>
    </Pressable>
    <Pressable onPress={() => navigation.navigate("Third")} style={styles.btn}>
      <Text style={styles.text}> No </Text>
    </Pressable>
    */}
    


      <Text style={styles.paragraph}>
        We can try to find an insurance that you might qualify for, or a clinic that accepts non-insured. In an   emergency, call 911.
      </Text>
      
      <View style={styles.fixToText}>
      <Button title="Clinic" onPress={() => navigation.navigate("Third")} color={"#000000"} />
      <Text> </Text>
      <Button title="Insurance" onPress={() => navigation.push("Fourth")} color={"#000000"}/>
      </View>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 12,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 40,
    backgroundColor: '#b6bcf6',
    padding: 10,
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    textAlign: 'center',
  },
  fixToText: {
    paddingTop: 40,
    flex: 2,
    padding: 100,
  },
  text: {
    color: 'white',
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
