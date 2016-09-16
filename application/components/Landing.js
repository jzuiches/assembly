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


const BackgroundImage = 'https://s3-us-west-2.amazonaws.com/assembliesapp/welcome%402x.png';
const Logo = 'https://s3-us-west-2.amazonaws.com/assembliesapp/logo.png';
const styles = landingStyles;

class Landing extends Component{

  constructor(){
    super();
    this.visitDashboard = this.visitDashboard.bind(this);
  }
  visitDashboard(){
    this.props.navigator.push({
      name: 'Dashboard'
    });
  }

  render(){

    return(
      <View style={styles.container}>
      <View style={styles.container}>

      </View>
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
         style={globals.button}
         onPress={this.visitDashboard}
       >
         <Icon name='person' size={36} color='white' />
         <Text style={globals.buttonText}>
           Go to Training Divisions
         </Text>
       </TouchableOpacity>

      </View>
    )
  }
}

export default Landing;
