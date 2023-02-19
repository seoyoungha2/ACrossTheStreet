import { StatusBar, Pressable } from 'expo-status-bar';
import React , { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Btn from "./Btn";
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import {SearchBar} from 'react-native-elements';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class ThirdScreen extends React.Component {
  state = { search: '', };

  updateSearch = (search) => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Available Clinics
      </Text>
      <SearchBar
        placeholder="Search by services"
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={{backgroundColor: 'white'}}
        inputStyle={{backgroundColor: 'white'}}
        />

      <View style={styles.block}>
        <Text style = {styles.blackText}>
            Alameda Health Care for the Homeless{"\n"}
            384-14th Street{"\n"}
            Oakland, CA 94612-3208
        </Text>
      </View>
      <View style={styles.block}>
        <Text style = {styles.blackText}>
          Highland Hospital & Highland Wellness{"\n"}
          1411 E. 31st St.{"\n"}
          Oakland, CA 94602
        </Text>
      </View>
      <View style={styles.fixToText}>
      <Button title="Exit" onPress={() => navigation.navigate("Home")} color={"#000000"} />
      </View>
      
      {/*
      <Btn name="Yes"/>
      <Btn name="No" />
      */}
      <StatusBar style="auto"/>
    </View>
  );}
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 18,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 35,
    backgroundColor: '#b6bcf6',
    padding: 8,
  },
  paragraph: {
    margin: 18,
    fontSize: 18,
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
  blackText: {
    color: 'black',
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'left',
  },
  block: {
    width: 250,
    height: 80,
    backgroundColor: "#F8EBCB",
    margin: 35,
    borderRadius: 10,
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
