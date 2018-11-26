import React, {Component} from 'react';
import {
  Text,
  View,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import UsersList from "./UsersList";
import UserDetails from "./UserDetails";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Nice to see you here!\n' +
    'Double tap R on your keyboard to reload,\n' +
    'Lets see if its working. ',
});

type Props = {};
export default class AppOld extends Component<Props> {

  constructor() {
    super();

    this.state = {
      value: '',
    }
  }

  onPressButton = () => {
    console.log('Button Pressed');
  };

  onChangeText = (value) => {
    this.setState({value});
  };

  render() {
    return(<View style={styles.container}>
      <View style={styles.container2}>
        <TouchableHighlight
          style={styles.block1}
          onPress={this.onPressButton}
          underlayColor='green'
        >
          <View>
            <Text style={styles.textBlock}> Users </Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity
          onPress={this.onPressButton.bind(this)}
          style={styles.block2}
        >
          <View>
            <Text style={styles.textBlock}> Block2 </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.block3}> Block3 </Text>

      </View>
      <Text style={styles.welcome}>Hello Welcome to Chiara's App!</Text>
      <Text style={styles.instructions}>{instructions}</Text>

      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={this.onChangeText}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.value}
        </Text>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //vertical align
    justifyContent: 'center',
    alignItems: 'center', //vertical align
    backgroundColor: '#F5FCFF',
  },
  container2: {
    flexDirection: 'row',
    height: 100,
  },
  block1: {
    backgroundColor: 'red',
    flex: 1,
    padding: 10,
  },
  textBlock: {
    color: 'white'
  },
  block2: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10,
    color: 'white'
  },
  block3: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    color: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



/*
render() {
    return (

    );
}*/
