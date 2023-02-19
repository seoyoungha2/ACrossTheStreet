import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import RNPickerSelect from "react-native-picker-select";
import { Text, View, Image, StyleSheet, Button, Pressable } from 'react-native';
import {Picker} from "@react-native-community/picker";
import Btn from "./Btn";
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



export default function HomeScreen({navigation}) {
  const [ language, setLanguage ] = useState("");
  return (
    <View style={styles.container}>
      <Image source={require("./assets/NewLogo.png")} style={styles.logo}/>
      <Text style={styles.header}>
        A-Cross the Street
      </Text>
      <Text style={styles.paragraph}>
        Healthcare is just a-cross the street!
      </Text>
      
      
      <RNPickerSelect placeholder={{label: "Select a language", value:""}} style={styles.input}
                
                 onValueChange={(language) => setLanguage(language)}
                 items={[
                     { label: "English", value: "English" },
                     { label: "French", value: "French" },
                     { label: "Hindi", value: "Hindi" },
                     { label: "Telugu", value: "Telugu" },
                     { label: "Tamil", value: "Tamil" },
                     { label: "Korean", value: "Korean" },
                 ]}
      />
      
      
      
      {/*
      <Picker
        //selectedValue={selectedValue}
        style={styles.input} mode="dropdown"
        onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
      >
        <Picker.Item label="English" value="English" />
        <Picker.Item label="Spanish" value="Spanish" />
        <Picker.Item label="French" value="French" />
        <Picker.Item label="Hindi" value="Hindi" />
        <Picker.Item label="Korean" value="Korean" />
        <Picker.Item label="Tamil" value="Tamil" />
      </Picker>
      */}
      
      {/*
      <Button title="Go" onPress={() => navigation.navigate("Second")} style={styles.btn}>
      
      </Button>
      */}
      
      
      <Pressable onPress={() => navigation.navigate("Second", {language: 'English'})} style={styles.btn} >
      <Text style={styles.text}> Go </Text>
    </Pressable>
    
    
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
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#b6bcf6',
    padding: 20,

  },
  paragraph: {
    margin: 18,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    display: 'block',
    //margin-left: 'auto',
    height: 170,
    width: 180,

  },
  text: {
    color: 'white',
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  input: {
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    color: 'black',
    backgroundColor: 'white',
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
