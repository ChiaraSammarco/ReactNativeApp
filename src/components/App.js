import React, {Component} from 'react';

import {Navigator} from 'react-native-deprecated-custom-components';

import UsersList from "./UsersList";
import UserDetails from "./UserDetails";

export default class App extends Component {

  renderScene(route, navigator){
    switch(route.id){
      case 'userslist':
        return (<UsersList navigator={navigator} title="userslist" />);
      case 'userdetails':
        return (<UserDetails user={route.user} navigator={navigator} title="userdetails" />);
      }
  }

  render() {
    return(<Navigator
        initialRoute={{id: 'userslist'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
    />);
  }
}
