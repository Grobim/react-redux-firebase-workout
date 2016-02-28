import React from 'react';
import { Link } from 'react-router';

import BoardContainer from 'containers/Board/BoardContainer';

export class HomeView extends React.Component {
  render () {
    return (
      <div className={'container-fluid text-center'}>
        <BoardContainer />
        <hr />
        <Link to='/404'>Go to 404 Page</Link>
      </div>
    );
  }
}

export default HomeView;
