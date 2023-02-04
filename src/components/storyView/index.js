import {
  View,
  FlatList,
  Text,
  Image,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../storyView/styles';
import ProgressBand from '../progressBand';
import {storyData} from '../../utils/localeData';
import {normalize} from '../../utils/dimensions';
// import {SCREEN_HEIGHT, width} from '../../utils/dimensions';

const {width, height} = Dimensions.get('window');
const perspective = width;
const A = Math.atan(perspective / (width / 2));

export default class StoryView extends Component {
  /**
   * 1st in mounting phase
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      x: new Animated.Value(0),
    };
  }

  /**
   * 4th in mounting phase
   */
  componentDidMount() {}

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
  componentWillUnmount() {}

  getStyle = index => {
    const offsetX = width * index;
    const translatingX = this.state.x;
    const inputRange = [(offsetX - width) / 2, (offsetX * width) / 2];
    const translateX = translatingX.interpolate({
      inputRange,
      outputRange: [-width / 2, width / 2],
      extrapolate: 'clamp',
    });
    const rotateY = translatingX.interpolate({
      inputRange,
      outputRange: [`${A}rad`, `-${A}rad`],
      extrapolate: 'clamp',
    });
    const translateX1 = translatingX.interpolate({
      inputRange,
      outputRange: [-width / 2, width / 2],
      extrapolate: 'clamp',
    });
    return {
      // ...StyleSheet.absoluteFillObject,
      transform: [
        {perspective},
        {translateX},
        {rotateY},
        {translateX: translateX1},
      ],
    };
  };

  _renderItem = ({item, index}) => {
    this._updater(index);
    return (
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.headerContainerInner}>
            <Image source={{uri: item.profile}} style={styles.avatarStyle} />
            <Text style={styles.userNameStyle}>{item.username}</Text>
          </View>
        </View>
        <View>
          <Image source={{uri: item.profile}} style={styles.renderItemStyle} />
        </View>
      </View>
    );
  };

  /**
   *
   * @param {*} index
   * @returns
   */
  _updater = index => {
    console.log(storyData[index].stories);
    return storyData[index].stories.map(item => <ProgressBand width={100} />);
  };

  /**
   * 3rd in mounting and updating phase
   * won't be invoked if shouldComponentUpdate retuns false
   * @returns JSX
   */
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          pagingEnabled
          data={storyData}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
