import Button from "rax-button";
import View from "rax-view";
import Text from "rax-text";
import styles from "./index.css";
import { createElement, Component } from "rax";

function BoxButton(props) {
  const customStyle = {
    container: {
      width: props.width || 375,
      height: props.height || 100,
      lineHeight: props.lineHeight || 100
    }
  };
  return (
    <Button
      onPress={props.onPress}
      style={[styles.common, customStyle.container, props.style || {}]}
    >
      {props.children ? (
        props.children
      ) : (
        <View>
          <Text style={[styles.text, props.textStyle || {}]}>{props.text}</Text>
        </View>
      )}
    </Button>
  );
}

export default BoxButton;
