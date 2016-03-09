import React from 'react';
import { Link } from 'react-router';

import NameContainer from 'containers/Chat/NameContainer';
import ChatContainer from 'containers/Chat/ChatContainer';

export class HomeView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <div className='row'>
          <NameContainer />
          <hr />
          <ChatContainer />
        </div>
        <hr />
        <Link to='/404'>Go to 404 Page</Link>
      </div>
    );
  }
}

export default HomeView;
