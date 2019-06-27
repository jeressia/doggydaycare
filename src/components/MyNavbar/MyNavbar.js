import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavbar extends Component {
  logoutButton = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand" href=".">Doggy Daycare</a>
          <form className="form-inline">
              <button className="btn btn-danger my-2 my-sm-0" type="submit" onClick={this.logoutButton}>Logout</button>
          </form>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
