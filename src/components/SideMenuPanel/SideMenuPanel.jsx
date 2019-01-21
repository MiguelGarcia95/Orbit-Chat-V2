import React from 'react';
import {Menu, Grid, Header, Icon, Dropdown, Image} from 'semantic-ui-react';

class SideMenuPanel extends React.Component {
  render() {
    return (
      <Menu
      size='large' 
      fixed='left'
      vertical
      >
        <Grid >
        <Grid.Column>
          <Grid.Row style={{padding: '1.2rem', margin: 0}}>
            {/* App Header*/}
            <Header inverted floated='left' as='h2'>
              <Icon name='code' />
              <Header.Content>Chatroom Name</Header.Content>
            </Header>
            {/* User Dropdown */}
            <Header style={{padding: '0.25em'}} as='h4' inverted>
              <Dropdown
                trigger={
                  <span>
                    <Image src='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.97dVutqjYMV-pVyHasPiaQHaHa%26pid%3D15.1&f=1' spaced='right' avatar/>
                    'Name'
                  </span>
                }
              />
            </Header>
          </Grid.Row>

          {/* Change Avatar */}
          {/* <Modal basic open={modal} onClose={this.closeModal}>
            <Modal.Header>Change Avatar</Modal.Header>
            <Modal.Content>
              <Input  
                fluid 
                type='file'
                label='New Avatar'
                name='previewImage'
                onChange={this.handleChange}
              />
              <Grid centered stackable columns={2}>
                <Grid.Row centered>
                  <Grid.Column className='ui center align grid'>
                    {previewImage && (
                      <AvatarEditor
                        ref={node => (this.avatarEditor = node)}
                        image={previewImage}
                        width={120}
                        height={120}
                        border={50}
                        scale={1.2}
                      />
                    )}
                  </Grid.Column>
                  <Grid.Column>
                    {croppedImage && (
                      <Image 
                        style={{margin: '3.5em auto'}}
                        width={100}
                        height={100}
                        src={croppedImage}
                      />
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
            <Modal.Actions>
              {croppedImage && (
                <Button onClick={this.uploadCroppedImage} color='green' inverted><Icon name='save' /> Change Avatar </Button>
              )}
              <Button onClick={this.handleCropImage} color='green' inverted><Icon name='image' /> Preview </Button>
              <Button onClick={this.closeModal} color='red' inverted><Icon name='remove' /> Cancel </Button>
            </Modal.Actions> */}
          {/* </Modal> */}
        </Grid.Column>
      </Grid>
      </Menu>
    )
  }
}

export default SideMenuPanel;