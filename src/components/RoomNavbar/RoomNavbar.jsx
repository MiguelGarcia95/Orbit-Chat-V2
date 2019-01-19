import React from 'react';
import {Sidebar, Menu} from 'semantic-ui-react';

class RoomNavbar extends React.Component {
  render() {
    return (
      <Sidebar 
        width='very thin'
        icon='labeled'
        as={Menu}
        inverted
        vertical
        visible
      >
      </Sidebar>
    )
  }
}

export default RoomNavbar;