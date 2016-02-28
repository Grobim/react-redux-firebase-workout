import React, { PropTypes } from 'react';

import classes from './AddCardList.scss';

export default class AddCardList extends React.Component {
  static propTypes = {
    addCardList : PropTypes.func.isRequired
  };

  render () {
    const {
      addCardList
    } = this.props;
    let input;

    return (
      <div className={classes['column'] + ' col-lg-3 col-md-4 col-sm-6 col-xs-8'}>
        <form className={'form-inline'} onSubmit={(e) => {
          e.preventDefault();
          if (input.value) {
            addCardList(input.value.trim());
            input.value = '';
          }
        }}>
          <div className='form-group'>
            <input type='text' className={'form-control'} ref={node => {
              input = node;
            }} />
            <input type='submit' value='New list' className={'btn btn-default'} />
          </div>
        </form>
      </div>
    );
  }
}
