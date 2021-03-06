import React from 'react';
import {Grid, Sidebar, Menu, Button, Divider, Image, Modal, Input, Label, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createNewChatroom, getChatrooms} from '../../redux/actions/chatroomActions';

class RoomNavbar extends React.Component {
  state = {
    user: null,
    modal: false,
    name: '',
    description: '',
    chatrooms: this.props.chatrooms
  }

  componentDidMount() {
    this.props.getChatrooms();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({user: nextProps.user, chatrooms: nextProps.chatrooms});
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  openModal = () => this.setState({modal: true});

  closeModal = () => this.setState({modal: false});

  displayChatRooms = (chatrooms) => {
    return (
      chatrooms.map(chatroom => {
        return (
          <React.Fragment key={chatroom.id}>
            <Divider  />
            <Link to={`/app/${chatroom.id}`}>
              <Image title={chatroom.chatroom.name} src={chatroom.chatroom.logo} circular />
            </Link>
          </React.Fragment>
        )
      })
    )
  }

  onSubmit = () => {
    this.closeModal();
    this.props.createNewChatroom(this.state);
  }

  render() {
    const {modal, chatrooms} = this.state;
    return (
      <Grid columns='equal' >
        <Sidebar 
          width='very thin'
          icon='labeled'
          as={Menu}
          inverted
          vertical
          visible
        >
          <Divider hidden/>
          <Link to='/app'><Image src='/img/ChatLogo.png' size='mini' rounded centered /></Link>
          <Divider hidden />
          <Button icon='add' size='small' color='grey' inverted onClick={this.openModal} />
          
          {this.displayChatRooms(chatrooms)}

          <Modal open={modal} onClose={this.closeModal} >
            <Modal.Header>Create A New Chatroom</Modal.Header>
            <Modal.Content>
              <Segment>
                <Label attached='top' color='black' >Name</Label>
                <Input fluid placeholder='Chatroom Name' name='name' onChange={this.onChange} />
              </Segment>
              <Segment>
                <Label attached='top' color='black' >Description</Label>
                <Input fluid placeholder='Chatroom Description' name='description' onChange={this.onChange} />
              </Segment>
              <Button.Group attached='bottom'>
                <Button negative onClick={this.closeModal}>Cancel</Button>
                <Button.Or />
                <Button positive onClick={this.onSubmit}>Create</Button>
              </Button.Group>
            </Modal.Content>
          </Modal>
        </Sidebar>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    chatrooms: state.chat.chatrooms
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewChatroom: chat => dispatch(createNewChatroom(chat)),
    getChatrooms: () => dispatch(getChatrooms())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomNavbar);