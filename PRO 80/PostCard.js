import React from 'react';
import { View, Text, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

function PostCard({ post }) {
  return (
    <View>
      <View>
        <Image
          source={require('./path/to/profile-image.png')} // Substitua pelo caminho da imagem do perfil
          style={{
            width: RFValue(50),
            height: RFValue(50),
            borderRadius: RFValue(25),
          }}
        />
        <Text>{post.author}</Text>
      </View>
      <Image
        source={require('./path/to/post-image.png')} // Substitua pelo caminho da imagem da postagem
        style={{ width: '100%', height: RFValue(200) }}
      />
      <View>
        <Ionicons name="heart" size={RFValue(20)} color="red" />
        <Text>{post.caption}</Text>
      </View>
    </View>
  );
}

export default PostCard;
