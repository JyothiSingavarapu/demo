import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View
      style={{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      }}>
          <View
            style={{
              width: '50%',
              height: 160,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              position: 'absolute', 
              bottom: 0, 
          }}>
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Profile'},
          {key: 'About Me'},
          {key: 'Other Items'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
    </View>
    </View>
    </SafeAreaView>
  );
};

export default FlatListBasics;