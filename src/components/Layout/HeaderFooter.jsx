import React from 'react';
import {Menu, Grid, Container, Dropdown} from 'semantic-ui-react';

const HeaderFooter = props => {
  const {chatroom, openModal, name} = props;
  return (
    <Menu.Header 
      as='div'
      className='Header__header'
      content={chatroom && (
        <Grid>
          <Grid.Row columns='2'>
            <Grid.Column verticalAlign='middle' width={12}>
              <Container fluid>
                {name}
              </Container>
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={2}>
              <Container fluid>
                <Dropdown icon='plus'>
                  <Dropdown.Menu direction='left' >
                    <Dropdown.Item text='New Category' onClick={openModal} />
                  </Dropdown.Menu>
                </Dropdown>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    />
  )
}

export default HeaderFooter;