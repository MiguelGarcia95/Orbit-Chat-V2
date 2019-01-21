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
          style={{textAlign: 'center', padding: '10px 0px', background: '#232323', color: 'white'}} 
        />

        <Menu.Header 
          as='h3'
          className='Header__footer'
          content={chatroom && chatroom.chatroom.name}
          style={{textAlign: 'center', padding: '10px 0px', background: '#232323', color: 'white', position: 'absolute', bottom: '0', width: '100%', left: '0'}}
        />
      </Menu>
    )
  }
}

export default SideMenuPanel;