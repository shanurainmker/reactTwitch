import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  // state = {
  //   isSignedIn: null,
  // };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id:
            // "107726726993-occukkuj4q198hpvt8khucjlqqa7co3r.apps.googleusercontent.com", //sushant id web client id 1 --localhost:3000
            "107726726993-9sf2ftj9a4c7238r1r7vqbklmu2o721k.apps.googleusercontent.com", //sushant id webclient 2 --localhost:3001
          //  "797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com", //help id
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthchange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthchange);
        });
    });
    console.log("--");
  }

  onAuthchange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else this.props.signOut();

    // this.setState({
    //   isSignedIn: this.auth.isSignedIn.get(),
    // });
  };
  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthbutton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"></i>Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"></i>Sign in with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthbutton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
