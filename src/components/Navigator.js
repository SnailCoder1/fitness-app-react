import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IntroScreen from '../screens/IntroScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PasswordInputScreen from '../screens/PasswordInputScreen';

const StackNavigator = createStackNavigator(
  {
    onBoardScreen: {
      screen: IntroScreen,
    },
    RegisterScreen: RegisterScreen,
    LoginScreen: LoginScreen,
    PasswordInputScreen: PasswordInputScreen,
    // TouchAuthentication: TouchAuthentication,
    // SelectProfileScreen: SelectProfileScreen,
    // SetGoalScreen: SetGoalScreen,
    // CustomizeInterest: CustomizeInterest,
    // SelectGender: SelectGender,
  },
  {
    initialRouteName: 'LoginScreen',
    // initialRouteName: 'RegisterScreen',
    // initialRouteName: 'PasswordInputScreen',
  },
);

export default createAppContainer(StackNavigator);
