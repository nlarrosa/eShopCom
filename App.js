import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView } from 'react-native';
// import { BoxModelObjectScreen } from './src/screens/ObjectModel/BoxModelObjectScreen';
// import { PositionModelScreen } from './src/screens/PositionModelScreen';
import { FlexBoxScreen } from './src/screens/ObjectModel/FlexBoxScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator } from './src/navigators/TabsNavigator';
// import { StackNavigator } from './src/navigators/StackNavigator';


export default function App() {
  return (
    <>
      {/* <FlexBoxScreen /> */}
      <NavigationContainer>
        {/* <StackNavigator /> */}
        <TabsNavigator />
      </NavigationContainer>
    </>

  );
}


