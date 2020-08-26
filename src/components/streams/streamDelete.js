import React from "react";
import Modal from "../../modal";
import history from "../../history";
import { Link } from "react-router-dom";

import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderAction() {
    const { id } = this.props.match.params;
    return (
      <div>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button ">
          Cancel
        </Link>
      </div>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "are you sure want delete this item";
    }
    return `are you sure want delete this stream <i>${this.props.stream.title}</i>`;
  }
  render() {
    return (
      <div>
        Delete Stream
        <Modal
          title="delete Stream"
          content={this.renderContent()}
          action={this.renderAction()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
