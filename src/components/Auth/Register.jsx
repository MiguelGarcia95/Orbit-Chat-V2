import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Form, Segment, Button, Header, Message, Image} from 'semantic-ui-react';
import {createNewUser} from '../../redux/actions/authActions';
import {connect} from 'react-redux';
import firebase from '../../firebase';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmed_password: ''
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push('/');
      }
    })
  }

  onSubmit = () => {
    this.props.createNewUser(this.state);
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  render() {
    const {username, email, password, confirmed_password} = this.state;
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
                onChange={this.onChange}
                value={username}
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
                onChange={this.onChange}
                value={email}
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
                onChange={this.onChange}
                value={password}
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
                onChange={this.onChange}
                value={confirmed_password}
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

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: (user) => dispatch(createNewUser(user))
  }
}

export default connect(null, mapDispatchToProps)(Register);