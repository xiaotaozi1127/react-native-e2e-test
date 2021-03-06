import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class E2ETest extends Component {
  state = {
    counter: 0
  }

  onPress = () => this.setState({ counter: this.state.counter + 1 })

  render() {
    return (
      <View style={styles.container} accessibilityLabel="testview">
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

        <Text accessibilityLabel="counter">{this.state.counter}</Text>
        <Button onPress={this.onPress} title="Press me" accessibilityLabel="button" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  button: {
    width: 200,
    height: 200,
  },
  space: {
    marginTop: 1000
  },
});
