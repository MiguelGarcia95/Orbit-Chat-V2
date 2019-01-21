import React from 'react';
import {Menu, Grid, Container, Icon, Dropdown, Image} from 'semantic-ui-react';

class SideMenuPanel extends React.Component {
  state = {
    modal: false
  }

  openModal = () => this.setState({modal: true});

  closeModal = () => this.setState({modal: false});

  render() {
    const {chatroom, user} = this.props;
    return (
      <Menu
      size='large' 
      fixed='left'
      vertical
      >
        <Menu.Header 
          as='div'
          className='Header__header'
          content={chatroom && (
            <Grid>
              <Grid.Row columns='2'>
                <Grid.Column verticalAlign='middle' width={12}>
                  <Container fluid>
                    {chatroom.chatroom.name}
                  </Container>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={2}>
                  <Container fluid>
                    <Dropdown icon='plus'>
                      <Dropdown.Menu>
                        <Dropdown.Item text='New Category' onClick={this.openModal} />
                        {/* <Dropdown.Divider /> */}
                        {/* <Dropdown.Item text='E-mail Collaborators' /> */}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )}
        />

{/* <Dropdown text='File'>
    <Dropdown.Menu>
      <Dropdown.Item text='New' />
      <Dropdown.Item text='Open...' description='ctrl + o' />
      <Dropdown.Item text='Save as...' description='ctrl + s' />
      <Dropdown.Item text='Rename' description='ctrl + r' />
      <Dropdown.Item text='Make a copy' />
      <Dropdown.Item icon='folder' text='Move to folder' />
      <Dropdown.Item icon='trash' text='Move to trash' />
      <Dropdown.Divider />
      <Dropdown.Item text='Download As...' />
      <Dropdown.Item text='Publish To Web' />
      <Dropdown.Item text='E-mail Collaborators' />
    </Dropdown.Menu>
  </Dropdown> */}

        {/* Display Chatroom categories + channels */}

        <Menu.Header 
          as='div'
          className='Header__footer'
          content={user && (
            <Grid columns='equal' >
              <Grid.Row>
                <Grid.Column>
                  <Image src={user.photoURL} size="mini" spaced='right' avatar circular />
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                  <Container fluid>
                    {user.displayName}
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