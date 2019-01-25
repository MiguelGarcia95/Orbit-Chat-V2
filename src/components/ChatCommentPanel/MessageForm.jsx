import React from 'react';
import {Segment, Button, Input} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {createChannelComment} from '../../redux/actions/channelActions';

class MessageForm extends React.Component {
  state = {
    user: this.props.user,
    currentChannel: this.props.currentChannel,
    chatroom: this.props.chatroom,
    message: null,
    // category: null,
    // createdAt: null,
    // avatar: null,
    // image: null
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  sendMessage = () => {
    this.props.createChannelComment(this.state)
  }

  render() {
    // const {user, currentChannel, chatroom} = this.state;
    return (
      <Segment className='message__form'>
        <Input
          fluid
          name='message'
          onChange={this.onChange}
          style={{marginBottom: '0.7em'}}
          labelPosition='left'
          placeholder='Write your message'
        />
        <Button.Group icon widths='2'>
          <Button
            onClick={this.sendMessage}
            color='blue'
            content='Add Comment'
            labelPosition='left'
            icon='comment'
          />
          <Button
            color='black'
            // onClick={this.openModal}
            content='Upload Image'
            labelPosition='right'
            icon='picture'
          />
        </Button.Group>
      </Segment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createChannelComment: user => dispatch(createChannelComment(user))
  }
}

export default connect(null, mapDispatchToProps)(MessageForm);