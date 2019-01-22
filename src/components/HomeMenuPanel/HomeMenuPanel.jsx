import React from 'react';
import {Menu, Grid, Container, Icon, Image, Modal, Segment, Label, Input, Button} from 'semantic-ui-react';

class HomeMenuPanel extends React.Component {
  state = {
    settingsModal: false,
    user: null
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({user: nextProps.user});
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  openSettingsModal = () => this.setState({settingsModal: true});
  closeSettingsModal = () => this.setState({settingsModal: false});

  onSettingsSubmit = () => {
  }

  render() {
    const  {settingsModal, user} = this.state;
    return (
      <Menu
      size='large' 
      fixed='left'
      vertical
      >

        {/* <Menu.Header 
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
                      <Icon name='cog' size='large' style={{cursor: 'pointer'}} onClick={this.openSettingsModal} />
                    </Container>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            )}
          /> */}

        

        <Modal size='small' basic centered={false} open={settingsModal} onClose={this.closeSettingsModal} >
          <Modal.Header>Settings</Modal.Header>
          {/* <Modal.Content style={{background: '#232323'}} > */}
          <Modal.Content>
            <Segment>
              <Label attached='top' >Name</Label>
              <Input fluid placeholder='Category Name' name='name' onChange={this.onChange} />
            </Segment>
            <Button.Group attached='bottom'>
              <Button negative onClick={this.closeSettingsModal}>Cancel</Button>
              <Button.Or />
              <Button positive onClick={this.onSettingsSubmit}>Save</Button>
            </Button.Group>
          </Modal.Content>
        </Modal>

      </Menu>
    )
  }
}

export default HomeMenuPanel;