import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onPress }) {
  return (
    <TouchableOpacity>
      <FontAwesome name={iconName} size={40} color="white" />
    </TouchableOpacity>
  );
}

export default Button;
