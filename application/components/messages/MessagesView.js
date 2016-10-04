import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ListView
} from 'react-native';

import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../../styles/colors';
import { globals, messagesStyles } from '../../styles';
import { find, isEqual } from 'underscore';
import { FakeConversations, FakeUsers, currentUser } from '../../fixtures';
import { rowHasChanged } from '../../utilities';
const styles = messagesStyles;


class Conversations extends Component {
  constructor(){
    super();
    this._renderRow = this._renderRow.bind(this);
    this.dataSource = this.dataSource.bind(this);
  }

  _renderRow(conversation){
    //conversation is FakeMessages object that has two users the user 1 is
    //the one sending the message and user 2 is recieving the message. For all of these
    //user two is currentUser. The first variable is plucking the two user ids and
    //making an array
    //next find other user which in the array is not equal to current user
    //so otherUser is sending the message
    //then go into the Fake users array and find which user has the same id as the
    //one you just found in the userIDs array
    //this uses the underscore function find instead of iterating

    let userIDs = [conversation.user1Id, conversation.user2Id];
    let otherUserID = find(userIDs, (id) => !isEqual(id, currentUser.id));
    let user = find(FakeUsers, ({ id }) => isEqual(id, otherUserID));
    return (
      <TouchableOpacity style={globals.flexContainer}>
        <View style={globals.flexRow}>
          <Image
            style={globals.avatar}
            source={{uri:user.avatar}}
          />
            <View style={globals.flex}>
            <View style={globals.textContainer}>
            <Text style={styles.h5}>
              {user.firstName} {user.lastName}
            </Text>
            <Text style={styles.h6}>
              {moment(conversation.lastMessageDate).fromNow()}
            </Text>
            </View>
            <Text style={styles.h4}>
              {conversation.lastMessageText.substring(0,40)}...
              </Text>
            </View>
            <View style={styles.arrowContainer}>
              <Icon
              size={30}
              name="ios-arrow-forward"
              color={Colors.bodyTextLight}
              />
            </View>
            </View>
        <View style={styles.divider}/>
      </TouchableOpacity>
    )
  }

  dataSource(){
    return (
      new ListView.DataSource({
        rowHasChanged: rowHasChanged})
      .cloneWithRows(FakeConversations)
    );
  }


  render(){
    let titleConfig = {title: 'Messages', tintColor: 'white'};
    return (
      <View style={ globals.flexContainer }>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
        />
          <ListView
            dataSource={this.dataSource()}
            contentInset={{ bottom: 49 }}
            renderRow={this._renderRow}
            />
      </View>

    );
  }
}

export default Conversations;
