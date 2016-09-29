import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';
import { TabBarItemIOS } from 'react-native-vector-icons/Ionicons';

import TrainingView from './activity/TrainingView';
import MessagesView from './messages/MessagesView';
import ProfileView from './profile/ProfileView';

class Dashboard extends Component{
  constructor(){
    super();
    this.state = {
      selectedTab: 'Training'
    }
  }

  render(){
    return (
    <TabBarIOS>
      <TabBarItemIOS
          title='Training Activity'
          iconName='ios-pulse'
          selected={this.state.selectedTab === "Training"}
          onPress={() => this.setState({ selectedTab: 'Training'})}
        >
        <TrainingView/>
        </TabBarItemIOS>

      <TabBarItemIOS
          title='Messages'
          iconName='ios-chatboxes'
          selected={this.state.selectedTab === 'Messages'}
          onPress={() => this.setState({ selectedTab: 'Messages'})}
        >
        <MessagesView/>
        </TabBarItemIOS>

      <TabBarItemIOS
         title='Profile'
         iconName='ios-person'
         selected={this.state.selectedTab === 'Profile'}
         onPress={() => this.setState({ selectedTab: 'Profile'})}
       >
       <ProfileView/>
       </TabBarItemIOS>

     </TabBarIOS>
    )
  }
}
export default Dashboard;
