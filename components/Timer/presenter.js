import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  time -= minutes * 60;
  // 뒤에 10은 10 진수를 의미
  let seconds = parseInt(time % 60, 10);
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    // console.log(`currentProps: ${currentProps.isPlaying} and nextProps: ${nextProps.isPlaying}`);
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecondX();
      }, 1000);
      console.log("timerInterval: ", timerInterval);
      this.setState({
        timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      console.log("this.state: ", this.state);
      clearInterval(this.state.timerInterval);
    }
  }

  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimerX,
      restartTimerX,
      addSecondX
    } = this.props;
    console.log("this.props: ", this.props);
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.lower}>
          // 조건검사는 ? 를 쓸수도 잇고 아래의 방법으로도 할수있다.
          {!isPlaying ? (
            <Button iconName="play-circle" onPressed={() => startTimerX()} />
          ) : null}
          {isPlaying && (
            <Button iconName="stop-circle" onPressed={() => restartTimerX()} />
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
