import React from 'react';
import {Comment, Message} from 'semantic-ui-react';
import {getChannelComments} from '../../redux/actions/channelActions';
import {connect} from 'react-redux';

class Messages extends React.Component {
  render() {
    return (
      <Comment.Group>

      </Comment.Group>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChannelComments: channelId => dispatch(getChannelComments(channelId))
  }
}

export default connect(null, mapDispatchToProps)(Messages);