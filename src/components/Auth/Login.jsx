import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Form, Segment, Button, Header, Message, Image} from 'semantic-ui-react';

class Login extends React.Component {
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
            Login to Orbit
          </Header>
          <Form size='large' onSubmit={this.onSubmit}>
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
              <Button className='' color='violet' fluid size='large'>Submit</Button>
            </Segment>
          </Form>
          <Message>Not a user? <Link to='/register'>Register</Link></Message> 
        </Grid.Column>
      </Grid>
    )
  }
}

export default Login;