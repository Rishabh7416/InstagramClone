import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {normalize, vh} from '../src/utils/dimensions';

export const TopBarSelectors = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const topBar = ['Products', 'Collections', 'Stores', 'Tags'];
  const activeDataSet = index => {
    setCurrentIndex(index);
    // switch (index) {
    //   case 1:
    //   case 2:
    //   case 3:
    //   case 4:
    // }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topOptionSelector}>
        {topBar.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => activeDataSet(index)}
              style={{height: normalize(40)}}>
              <Text
                style={{
                  fontSize: normalize(16),
                  fontWeight: '600',
                  color: currentIndex === index ? 'black' : 'grey',
                }}>
                {item}
              </Text>
              {currentIndex == index ? <View style={styles.dotStyle} /> : null}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  topOptionSelector: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: normalize(15),
    alignItems: 'center',
    marginBottom: normalize(20),
    backgroundColor: 'white',
  },

  dotStyle: {
    marginTop: normalize(10),
    borderRadius: normalize(50),
    borderWidth: 1,
    height: normalize(5),
    width: normalize(5),
    backgroundColor: 'black',
    alignSelf: 'center',
  },
});
