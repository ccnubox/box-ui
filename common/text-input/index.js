import TextInput from "rax-textinput";
import View from "rax-view";
import Text from "rax-text";
import styles from "./index.css";
import { createElement, Component } from "rax";

function BoxTextInput(props) {
  const customStyle = {
    container: {
      width: props.width || 375,
      height: props.height || 100
    }
  };
  return (
    <TextInput
      value={props.value}
      placeholder={props.placeholder || ""}
      onChange={props.onChangeHandler}
      style={[styles.common, customStyle.container]}
    />
  );
}

export default BoxTextInput;
