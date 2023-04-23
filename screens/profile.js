import React, { useState } from 'react';
//import {SafeAreaView, View, Text} from 'react-native';
//import FlatListBasics from '../ftlistView';
//import MyList from '../ftlistView2';

import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
  TouchableOpacity,
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
    title: 'Option 3',
  },
];

/*
getMenu= (isVisible) => {
 if(isVisible){
   return MyList() ;
 }else{
   return (
     <SafeAreaView style={{flex:1}}>
     <View>
       <Text>Hello</Text>
     </View>
     </SafeAreaView>
   ) 
  }
}
*/
const Item = ({ title }) => (
  <View style={styles.item}>
    <Pressable style={({ pressed }) => [pressed ? styles.buttonPressed : null,]}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  </View>
);

const ViewMenuWithColorAndText1 = ({ navigation }) => {
  const [show, setShow] = useState(false)
  function renderCategoryItem(itemData) {
    function pressHandler() {
      if (itemData.item.id === "c1") {
        navigation.navigate('opt1');
      } else if (itemData.item.id === "c2") {
        navigation.navigate('version');
      } else {
        navigation.navigate('aboutUs');
      }
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View
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
          <View style={styles.container}> */}
      {/* <FlatList 
                        //data={DATA}
                        data={CATEGORIES}
                        //renderItem={({item}) => <Item title={item.title} />}
                        renderItem={renderCategoryItem}
                        keyExtractor={item => item.id}
                    /> */}
      <View style={{ flexDirection: 'column', }}>
        {show && <View style={styles.containerStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('home1')} style={styles.buttonStyle}>
            <Text style={{ color: '#ffffff' }}>home1</Text>
          </TouchableOpacity>
          <View style={{ borderBottomWidth: 0.5 }} />
          <TouchableOpacity onPress={() => navigation.navigate('opt1')} style={styles.buttonStyle}>
            <Text style={{ color: '#ffffff' }}>opt1</Text>
          </TouchableOpacity>
          <View style={{ borderBottomWidth: 0.5 }} />
          <TouchableOpacity onPress={() => navigation.navigate('version')} style={styles.buttonStyle}>
            <Text style={{ color: '#ffffff' }}>version</Text>
          </TouchableOpacity>
          <View style={{ borderBottomWidth: 0.5 }} />
          <TouchableOpacity onPress={() => navigation.navigate('aboutUs')} style={styles.buttonStyle}>
            <Text style={{ color: '#ffffff' }}>aboutUs</Text>
          </TouchableOpacity>
        </View>}
        <TouchableOpacity style={styles.profileStyle} onPress={() => setShow(!show)}>
          <Text style={{ color: '#000000' }}>Profile</Text>
        </TouchableOpacity>
      </View>
      {/* </View>

        </View>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 60,
    position: 'absolute',
  },
  item: {
    flex: 1,
    height: 30,
    margin: 1,
    elevation: 4,
    backgroundColor: 'blue',
    padding: 1,
  },
  buttonPressed: {
    backgroundColor: 'white',
  },
  itemInnerContainer: {
    flex: 1,
  },
  title: {
    fontSize: 10,
    width: 100,
  },
  containerStyle: { borderWidth: 1, alignSelf: 'flex-end', position: 'absolute', top: 478, left: 280 },
  buttonStyle: { backgroundColor: 'blue', width: 110, height: 35, alignItems: 'center', justifyContent: 'center' },
  profileStyle: { flex: 1, backgroundColor: '#ffffff', position: 'absolute', top: 643, left: 275, height: 60, alignItems: 'center', justifyContent: 'center', width: 120 }
});

export default ViewMenuWithColorAndText1;