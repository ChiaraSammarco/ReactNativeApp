import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight} from 'react-native';

export default class UsersList extends Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    userDataSource: ds,
  };
}

componentDidMount(){
  this.fetchUsers();
}

fetchUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        userDataSource: this.state.userDataSource.cloneWithRows(response)
      });
    });
}

onPress(user){
  this.props.navigator.push({
    id: 'userdetails',
    user: user
  });
}

renderRow(user){
  return(
    <TouchableHighlight onPress={() => {this.onPress(user)}}>
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}: {user.email}</Text>
      </View>
    </TouchableHighlight>
        )
    }

    render(){
        return(
            <ListView
                dataSource={this.state.userDataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor:'black',
    height:50,
  },
  rowText: {
    color: 'white'
  },
});
