import { Provider as PaperProvider } from 'react-native-paper'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './src/store/app/store'
import {Wall, Profile, Login} from './src/screens'
import 'react-native-gesture-handler'

const Drawer = createDrawerNavigator()

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name='Login' component={Login} />
            <Drawer.Screen name='Perfil' component={Profile} />
            <Drawer.Screen name='Incio' component={Wall} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App