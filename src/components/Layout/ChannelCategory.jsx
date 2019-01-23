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

  render() {
    const {category} = this.props;
    const {modal} = this.state;
    return (
      <React.Fragment>
        <Grid  >
          <Container fluid textAlign='right'>
            <Header as='h3' floated='left' >{category.category.name} </Header>
            <Icon name='plus' style={{cursor: 'pointer'}} onClick={this.openModal} />
          </Container>
          {/* run another function that maps channels, this.displayChannels(channels) */}
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

const mapDispatchToProps = dispatch => {
  return {
    createNewChannel: channel => dispatch(createNewChannel(channel))
  }
}

export default connect(null, mapDispatchToProps)(ChannelCategory);