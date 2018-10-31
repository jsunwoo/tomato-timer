import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onPressed }) {
  return (
    <TouchableOpacity onPressOut={onPressed}>
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  );
}

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPressed: PropTypes.func.isRequired
};

export default Button;
