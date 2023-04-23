import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import FlatListBasics from './ftlistView';
import MyList from './ftlistView2';
 

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

const ViewMenuWithColorAndText = () => {
  return getMenu(true)
}

export default ViewMenuWithColorAndText;