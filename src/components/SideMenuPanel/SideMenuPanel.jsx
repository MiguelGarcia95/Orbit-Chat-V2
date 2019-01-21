import React from 'react';
import {Menu, Text, Grid, Header, Icon, Dropdown, Image} from 'semantic-ui-react';

class SideMenuPanel extends React.Component {
  render() {
    const {chatroom, user} = this.props;
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
          as='p'
          className='Header__footer'
          icon
          content={user && (
            // <React.Fragment>
            //   <Image title={user.displayName} src={user.photoURL} size="mini" spaced='right' avatar circular />
            //   {' '}
            //   {/* <p style={{display: 'inline'}}>{user.displayName}</p> */}
            //   <span>{user.displayName} <Icon name='cog' /></span>
            //   {' '}
            //   {/*  */}
            // </React.Fragment>
            <Grid columns='equal' >
              <Grid.Column>
                <Image title={user.displayName} src={user.photoURL} size="mini" spaced='right' avatar circular />
              </Grid.Column>
              <Grid.Column>
                {user.displayName}
              </Grid.Column>
              <Grid.Column>
                <Icon name='cog' />
              </Grid.Column>
            </Grid>
          )}
        />
      </Menu>
    )
  }
}

export default SideMenuPanel;