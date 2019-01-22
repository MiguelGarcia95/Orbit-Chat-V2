import React from 'react';
import {Menu, Grid, Header, Container, Icon, Image, Modal, Segment, Label, Input, Button} from 'semantic-ui-react';
import HeaderFooter from '../Layout/HeaderFooter';

class ChatMenuPanel extends React.Component {
  state = {
    categoryModal: false,
    settingsModal: false,
    categoryName: '',
    categories: [],
    user: null,
    chatroom: null,
    isHome: this.props.isHome,
    currentChannel: ''
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user, 
      chatroom: nextProps.chatroom, 
      categories: nextProps.categories
    });
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  openCategoryModal = () => this.setState({categoryModal: true});
  closeCategoryModal = () => this.setState({categoryModal: false});

  openSettingsModal = () => this.setState({settingsModal: true});
  closeSettingsModal = () => this.setState({settingsModal: false});

  onSubmit = () => {
    this.props.createNewCategory(this.state);
  }

  displayCategories = (categories) => {
    //loop thru categories, and then 
    // fetch matching channels and display them
    return categories.map(category => {
      // Here goes a fucntion that sorts and returns all matching channels in an array.
      return (
        <Grid style={{paddingTop: '70px'}} key={category.id}>
          <Header as ='h3'>{category.category.name}</Header>
          {/* run another function that maps channels, this.displayChannels(channels) */}
        </Grid>
      )
    })
  }

  onSettingsSubmit = () => {
  }

  render() {
    const  {categoryModal, chatroom, user, settingsModal, isHome, categories} = this.state;
    return (
      <Menu
      size='large' 
      fixed='left'
      vertical
      >

        <HeaderFooter 
          chatroom={chatroom} 
          openModal={this.openCategoryModal}
          name={chatroom && chatroom.chatroom.name}
        />

        <Modal open={categoryModal} onClose={this.closeModal} >
          <Modal.Header>Create A New Category</Modal.Header>
          <Modal.Content>
            <Segment>
              <Label attached='top' color='black' >Name</Label>
              <Input fluid placeholder='Category Name' name='categoryName' onChange={this.onChange} />
            </Segment>
            <Button.Group attached='bottom'>
              <Button negative onClick={this.closeCategoryModal}>Cancel</Button>
              <Button.Or />
              <Button positive onClick={this.onSubmit}>Create</Button>
            </Button.Group>
          </Modal.Content>
        </Modal>

        {/* Display Chatroom categories + channels */}
        {this.displayCategories(categories)}

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

export default ChatMenuPanel;