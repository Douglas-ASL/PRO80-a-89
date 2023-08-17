import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_id: this.props.post.key,
      post_data: this.props.post.value,
    };
  }

  render() {
    // Renderização do componente StoryCard
  }
}

export default StoryCard;
