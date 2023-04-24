import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AboutUs = ({ navigation }) => {
    const [show, setShow] = useState(false)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text>About Us !!!!</Text>
            </View>
            <View style={{ flexDirection: 'column', }}>
                {show && <View style={styles.container}>
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
        </SafeAreaView>);
}

export default AboutUs;
const styles = StyleSheet.create({
  profileStyle: { flex: 1, backgroundColor: '#ffffff', position: 'absolute', top: 624, left: 275, height: 60, alignItems: 'center', justifyContent: 'center', width: 120 },
  container: { borderWidth: 1, alignSelf: 'flex-end', position: 'absolute', top: 478, left: 280 },
  buttonStyle: { backgroundColor: 'blue', width: 110, height: 35, alignItems: 'center', justifyContent: 'center' }
})