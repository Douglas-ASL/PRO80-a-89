import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PostCard from '../components/PostCard';
import { fetchPostsFromDatabase } from './DatabaseManager'; // Importe a função para buscar os posts

class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    const posts = fetchPostsFromDatabase(); // Substitua pela função correta para buscar os posts
    this.setState({ posts });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.posts}
          renderItem={({ item }) => <PostCard post={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default FeedScreen;


