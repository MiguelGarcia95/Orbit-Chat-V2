import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Form, Segment, Button, Header, Message, Image} from 'semantic-ui-react';

class Register extends React.Component {
  state = {

  }

  onSubmit = () => {
    console.log(this.state)
  }

  render() {
    return (
      <Grid textAlign='center' verticalAlign='middle' className='app'>
        <Grid.Column width={4}>
          <Header as='h1' color='black' icon textAlign='center'>
            <i className='icon'>
              <Image src='/img/ChatLogoBLK.png' size='tiny' rounded centered />
            </i>
            Register to Orbit
          </Header>
          <Form size='large' onSubmit={this.onSubmit}>
            <Segment raised >
              <Form.Field>
                <Form.Input 
                fluid
                icon='user'
                iconPosition='left'
                name='username' 
                type='username'
                placeholder='Username'
                />
              </Form.Field>
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
              <Form.Field>
                <Form.Input 
                fluid
                icon='lock'
                iconPosition='left'
                name='confirmed_password' 
                type='password'
                placeholder='Confirm Password'
                />
              </Form.Field>
              <Button className='' color='violet' fluid size='large'>Submit</Button>
            </Segment>
          </Form>
          <Message>Already a user? <Link to='/login'>Login</Link></Message> 
        </Grid.Column>
      </Grid>
    )
  }
}

export default Register;