import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {normalize, vh} from '../src/utils/dimensions';

export const ProductDetails = ({productName, productPrice, discountPrice}) => {
  const convertion = () => {
    return parseFloat(`${discountPrice}%`) / 100;
  };

  const discountedPrice = convertion();
  return (
    <View style={styles.productDetailContainer}>
      <Text style={styles.productDetailNameStyle}>{productName}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={[
            styles.productDetailPricseStyle,
            {textDecorationLine: 'line-through'},
          ]}>{`$${productPrice}`}</Text>
        <Text
          style={[
            styles.productDetailPriceStyle,
            {fontWeight: 'bold', color: 'red'},
          ]}>{`$${parseFloat(productPrice - discountedPrice)}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productDetailContainer: {
    marginTop: normalize(12),
    justifyContent: 'space-between',
    // borderWidth: 1,
    maxWidth: vh(140),
  },

  productDetailNameStyle: {
    fontSize: normalize(14),
    fontWeight: '400',
    letterSpacing: 0.8,
    lineHeight: normalize(26),
    marginVertical: normalize(4),
  },

  productDetailPriceStyle: {
    marginLeft: normalize(8),
    fontSize: normalize(14),
    fontWeight: '400',
    color: 'black',
    letterSpacing: 0.8,
  },
});
