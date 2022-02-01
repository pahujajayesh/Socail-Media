import React, { Component } from 'react';
class UserProfile extends Component {
    componentDidMount() {
      const{match}=this.props;
      if(match.params.userId){
          //dispatch an action to fetch the user
      }
    }
    
  render() {
    const {
      match: { params },
    } = this.props;
    console.log('props:userProfile', params);
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149995.png"
            alt="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">Some name</div>
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">test@test.com</div>
        </div>

        <div className="btn-grp">
          <button className="button save-btn">Add Friend</button>
        </div>
      </div>
    );
  }
}

export default UserProfile;
