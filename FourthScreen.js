import { StatusBar, Pressable } from 'expo-status-bar';
import React , { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Btn from "./Btn";
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function FourthScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Proceed to the next step to see if you qualify for Medical.
      </Text>

      <View style={styles.fixToText}>
      <Button title="Proceed" onPress={() => navigation.navigate("Fifth")} color={"#000000"} />
      
      </View>

      <Text style={styles.paragraph}>
        Only skip if you know that you do not qualify for Medical.
      </Text>
      <View style={styles.fixToText}>
      <Button title="Skip" onPress={() => navigation.navigate("Seventh")} color={"#000000"} />
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
    margin: 10,
    paddingTop: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 30,
    backgroundColor: '#b6bcf6',
    padding: 18,
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fixToText: {
    paddingTop: 30,
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
  btn: {
    alignSelf: 'center',
    fontSize: 30,
    margin: 20,
    backgroundColor: "#000000",
    height: 40, 
    width: 60,
    color: 'white',
    textAlign: 'center',
    borderRadius: 5,
  },
});
