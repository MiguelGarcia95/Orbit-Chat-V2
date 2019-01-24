import React from 'react';
import {Segment, Button, Input} from 'semantic-ui-react';

class MessageForm extends React.Component {
  render() {
    return (
      <Segment className='message__form'>
        <Input
          fluid
          name='message'
          // onChange={this.handleChange}
          style={{marginBottom: '0.7em'}}
          labelPosition='left'
          placeholder='Write your message'
        />
        <Button.Group icon widths='2'>
          <Button
            // onClick={this.sendMessage}
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

export default MessageForm;