import React from 'react';
import {Grid, Sidebar, Menu, Button, Divider, Image, Modal} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class RoomNavbar extends React.Component {
  state = {
    modal: true
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  openModal = () => this.setState({modal: true});
  closeModal = () => this.setState({modal: false});

  displayChatRooms = () => {

  }

  render() {
    const {modal} = this.state;
    return (
      <Grid >
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
          <Button icon='add' size='small' color='gray' inverted onClick={this.openModal} />
          <Modal open={modal} onClose={this.closeModal} >

          </Modal>
        </Sidebar>
      </Grid>
    )
  }
}

export default RoomNavbar;