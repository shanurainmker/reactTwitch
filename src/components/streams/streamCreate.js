import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./streamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValue) => {
    this.props.createStream(formValue);
  };

  render() {
    //console.log("this.props", this.props);
    return (
      <div>
        <h3>Stream create</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
