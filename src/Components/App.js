import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { fetchPosts } from '../actions/posts';
import Navbar from './Navbar';
import Home from './Home';
import Page404 from './Page404';
import Login from './Login';
import Signup from './Signup';
import * as jwtDecode from 'jwt-decode';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
   const token = localStorage.getItem('token');

   if (token) {
     const user = jwtDecode(token);

     console.log('user', user);
   }
  }

  render() {
    console.log('props', this.props);
    const { posts } = this.props;
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
