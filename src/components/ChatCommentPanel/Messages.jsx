import React from 'react';
import {Comment, Message} from 'semantic-ui-react';
import {getChannelComments} from '../../redux/actions/channelActions';
import {connect} from 'react-redux';

class Messages extends React.Component {
  state = {
    comments: []
  }

  componentDidMount() {
    this.props.getChannelComments(this.props.currentChannel.id);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      comments: nextProps.comments
    });
  }

  render() {
    const {comments} = this.state;
    console.log(comments);
    return (
      <Comment.Group>

      </Comment.Group>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.channel.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChannelComments: channelId => dispatch(getChannelComments(channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);