import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import User from './pages/User';
import Main from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#715',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
