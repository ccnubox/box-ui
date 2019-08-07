import { createElement, Component, PropTypes } from "rax";
import Touchable from "rax-touchable";
import View from "rax-view";

import styles from "./index.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.fadeAnim = new Animated.Value(0);
  }

  static propTypes = {
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    visible: PropTypes.bool,
    top: PropTypes.number,
    width: PropTypes.number
  };

  static defaultProps = {
    visible: false,
    width: 550,
    top: 0
  };

  state = {
    visible: false
  };

  animated(state, callback) {
    const { visible, value } = state;
    Animated.timing(this.fadeAnim, { toValue: visible === true ? 1 : 0 }).start(
      callback
    );
  }

  show() {
    this.setState({
      visible: true
    });
  }

  hide() {
    this.setState({
      visible: false
    });
  }

  toggle(visible) {
    if (visible) {
      this.show();
    } else {
      this.hide();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.visible != this.props.visible &&
      nextProps.visible != this.state.visible
    ) {
      this.toggle(nextProps.visible);
    }
  }

  componentWillMount() {
    this.setState({
      visible: this.props.visible
    });
  }


  onMaskPress = () => {
    this.hide();
  };

  render() {
    const { children, top, width } = this.props;
    const { visible } = this.state;
    return (
      visible && (
        <Touchable onPress={this.onMaskPress} style={styles.container}>
          <View style={[styles.dropdown, { top, width }]}>
            <View>{children}</View>
          </View>
        </Touchable>
      )
    );
  }
}

export default Dropdown;
