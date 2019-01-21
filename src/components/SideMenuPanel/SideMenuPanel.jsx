import React from 'react';
import {Menu, Grid, Header, Icon, Dropdown, Image} from 'semantic-ui-react';

class SideMenuPanel extends React.Component {
  render() {
    return (
      <Menu
      size='large' 
      fixed='left'
      vertical
      >
        <Menu.Header 
          as='h3' 
          content='Chatroom anme' 
          style={{textAlign: 'center', padding: '10px 0px'}} 
        />
      </Menu>
    )
  }
}

export default SideMenuPanel;