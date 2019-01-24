import React from 'react';
import {connect} from 'react-redux';
import {Menu, Grid, Container} from 'semantic-ui-react';

class ChatCommentPanel extends React.Component {
  state = {
    currentChannel: null
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      currentChannel: nextProps.currentChannel
    });
    if (nextProps.currentChannel === null) {
      this.setState({
        currentChannel: nextProps.channels[nextProps.channels.length - 1]
      })
    }
  }



  render() {
    console.log(this.state.currentChannel)
    return (
      <React.Fragment>
        <Menu.Header 
          as='div'
          className='Header__header'
          content={(
            <Grid>
              <Grid.Row columns='2'>
                <Grid.Column verticalAlign='middle' width={12}>
                  <Container fluid>
                    {'Channel Name Here'}
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )}
        /> 
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentChannel: state.channel.currentChannel,
    channels: state.channel.channels
  }
}


export default connect(mapStateToProps)(ChatCommentPanel);