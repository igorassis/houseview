import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class HelloVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('imageHouse.jpg')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('HelloVR', () => HelloVR);
