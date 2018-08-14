import TextInput from "rax-textinput";
import View from "rax-view";
import Text from "rax-text";
import styles from "./index.css";
import { createElement, Component } from "rax";

function BoxTextInput(props) {
  const customStyle = {
    container: {
      width: props.width || 375,
      height: props.height || 100,
      lineHeight: props.lineHeight || 100,
      fontSize: props.fontSize || 32,
    }
  };
  return (
    <TextInput
      value={props.value}
      placeholder={props.placeholder || ""}
      keyboardType={props.keyboardType || "default"}
      onChange={props.onChange}
      style={[styles.common, customStyle.container, props.style || {}]}
      {...props}
    />
  );
}

export default BoxTextInput;
