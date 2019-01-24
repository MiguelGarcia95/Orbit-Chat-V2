import React from 'react';
import {Header} from 'semantic-ui-react';

const ChatPanelHeader = ({currentChannel}) => {
  return (
    <Header as='h4' className='Chat__header' style={{height: '59px'}} textAlign='left' block={true} color='black'>
      <p>{currentChannel.channel.name}: <small>{currentChannel.channel.description}</small></p>
    </Header>
  )
}



export default ChatPanelHeader;