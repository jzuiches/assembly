import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
 } from 'react-native';

import { landingStyles } from '../styles';
import Colors from '../styles/colors';
import { globals } from '../styles';

const styles = landingStyles;

class Landing extends Component{

  constructor(){
    super();
    this.visitLogin = this.visitLogin.bind(this);
    this.visitRegister = this.visitRegister.bind(this);
  }
  visitLogin(){
    this.props.navigator.push({
      name: 'Login'
    });
  }
  visitRegister(){
    this.props.navigator.push({
      name: 'Register'
    });
  }
  render(){
    return(
      <View style={styles.container}>
  
        <View style={globals.flexCenter}>
        <Image
          style={styles.logo}
          source={require('../assets/images/Cross-Pattee-Heraldry.svg.png')}
        />
        <Text style={[globals.lightText, globals.h2, globals.mb2]}>
        SVSP
        </Text>
        <Text style={[globals.lightText, globals.h4]}>
          Training Log
        </Text>
      </View>
      <TouchableOpacity
         style={[globals.button, globals.inactive, styles.loginButton]}
         onPress={this.visitLogin}
       >
         <Icon name='lock' size={36} color={Colors.brandPrimary} />
         <Text style={globals.buttonText, globals.primaryText}>
           Login
         </Text>
       </TouchableOpacity>
       <TouchableOpacity
          style={globals.button}
          onPress={this.visitRegister}
        >
            <Icon name='person' size={36} color='white' />
            <Text style={globals.buttonText}>
            Create an Account
            </Text>
            </TouchableOpacity>
      </View>
    )
  }
}

export default Landing;
