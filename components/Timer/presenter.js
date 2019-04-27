import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    console.log(`currentProps: ${currentProps.isPlaying} and nextProps: ${nextProps.isPlaying}`);
  }

  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer
    } = this.props;
    console.log("this.props: ", this.props);
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>25:00</Text>
        </View>
        <View style={styles.lower}>
          // 조건검사는 ? 를 쓸수도 잇고 아래의 방법으로도 할수있다.
          {!isPlaying ? (
            <Button iconName="play-circle" onPressed={() => startTimer()} />
          ) : null}
          {isPlaying && (
            <Button iconName="stop-circle" onPressed={() => restartTimer()} />
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
