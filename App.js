import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigators/DrawerNavigator';
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#f2058b'} />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>

  );
}


