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
        <ScrollView
          style={StyleSheet.container}
          keyboardShouldPersistTaps="handled"
        />
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
});
