import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IntroScreen from '../screens/IntroScreen';
// import LoginScreen from '../screens/LoginScreen';
// import EmailInputScreen from '../screens/EmailInputScreen';
// import PasswordInputScreen from '../screens/PasswordInputScreen';

const StackNavigator = createStackNavigator({
  IntroScreen: IntroScreen,
  // LoginScreen: LoginScreen,
  // EmailInputScreen: EmailInputScreen,
  // PasswordInputScreen: PasswordInputScreen,
});

export default createAppContainer(StackNavigator);
