import React from 'react';
import {Comment} from 'semantic-ui-react';
import {getChannelComments} from '../../redux/actions/channelActions';
import {connect} from 'react-redux';
import Message from './Message';
import MessagesLoading from './MessagesLoading';

class Messages extends React.Component {
  state = {
    comments: [],
    currentChannelId: '',
    isLoadingArray: ['','','','','','']
  }

  componentDidMount() {
    this.props.getChannelComments(this.props.currentChannel.id);
    this.setState({currentChannelId: this.props.currentChannel.id});
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      comments: nextProps.comments
    });
    // this.props.getChannelComments(this.props.currentChannel.id);
  }

  displayComments = comments => {
    if (this.props.isChannelLoading) {
      return this.state.isLoadingArray.map((comment, i) => {
        return (
          <MessagesLoading key={i} />
        )
      })
    } else {
      return comments.map(comment => {
        return (
          <Message key={comment.id} message={comment.comment} />
        )
      })
    }
  }

  render() {
    const {comments} = this.state;
    return (
      <Comment.Group className='messages' >
        {this.displayComments(comments)}
      </Comment.Group>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.channel.comments,
    isChannelLoading: state.channel.isChannelLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChannelComments: channelId => dispatch(getChannelComments(channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);