import View from "rax-view";
import Text from "rax-text";
import Image from "rax-image";
import Touchable from "rax-touchable";
import styles from "./index.css";
import request from "../../util/request";
import { createElement, Component } from "rax";
const native = require("@weex-module/test");

class Notification extends Component {
  state = {
    text: "",
    show: false,
    type: "alert", // alert/link
    btnText: "关闭",
    link: ""
  };
  componentWillMount() {
    request({
      method: "GET",
      url: `https://ccnubox.muxixyz.com/api/msg/?os=ios&page=${
        this.props.pageId
      }`
    })
      .then(data => {
        this.setState({
          type: data.version || "alert",
          btnText: data.time || "关闭",
          link: data.detail || "",
          text: data.msg,
          show: true
        });
      })
      .catch(err => {});
  }
  onBtnPressed = () => {
    if (this.state.type === "alert") {
      this.setState({
        show: false
      });
    } else if (this.state.type === "link") {
      native.push(this.state.link);
    }
  };
  render() {
    if (this.state.text === "" || !this.state.show) return null;
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={styles.text}>{this.state.text}</Text>
        <Touchable onPress={this.onBtnPressed}>
          <Text style={styles.text}>{this.state.btnText}</Text>
        </Touchable>
      </View>
    );
  }
}

export default Notification;