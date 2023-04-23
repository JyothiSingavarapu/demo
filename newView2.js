import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';


getMenu2 = () => {
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
              height: 50,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              position: 'absolute', 
              bottom: 0, 
          }}>
          <View style={{
            backgroundColor:'green',
            height:'50%', 
            width:'50%'}}>
            <Text>opt1</Text>
          </View>
          <View style={{
            backgroundColor:'blue',
            height:'50%', 
            width:'50%'}}>
            <Text>opt2</Text>
          </View>
     </View>
    </View>
    </SafeAreaView>
  );
};
 

getMenu= (isVisible) => {
 if(isVisible){
   return getMenu2() ;
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

const ViewBoxesWithColorAndText = () => {
  return getMenu(true)
}

export default ViewBoxesWithColorAndText;