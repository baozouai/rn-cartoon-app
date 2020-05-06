import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import RootPage from './pages/root-page';

const AppStack = createStackNavigator(
  {
    RootPage: {
      screen: RootPage,
      navigationOptions: {
        headerShown: false,
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(AppStack);