import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as tomatoActions } from "../../reducer";
import Timer from "./presenter";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimerX: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimerX: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecondX: bindActionCreators(tomatoActions.addSecond, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
