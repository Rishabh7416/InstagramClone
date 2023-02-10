import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {BottomButton} from './bottomButtons';
import {CustomTextInput} from './customTxtInput';
import {TopBarSelectors} from './topBarSelectors';
import {apiCalling, searchApiCalling} from './apiCalling';
import {normalize} from '../src/utils/dimensions';
import {CustomList} from './customList';
import {useDispatch, useSelector} from 'react-redux';

/**
 *
 * Main
 */
export default React.memo(function Task() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loader, setLoader] = React.useState(false);
  const dispatch = useDispatch();
  const {productDetails} = useSelector(store => store.productDetailsReducer);

  const apiCall = React.useCallback(
    () =>
      dispatch(
        apiCalling(
          page,
          response => {
            // dispatch({type: 'PRODUCT_DETAILS', payload: response});
            setData([...data, ...response]);
            setLoader(false);
          },
          errorResponse => {
            setLoader(true);
          },
        ),
      ),
    [page],
  );

  React.useEffect(() => {
    apiCall();
  }, [page]);

  const _renderitem = React.useCallback(({item}) => {
    return (
      <CustomList
        productImg={item.images[0]}
        productPrice={item.price}
        productName={item.title}
        thumbnail={item.thumbnail}
        discount={item.discountPercentage}
      />
    );
  }, []);

  const _onEndReached = React.useCallback(() => {
    setLoader(true);
    setPage(prev => prev + 1);
  }, [page]);

  const _searchItem = text => {
    searchApiCalling(
      text,
      response => {
        setData(response);
      },
      errorResponse => {
        console.log(errorResponse);
      },
    );
  };

  const _listEmpty = () => {
    if (!loader) {
      return (
        <View style={styles.listEmptyStyle}>
          <Text style={styles.messageStyle}>{'No item found !'}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.mainContainer}>
      <CustomTextInput
        autoCorrect={false}
        autoComplete={false}
        placeholder={'Search'}
        autoCapitalize={false}
        onChangeText={text => _searchItem(text)}
      />
      <BottomButton />
      <FlatList
        data={data}
        numColumns={2}
        renderItem={_renderitem}
        onEndReachedThreshold={0.5}
        onEndReached={_onEndReached}
        ListEmptyComponent={_listEmpty}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={{paddingHorizontal: normalize(19.5)}}
        ListHeaderComponent={() => <TopBarSelectors />}
        stickyHeaderIndices={[0]}
        // maxToRenderPerBatch = {10}
      />
      {loader && (
        <ActivityIndicator
          size={'large'}
          animating={loader}
          style={styles.activityIndicate}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  activityIndicate: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#E7E7E8BF',
  },

  listEmptyStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  messageStyle: {
    fontSize: normalize(20),
    fontWeight: '600',
  },
});
