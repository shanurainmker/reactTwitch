import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const classNameErr = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={classNameErr}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui  error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  onSubmit = (formValue) => {
    this.props.onSubmit(formValue);
  };

  render() {
    //console.log("this.props", this.props);
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="title"
            type="text"
            component={this.renderInput}
            label="Enter title"
          />
          <Field
            name="description"
            type="text"
            component={this.renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValue) => {
  const error = {};
  if (!formValue.title) {
    error.title = "you must enter title";
  }

  if (!formValue.description) {
    error.description = "you must description";
  }
  return error;
};

export default reduxForm({ form: "streamForm", validate })(StreamForm);
