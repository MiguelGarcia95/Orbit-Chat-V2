import React from 'react';
import {Comment, Image} from 'semantic-ui-react';

const Message = (props) => {
  return (
    <Comment>
      <Comment.Avatar src={props.message.avatar} />
      <Comment.Content>
        <Comment.Author as='a'>{props.message.username}</Comment.Author>
        {/* <Comment.Metadata></Comment.Metadata> */}
        <Comment.Text>{props.message.message}</Comment.Text>
      </Comment.Content>
    </Comment>
  )
}

export default Message;