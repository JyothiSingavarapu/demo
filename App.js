import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import ViewBoxesWithColorAndText from './newView2'
//import ViewMenuWithColorAndText from './newView3'
import ViewMenuWithColorAndText1 from './screens/profile';
import MoreProfile from './screens/moreProfile';
import AboutUs from './screens/aboutus';
import Opt1 from './screens/opt1';
import Version from './screens/version';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Matches from './screens/matches';
import Specialties from './screens/specialties';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


function MatchesStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name='Matchess' component={Matches} options={{ headerShown: false }} />
      <Stack.Screen name='home1' component={ViewMenuWithColorAndText1} />
      <Stack.Screen name='opt1' component={Opt1} />
      <Stack.Screen name='version' component={Version} />
      <Stack.Screen name='aboutUs' component={AboutUs} />
    </Stack.Navigator>
  );
}
function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Specialitiess' component={Specialties} />
      <Stack.Screen name='home1' component={ViewMenuWithColorAndText1} />
      <Stack.Screen name='opt1' component={Opt1} />
      <Stack.Screen name='version' component={Version} />
      <Stack.Screen name='aboutUs' component={AboutUs} />
    </Stack.Navigator>
  );
}


//<Stack.Screen name='profile' component={ViewMenuWithColorAndText1}/>
export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{ tabBarStyle: styles.tabBarSty }}>
        <BottomTab.Screen name="matches" component={MatchesStack} options={{ headerShown: false }} />
        <BottomTab.Screen name="specialties" component={Home} options={{ headerShown: false }} />
        {/* <BottomTab.Screen name="profile" component={Home} options={{ headerShown: false }} /> */}
      </BottomTab.Navigator>
    </NavigationContainer>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 5,
  },
  tabBarSty: { position: 'absolute', width: 280, height: 60 }
})