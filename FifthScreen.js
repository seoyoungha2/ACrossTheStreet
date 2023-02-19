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

income = 0;
family = 0;
age = 1;


export default function FifthScreen({navigation}) {
  const [ status, setStatus ] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Immigration Status:
      </Text>

      <View style={styles.fixToText}>
      <RNPickerSelect placeholder={{label: "Select a status", value:""}} style={styles.input}
                
                 onValueChange={(status) => setStatus(status)}
                 items={[{ label: "Lawfully Present", value: "Lawfully Present" },
                        { label: "Not Lawfully Present", value: "Not Lawfully Present" },
                  ]}
      />

      <Text style={styles.header}>
        Estimated Yearly Income:
      </Text>
      <TextInput 
        placeholder={'Enter income here'}
        style={styles.input}
      />

      <Text style={styles.header}>
        Family Size:
      </Text>
      <TextInput 
        placeholder={'Enter family size'}
        style={styles.input}
      />

      <Text style={styles.header}>
        Your Age:
      </Text>
      <TextInput 
        placeholder={'Enter your age'}
        style={styles.input}
      />
      </View>

      <View style={styles.fixToText2}>
      <Button title="Proceed" onPress={() => navigation.navigate("Sixth")} color={"#000000"} />
      </View>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 12,
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
    flex: 2,
    marginTop: 2,
    paddingHorizontal: 30,
  },
  fixToText2: {
    flex: 2,
    paddingTop: 280,
    paddingHorizontal: 40,
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
  input: {
    alignSelf: 'center',
    padding: 10,
    borderRadius: 2,
    color: 'black',
    backgroundColor: 'white',
  }
});
