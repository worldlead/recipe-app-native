import React from "react";
import { Pressable, Image, } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function BackButton(props) {
  return (
    <Pressable onPress={props.onPress} style={styles.btnContainer}>
      <Image source={require("../../assets/icons/backArrow.png")} style={styles.btnIcon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 180,
    paddingHorizontal: 12,
    paddingVertical: 16,
    margin: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  btnIcon: {
    height: 14,
    width: 14,
  },
});


BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
