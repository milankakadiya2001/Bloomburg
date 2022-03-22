import {StyleSheet, Text, SegmentedControlIOS, View} from 'react-native';
import React, {useState} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import ProfileBlooms from './ProfileBlooms'
import ProfileChalange from './ProfileChalange';
import ProfileVideos from './ProfileVideos';
import ProfileRewards from './ProfileRewards';


const MyProfileTab = () => {
  const [singleIndex, setSingleIndex] = useState(0);
  const updateSingleSegment = index => {
    setSingleIndex(index);
  };

   
  return (
    <View>
      <View style={styles.container}>
        <SegmentedControlTab
          values={['My Blooms', 'Challenges', 'Video', 'Rewards']}
          selectedIndex={singleIndex}
          tabStyle={styles.tabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabStyle={{backgroundColor: '#2C5F2D'}}
          onTabPress={updateSingleSegment}
          borderRadius={15}
        />
      </View>
      {singleIndex==0 ? <ProfileBlooms/> : null}
      {singleIndex==1 ? <ProfileChalange/> : null}
      {singleIndex==2 ? <ProfileVideos/> : null}
      {singleIndex==3 ? <ProfileRewards/> : null}

    </View>
  );
};

export default MyProfileTab;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  activeTabStyle: {
    backgroundColor: '#2C5F2D',
    fontSize: 16,
    borderRadius: 15
  },
  tabStyle: {
    backgroundColor: '#BBBBBB4F',
    fontSize: 16,
    borderWidth: 0, 
    fontWeight: '800'   
  },
  text: {
    fontSize: 24,
  },
  tabTextStyle:{
    color: '#7A7A7A',
    margin: 3
  }
});
