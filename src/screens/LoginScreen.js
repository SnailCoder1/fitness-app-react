import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Text, Icon, Input, Button, SocialIcon} from 'react-native-elements';

export default class LoginScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <KeyboardAvoidingView behavior={'padding'} enabled>
        <View style={styles.headerContainer}>
          <Icon name="md-fitness" size={80} type="ionicon" color={'#7265E2'} />
        </View>
        <View style={styles.wrapper}>
          <Input
            leftIcon={
              <Icon
                name="email-outline"
                type="material-community"
                color="rgba(110, 120, 170, 1)"
                size={25}
              />
            }
            placeholder="Email"
            inputContainerStyle={styles.input}
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <Input
            leftIcon={
              <Icon
                name="lock"
                type="simple-line-icon"
                color="rgba(110, 120, 170, 1)"
                size={25}
              />
            }
            inputContainerStyle={styles.input}
            placeholderTextColor="grey"
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
          />

          <ScrollView
            style={StyleSheet.container}
            keyboardShouldPersistTaps="handled"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F6FA',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderLeftWidth: 0,
    height: 50,
    backgroundColor: 'white',
    marginBottom: 20,
  },
});
