import React from 'react';
import {Menu, Grid, Container, Icon, Dropdown, Image, Modal, Segment, Label, Input, Button} from 'semantic-ui-react';

class SideMenuPanel extends React.Component {
  state = {
    categoryModal: false,
    settingsModal: false,
    name: '',
    description: '',
    user: null,
    chatroom: null
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({user: nextProps.user, chatroom: nextProps.chatroom});
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  openCategoryModal = () => this.setState({categoryModal: true});

  closeCategoryModal = () => this.setState({categoryModal: false});

  onSubmit = () => {
    this.props.createNewCategory(this.state);
  }

  render() {
    const  {categoryModal, chatroom, user, settingsModal} = this.state;
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
                      <Dropdown.Menu direction='left' >
                        <Dropdown.Item text='New Category' onClick={this.openCategoryModal} />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )}
        />

        <Modal open={categoryModal} onClose={this.closeModal} >
          <Modal.Header>Create A New Category</Modal.Header>
          <Modal.Content>
            <Segment>
              <Label attached='top' color='black' >Name</Label>
              <Input fluid placeholder='Category Name' name='name' onChange={this.onChange} />
            </Segment>
            <Button.Group attached='bottom'>
              <Button negative onClick={this.closeCategoryModal}>Cancel</Button>
              <Button.Or />
              <Button positive onClick={this.onSubmit}>Create</Button>
            </Button.Group>
          </Modal.Content>
        </Modal>

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
                    <Icon name='cog' size='large' style={{cursor: 'pointer'}} />
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )}
        />

        <Modal open={settingsModal} onClose={this.closeModal} >
          <Modal.Header>Create A New Category</Modal.Header>
          <Modal.Content>
            <Segment>
              <Label attached='top' color='black' >Name</Label>
              <Input fluid placeholder='Category Name' name='name' onChange={this.onChange} />
            </Segment>
            <Button.Group attached='bottom'>
              <Button negative onClick={this.closeCategoryModal}>Cancel</Button>
              <Button.Or />
              <Button positive onClick={this.onSubmit}>Create</Button>
            </Button.Group>
          </Modal.Content>
        </Modal>

      </Menu>
    )
  }
}

export default SideMenuPanel;