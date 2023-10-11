import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView } from 'react-native';
// import { BoxModelObjectScreen } from './src/screens/ObjectModel/BoxModelObjectScreen';
// import { PositionModelScreen } from './src/screens/PositionModelScreen';
// import { FlexBoxScreen } from './src/screens/ObjectModel/FlexBoxScreen';
// import { StackNavigator } from './src/navigators/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
// import { TabsNavigator } from './src/navigators/TabsNavigator';
import { DrawerNavigator } from './src/navigators/DrawerNavigator';


export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <FlexBoxScreen /> */}
        {/* <StackNavigator /> */}
        {/* <TabsNavigator /> */}
        <DrawerNavigator />
      </NavigationContainer>
    </>

  );
}


