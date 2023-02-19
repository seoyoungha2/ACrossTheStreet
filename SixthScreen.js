import { StatusBar, Pressable } from 'expo-status-bar';
import React , { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Btn from "./Btn";
import Constants from 'expo-constants';
import RNPickerSelect from "react-native-picker-select";
import {NavigationContainer} from '@react-navigation/native';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function SixthScreen({navigation}) {
  const [ status, setStatus ] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Results
      </Text>

      <Text style={styles.paragraph}> 
      You likely do not qualify for MediCal.
      </Text>

      <Text style={styles.paragraph2}> 
      Our assessment is not detailed, and discludes many factors, so feel free to still apply. If not, proceed to the next page for more options.
      </Text>

      <View style={styles.fixToText}>
      <Button title="Proceed" onPress={() => navigation.navigate("Seventh")} color={"#000000"} />
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
    paddingTop: Constants.statusBarHeight + 50,
    backgroundColor: '#b6bcf6',
    padding: 20,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph2: {
    margin: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  fixToText: {
    flex: 2,
    marginTop: 30,
    paddingHorizontal: 60,
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
    borderRadius: 2,
    color: 'black',
    backgroundColor: 'white',
  }
});
