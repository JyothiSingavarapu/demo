import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Profile',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'About Us',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Some Other',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Pressable style={({pressed})=> [pressed ? styles.buttonPressed : null,]}>
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    </Pressable>
  </View>
);

const MyList = () => {
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
              height: 100,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              position: 'absolute', 
              bottom: 0, 
          }}>
            <View style={styles.container}>
                <FlatList 
                    data={DATA}
                    renderItem={({item}) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View> 
    
    </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
    position: 'absolute', 
  },
  item: {
    flex:1,
    height: 30,
    margin: 1,
    elevation: 4,
    backgroundColor: 'blue',
    padding: 1,
  },
  buttonPressed: {
    backgroundColor:'white',
  },
  itemInnerContainer:{
    flex:1,
  },
  title: {
    fontSize: 10,
    width:100,
  },
});

export default MyList;