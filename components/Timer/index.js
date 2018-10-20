import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>25:00</Text>
        </View>
        <View>
          <Text>BUTTONS HERE</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  upper: {},
  lower: {}
});

export default Timer;
