import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class Btn extends React.Component {

  render() {
    return <View style={styles.btn}>
    <Button title={this.props.name} color={"#000000"} >
    </Button>
    </View>
  }  
}

const styles = StyleSheet.create({
  btn: {
    paddingTop: 35,
    fontSize: 30,
    margin: 20
  }
});