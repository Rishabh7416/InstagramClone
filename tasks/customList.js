import React from 'react';
import {ProductDetails} from './productDetails';
import {normalize, vh} from '../src/utils/dimensions';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';

export const CustomList = React.memo(({...props}) => {
  const [loader, setLoader] = React.useState(false);

  const convertion = () => {
    const number = parseFloat(`${props.discount}%`) / 100;
    // console.log(props.productName, props.discount - number);
  };

  React.useEffect(() => {
    convertion();
  }, []);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.customListContainer}>
        <Image
          source={{uri: props.productImg}}
          style={styles.customListImgStyle}
          onLoadEnd={() => setLoader(false)}
          onLoadStart={() => setLoader(true)}
        />
      </View>
      <ProductDetails
        productPrice={props.productPrice}
        productName={props.productName}
        discountPrice={props.discount}
      />
      {loader && (
        <ActivityIndicator
          animating={loader}
          size={'small'}
          style={styles.activityIndicatorStyle}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  customListContainer: {
    backgroundColor: '#E7E7E8BF',
    height: vh(198),
    borderRadius: normalize(10),
  },
  cardContainer: {
    marginHorizontal: normalize(4),
    marginBottom: normalize(16),
    flex: 1,
    justifyContent: 'center',
    width: '48.6%',
  },

  customListImgStyle: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },

  customTextInputStyle: {
    paddingHorizontal: normalize(10),
    height: normalize(50),
    width: '87%',
    alignSelf: 'center',
    borderRadius: normalize(12),
    backgroundColor: '#F3F3F3',
  },

  activityIndicatorStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
