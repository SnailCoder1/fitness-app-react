import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IntroScreen from '../screens/IntroScreen';
import LoginScreen from '../screens/LoginScreen';
// import EmailInputScreen from '../screens/EmailInputScreen';
// import PasswordInputScreen from '../screens/PasswordInputScreen';

const StackNavigator = createStackNavigator(
  {
    onBoardScreen: {
      screen: IntroScreen,
    },
    // EmailInputScreen: EmailInputScreen,
    LoginScreen: LoginScreen,
    // TouchAuthentication: TouchAuthentication,
    // PasswordInputScreen: PasswordInputScreen,
    // SelectProfileScreen: SelectProfileScreen,
    // SetGoalScreen: SetGoalScreen,
    // CustomizeInterest: CustomizeInterest,
    // SelectGender: SelectGender,
  },
  {
    initialRouteName: 'LoginScreen',
  }
);

export default createAppContainer(StackNavigator);
