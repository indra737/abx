import React, { Component } from 'react';
import { Button, View, Text,Alert } from 'react-native';

class Gbutton extends Component{
  render(){
    return(
       <View style={{marginTop:20 , marginLeft:60,width:200,borderWidth:5, borderRadius:10}}>
        <Button title="My First App" color="green" ></Button>
        </View>
    );
  }
}

class BButton extends Component{
  render(){
    return(
    <View style={{marginTop:20, marginLeft:60, width:200, borderWidth:5, borderRadius:10}}>
    <Button title="My Second Button" color="blue"></Button>
    </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{  marginTop:30}}>
      <View>
      <Text style={{backgroundColor:'lightgreen'}}>Hello!</Text>
      </View>
     <Gbutton/>
     <BButton/>
        </View>
    );
  }
}