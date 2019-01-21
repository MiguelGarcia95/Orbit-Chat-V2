import React from 'react';
import {Menu, Grid, Container, Icon, Dropdown, Image} from 'semantic-ui-react';

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
            <Grid columns='equal' >
              <Grid.Row>
                <Grid.Column>
                  <Image title={user.displayName} src={user.photoURL} size="mini" spaced='right' avatar circular />
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                  <Container fluid>
                    <p>{user.displayName}</p>
                  </Container>
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                  <Container fluid>
                    <Icon name='cog' size='large' />
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )}
        />
      </Menu>
    )
  }
}

export default SideMenuPanel;