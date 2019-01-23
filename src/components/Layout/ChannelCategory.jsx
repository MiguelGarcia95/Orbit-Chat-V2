import React from 'react';
import {Menu, Grid, Header, Container, Icon, Image, Modal, Segment, Label, Input, Button} from 'semantic-ui-react';

class ChannelCategory extends React.Component {
  state = {
    modal: false
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  openModal = () => this.setState({modal: true});
  closeModal = () => this.setState({modal: false});

  onSubmit = () => {
    console.log(this.state);
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
          <Modal.Header>Create A New Category</Modal.Header>
          <Modal.Content>
            <Segment>
              <Label attached='top' color='black' >Name</Label>
              <Input fluid placeholder='Category Name' name='categoryName' onChange={this.onChange} />
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

export default ChannelCategory;