import React from 'react';
import {Comment} from 'semantic-ui-react';
import {getChannelComments} from '../../redux/actions/channelActions';
import {connect} from 'react-redux';
import Message from './Message';

class Messages extends React.Component {
  state = {
    comments: [],
    currentChannelId: ''
  }

  componentDidMount() {
    this.props.getChannelComments(this.props.currentChannel.id);
    this.setState({currentChannelId: this.props.currentChannel.id});
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      comments: nextProps.comments
    });
  }

  displayComments = comments => {
    return comments.map(comment => {
      return (
        <Message key={comment.id} message={comment.comment} />
      )
    })
  }

  render() {
    const {comments} = this.state;
    // console.log(comments)
    return (
      <Comment.Group>
        {this.displayComments(comments)}
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