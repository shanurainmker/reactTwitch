import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions/index";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  // deletedId = () => {};
  renderAdmin(stream) {
    if (stream.userId === this.props.curentUserId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/stream/edit/${stream.id}`}>
            Edit
          </Link>

          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream, i) => {
      return (
        <div key={stream.id} className="item">
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/stream/new" className="ui button primary">
            Create New
          </Link>
        </div>
      );
    }
  }

  render() {
    console.log("this.props", this.props.streams);
    return (
      <div>
        <h2> Streams</h2>

        <div className="ui celled list"> {this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.stream),
    curentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
