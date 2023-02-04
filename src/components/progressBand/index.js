import React, {Component} from 'react';
import {styles} from '../progressBand/styles';
import {View, Animated} from 'react-native';
import {SCREEN_WIDTH} from '../../utils/dimensions';

export default class ProgressBand extends Component {
  /**
   * 1st in mounting phase
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {track: 0};
    this.animationRef = new Animated.Value(0);
    this.duration = 100;
  }

  /**
   * 2nd in mounting phase
   * 1st in updating phase
   * @param {*} props
   * @param {*} state
   * @returns default {}
   */
  static getDerivedStateFromProps(props, state) {
    return {};
  }

  /**
   * 4th in mounting phase
   */
  componentDidMount() {
    this.animatingPogressStatus();
  }

  /**
   * 5th in updating phase
   * Don't setState causes infinite loop
   * setState after comparing previous !== props
   * won't be invoked if shouldComponentUpdate retuns false
   * @param {*} previousProps
   * @param {*} previousState
   * @param {*} snapShot
   */
  componentDidUpdate(previousProps, previousState, snapShot) {}

  /**
   *
   * @param {*} nextProps
   * @param {*} nextState
   * @returns true invokes componentDidUpdate, render and getSnapshotBeforeUpdate & false -> vice-versa
   */
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  /**
   * 4th in updating phase
   * won't be invoked if shouldComponentUpdate retuns false
   * @param {*} previousProps
   * @param {*} previousState
   * @returns default null
   */
  getSnapshotBeforeUpdate(previousProps, previousState) {
    return null;
  }

  /**
   * 1st in unmounting phase
   */
  componentWillUnmount() {
    this.animationRef.removeAllListeners();
  }

  /**
   * update state and animations
   */
  animatingPogressStatus = () => {
    this.animationRef.addListener(({value}) =>
      this.setState({track: Math.floor(value)}),
    );
    Animated.timing(this.animationRef, {
      toValue: this.props.width,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  };

  /**
   * 3rd in mounting and updating phase
   * won't be invoked if shouldComponentUpdate retuns false
   * @returns JSX
   */
  render() {
    return (
      <View style={styles.container} key = {this.props.index}>
        <Animated.View
          style={[styles.progressBaar, {width: this.state.track}]}
          key={this.props.index}
        />
      </View>
    );
  }
}
