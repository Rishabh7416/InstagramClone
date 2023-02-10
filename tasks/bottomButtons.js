import {normalize, vh, vw} from '../src/utils/dimensions';
import React from 'react';
import {TouchableOpacity, Image, FlatList, StyleSheet} from 'react-native';
import localimages from '../src/utils/localimages';

export const BottomButton = ({...props}) => {
  const _renderitem = ({item}) => (
    <TouchableOpacity
      style={styles.buttonIconContainer}
      onPress={props.onPress}>
      <Image source={item.icon} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={[
        {icon: localimages.eComSearchIcon},
        {icon: localimages.eComCategoryIcon},
        {icon: localimages.eComFilterIcon},
      ]}
      renderItem={_renderitem}
      horizontal
      bounces={false}
      style={styles.flatlistStyle}
      contentContainerStyle={styles.flatlistContentStyle}
      keyExtractor = {(item, index) => index}
    />
  );
};

const styles = StyleSheet.create({
  flatlistStyle: {
    position: 'absolute',
    bottom: normalize(10),
    zIndex: 1,
    alignSelf: 'center',
    width: '56.5%',
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(8),
    backgroundColor: '#E7E7E8BF',
    borderRadius: normalize(20),
  },

  flatlistContentStyle: {
    justifyContent: 'space-between',
    width: '100%',
  },
});
