import React from 'react';
import {FlatList, View} from 'react-native';
import Story from '../../components/story';
import {storyData} from '../../utils/localeData';
import CustomHomeCard from '../../components/customHomeCard';

export default function HomeScreen() {
  const _renderItem = ({item}) => <CustomHomeCard item={item} />;
  const _listHeader = () => <Story />;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={storyData}
        renderItem={_renderItem}
        ListHeaderComponent={_listHeader}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
