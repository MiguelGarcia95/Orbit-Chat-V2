import React from 'react';
import {Grid, Header, Container, Icon, Modal, Segment, Label, Input, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {createNewChannel} from '../../redux/actions/channelActions';

class ChannelCategory extends React.Component {
  state = {
    modal: false,
    channelDescription: '',
    channelName: '',
    category: this.props.category,
    user: this.props.user,
    chatroom: this.props.chatroom
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  openModal = () => this.setState({modal: true});
  closeModal = () => this.setState({modal: false});

  onSubmit = () => {
    this.closeModal();
    this.props.createNewChannel(this.state);
  }

  onChannelClick= channel => {
    this.props.getChannelComments(channel.id);
    this.props.getChannel(channel)
  }

  sortChannels = (channels, category) => {
    return channels.reduce(function (filteredChannels, channel) {
      if (channel.channel.categoryId === category.id) {
        filteredChannels.push(channel)
      }
      return filteredChannels
    }, [])
  }

  displayChannels = (channels, category) => {
    let matchingChannels = this.sortChannels(channels, category);
    return matchingChannels.map(channel => {
      return (
        <Header 
          as='h5' 
          textAlign='left'  
          key={channel.id}
          onClick={this.onChannelClick.bind(null, channel)}
          className='category__channel' 
        >
          {channel.channel.name}
        </Header>
      )
    })
  }

  render() {
    const {category, channels} = this.props;
    const {modal} = this.state;
    console.log(this.props.currentChannel)
    return (
      <React.Fragment>
        <Grid  >
          <Container fluid textAlign='right' className='category__container'>
            <Header as='h2' className='category__header' floated='left' >{category.category.name} </Header>
            <Icon name='plus' style={{cursor: 'pointer'}} onClick={this.openModal} />
          </Container>
          <Container fluid textAlign='right'>
            {this.displayChannels(channels, category)}
          </Container>
        </Grid>

        <Modal open={modal} onClose={this.closeModal} >
          <Modal.Header>Create A New Channel</Modal.Header>
          <Modal.Content>
            <Segment>
              <Label attached='top' color='black' >Name</Label>
              <Input fluid placeholder='Channel Name' name='channelName' onChange={this.onChange} />
            </Segment>
            <Segment>
              <Label attached='top' color='black' >Description</Label>
              <Input fluid placeholder='Channel Name' name='channelDescription' onChange={this.onChange} />
            </Segment>
            <Button.Group attached='bottom'>
              <Button negative onClick={this.closeModal}>Cancel</Button>
              <Button.Or />
              <Button positive onClick={this.onSubmit}>Create</Button>
            </Button.Group>
          </Modal.Content>
        </Modal>
      </React.Fragment>
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
    createNewChannel: channel => dispatch(createNewChannel(channel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelCategory);