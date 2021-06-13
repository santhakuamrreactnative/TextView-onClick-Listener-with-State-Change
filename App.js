import React, {Component} from 'react';
import { Text, View} from 'react-native';

export default class App extends Component {
  state = {
    myState:'This is my Text Area'
  }

  updateState = () => this.setState({myState:'The state is updated'})

  render(){
    return(
      <View>
        <Text onPress={this.updateState}>
          {this.state.myState}
        </Text>
      </View>
    )
  }

}