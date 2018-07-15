import View from "rax-view";
import Text from "rax-text";
import Image from "rax-image";
import Touchable from "rax-touchable";
import styles from "./index.css";
import request from "../../util/request";
import { createElement, Component } from "rax";

class Notification extends Component {
  state = {
    text: "xxx",
    show: true
  };
  componentWillMount() {
    request({
      method: "GET",
      url: "xxxx"
    })
      .then(data => {
        this.setState({
          text: data
        });
      })
      .catch(err => {
        //
      });
  }
  hide = () => {
    this.setState({
      show: false
    });
  };
  render() {
    if (this.state.text === "" || !this.state.show) return null;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.text}</Text>
        <Touchable onPress={this.hide}>
          <Text style={styles.text}>关闭</Text>
        </Touchable>
      </View>
    );
  }
}

export default Notification;
