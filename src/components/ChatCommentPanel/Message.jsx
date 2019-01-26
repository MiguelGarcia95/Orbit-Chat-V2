import React from 'react';
import {Comment} from 'semantic-ui-react';

const Message = ({message}) => {
  return (
    <Comment>
      <Comment.Avatar src={message.avatar} />
      <Comment.Content>
        <Comment.Author as='a'>{message.username}</Comment.Author>
        {/* <Comment.Metadata></Comment.Metadata> */}
        <Comment.Text>{message.message}</Comment.Text>
      </Comment.Content>
    </Comment>
  )
}

export default Message;