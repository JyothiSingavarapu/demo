import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

const BottomButton = ({ navigation,props }) => {
    const [show, setShow] = useState(false)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', }}>
                {show && <View style={{ borderWidth: 1, alignSelf: 'flex-end', position: 'absolute', top: 590, left: 290, height: 80 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('home1')}>
                        <Text>home1</Text>
                    </TouchableOpacity>
                    <View style={{ borderBottomWidth: 0.5 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('opt1')}>
                        <Text>opt1</Text>
                    </TouchableOpacity>
                    <View style={{ borderBottomWidth: 0.5 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('version')}>
                        <Text>version</Text>
                    </TouchableOpacity>
                    <View style={{ borderBottomWidth: 0.5 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('aboutUs')}>
                        <Text>aboutUs</Text>
                    </TouchableOpacity>
                </View>}
                <TouchableOpacity style={{ flex: 1, backgroundColor: 'red', position: 'absolute', top: 700, left: 300 }} onPress={() => setShow(!show)}>
                    <Text style={{ color: '#000000' }}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BottomButton;