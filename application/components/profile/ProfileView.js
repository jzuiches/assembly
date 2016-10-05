import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../../styles/colors';
import { globals, profileStyles } from '../../styles';
// import { FakeUsers } from '../../fixtures';

const styles = profileStyles;


class ProfileView extends Component {
  render(){
    let { currentUser } = this.props;
    let titleConfig = {title: 'Profile', tintColor: 'white'};
    return (
      <View style={ [globals.flexContainer, globals.inactive] }>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
        />
          <ScrollView style={ globals.flex }>
            <View style={styles.flexRow}>
            <TouchableOpacity style={[globals.flexCenter, globals.pv1]}>
            <Image
            style={styles.avatar}
            source={require("../../assets/images/React.js_logo.svg.png")}
            />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <Text style={globals.h4}>
                {currentUser.firstName} {currentUser.lastName}
                </Text>
                <Text style={globals.h5}>
                {currentUser.location}, {currentUser.location}
                </Text>
            </View>
      </View>
      <TouchableOpacity style={styles.formButton}>
        <Text style={globals.h4}>
          My Trainings
        </Text>
        <Icon name='ios-arrow-forward' size={30} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.formButton}>
          <Text style={globals.h4}>
          Settings
          </Text>
          <Icon name='ios-arrow-forward' size={30} color='#ccc' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>
          Logout
          </Text>
        </TouchableOpacity>
        </ScrollView>
        </View>
    );
  }
};

export default ProfileView;
