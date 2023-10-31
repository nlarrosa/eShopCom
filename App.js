import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigators/DrawerNavigator';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/providers/AuthProvider';
import { ProductProvider } from './src/providers/ProductProvider';
import { CartProvider } from './src/providers/CartProvider';


export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#f2058b'} />
      <AuthProvider>
        <CartProvider>
          <NavigationContainer>
            <ProductProvider>
              <DrawerNavigator />
            </ProductProvider>
          </NavigationContainer>
        </CartProvider>
      </AuthProvider>
    </>

  );
}


