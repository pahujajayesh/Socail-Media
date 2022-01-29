import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsList from './PostsList';
import { fetchPosts } from '../actions/posts';
class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('props', this.props);
    const { posts } = this.props;
    return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);
