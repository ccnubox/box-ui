import TextInput from "rax-textinput";
import View from "rax-view";
import Text from "rax-text";
import styles from "./index.css";
import { createElement, Component } from "rax";

function BoxTextInput(props) {
  return (
    <TextInput
      value={props.value}
      placeholder="Enter text to see events"
      onChange={props.onChangeHandler}
      style={styles.common}
    />
  );
}

export default BoxTextInput;
