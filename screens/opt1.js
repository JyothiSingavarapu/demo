import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Opt1 = ({navigation}) => {
  const [show, setShow] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Opt1 !!!!</Text>
      </View>
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
          <View style={{flexDirection: 'column'}}>
            {show && (
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('home1')}
                  style={styles.buttonStyle}>
                  <Text style={{color: '#ffffff'}}>home1</Text>
                </TouchableOpacity>
                <View style={{borderBottomWidth: 0.5}} />
                <TouchableOpacity
                  onPress={() => navigation.navigate('opt1')}
                  style={styles.buttonStyle}>
                  <Text style={{color: '#ffffff'}}>opt1</Text>
                </TouchableOpacity>
                <View style={{borderBottomWidth: 0.5}} />
                <TouchableOpacity
                  onPress={() => navigation.navigate('version')}
                  style={styles.buttonStyle}>
                  <Text style={{color: '#ffffff'}}>version</Text>
                </TouchableOpacity>
                <View style={{borderBottomWidth: 0.5}} />
                <TouchableOpacity
                  onPress={() => navigation.navigate('aboutUs')}
                  style={styles.buttonStyle}>
                  <Text style={{color: '#ffffff'}}>aboutUs</Text>
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity
              style={styles.profileStyle}
              onPress={() => setShow(!show)}>
              <Text style={{color: '#000000'}}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Opt1;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'blue',
    width: 110,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileStyle: {
    backgroundColor: '#ffffff',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 115,
  },
  container: {
    borderWidth: 1,
    alignSelf: 'flex-end',
  },
});
