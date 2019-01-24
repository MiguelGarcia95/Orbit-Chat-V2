import React from 'react';
// import {Menu, Grid, Header, Container, Icon, Image, Modal, Segment, Label, Input, Button} from 'semantic-ui-react';
import {Menu, Modal, Segment, Label, Input, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {getChannel} from '../../redux/actions/channelActions';
import HeaderFooter from '../Layout/HeaderFooter';
import ChannelCategory from '../Layout/ChannelCategory';

class ChatMenuPanel extends React.Component {
  state = {
    categoryModal: false,
    settingsModal: false,
    categoryName: '',
    categories: [],
    channels: [],
    user: null,
    chatroom: null,
    isHome: this.props.isHome,
    currentChannel: this.props.currentChannel
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user, 
      chatroom: nextProps.chatroom, 
      categories: nextProps.categories,
      channels: nextProps.channels,
      currentChannel: nextProps.currentChannel
    });
    if (nextProps.currentChannel === null) {
      this.setState({
        currentChannel: nextProps.channels[nextProps.channels.length - 1]
      })
    }
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  openCategoryModal = () => this.setState({categoryModal: true});
  closeCategoryModal = () => this.setState({categoryModal: false});

  openSettingsModal = () => this.setState({settingsModal: true});
  closeSettingsModal = () => this.setState({settingsModal: false});

  onSubmit = () => {
    this.closeCategoryModal();
    this.props.createNewCategory(this.state);
  }

  displayCategories = (categories) => {
    return categories.map(category => {
      return (
        <ChannelCategory  
          key={category.id}
          channels={this.state.channels}
          category={category} 
          user={this.state.user} 
          chatroom={this.state.chatroom}
          getChannel={this.props.getChannel}
        />
      )
    })
  }

  onSettingsSubmit = () => {
  }

  render() {
    const  {categoryModal, chatroom, settingsModal, categories, currentChannel} = this.state;
    // console.log(currentChannel)
    return (
      <Menu
      size='large' 
      fixed='left'
      vertical
      style={{paddingTop: '70px'}}
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

const mapStateToProps = state => {
  return {
    currentChannel: state.channel.currentChannel
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChannel: (chatId, channelId) => dispatch(getChannel(chatId, channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMenuPanel);