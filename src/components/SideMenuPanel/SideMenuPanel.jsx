import React from 'react';
import {Menu, Grid, Header, Icon, Dropdown, Image} from 'semantic-ui-react';

class SideMenuPanel extends React.Component {
  render() {
    const {chatroom} = this.props;
    return (
      <Menu
      size='large' 
      fixed='left'
      vertical
      >
        <Menu.Header 
          as='h3'
          className='Header__header'
          content={chatroom && chatroom.chatroom.name}
        />

        <Menu.Header 
          as='h3'
          className='Header__footer'
          content={chatroom && chatroom.chatroom.name}
        />
      </Menu>
    )
  }
}

export default SideMenuPanel;