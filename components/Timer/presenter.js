import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

class Timer extends Component {
  render() {
    const { isPlaying, elapsedTime, timerDuration } = this.props;
    console.log("Timer: ", this.props);
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>25:00</Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying ? (
            <Button
              iconName="play-circle"
              onPressed={() => alert("it works")}
            />
          ) : null}
          {isPlaying && (
            <Button
              iconName="stop-circle"
              onPressed={() => alert("it works")}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0824"
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    fontSize: 120,
    fontWeight: "200",
    color: "white"
  }
});

export default Timer;
