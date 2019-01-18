import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';

class Login extends React.Component {
  state = {

  }

  render() {
    return (
      <Grid textAlign='center' verticalAlign='middle' className='app'>
        <Grid.Column width={4}>
          <Header as='h1' color='black' textAlign='center'>
            Login to Orbit
          </Header>
          <Form size='large'>
            <Segment raised >
              <Form.Field>
                <Form.Input 
                fluid
                icon='mail'
                iconPosition='left'
                name='email' 
                type='email'
                placeholder='Email'
                />
              </Form.Field>
              <Form.Field>
                <Form.Input 
                fluid
                icon='lock'
                iconPosition='left'
                name='password' 
                type='password'
                placeholder='Password'
                />
              </Form.Field>
            </Segment>
          </Form>
          <Message>Not a user? <Link to='/register'>Register</Link></Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Login;