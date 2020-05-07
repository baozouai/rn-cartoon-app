GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import RootPage from './pages/root-page';
import Brief from './pages/brief';
const AppStack = createStackNavigator(
  {
    RootPage: {
      screen: RootPage,
      navigationOptions: {
        headerShown: false,
      }
    },
    Brief: {
      screen: Brief,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(AppStack);