import React from 'react';
import { Link } from 'react-router';
import classes from './HomeView.scss';

export class HomeView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <div className='row'>
          <h2><span className={classes['dat-class']}>Hello world !</span></h2>
        </div>
        <hr />
        <Link to='/todos'>Go to TODOs view</Link>
      </div>
    );
  }
}

export default HomeView;
